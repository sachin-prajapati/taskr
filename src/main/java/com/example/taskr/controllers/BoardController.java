package com.example.taskr.controllers;

import com.example.taskr.collections.*;
import com.example.taskr.model.request.*;
import com.example.taskr.model.response.BoardResponse;
import com.example.taskr.repositories.BoardRepository;
import com.example.taskr.repositories.UserRepository;
import com.example.taskr.service.BoardService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/board")
public class BoardController {
    @Autowired
    BoardService boardService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    BoardRepository boardRepository;

    @PostMapping("/create")
    public ModelMap createBoard(@RequestBody BoardDetailRequestModel board) {
        BoardCollection boardCollection = new BoardCollection();
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserCollection userCollection = userRepository.findByUserName(userName);
        List<String> members = boardCollection.getBoardMembers();
        members.add(userName);
        boardCollection.setBoardMembers(members);
        boardCollection.setMadeBy(userName);
        BeanUtils.copyProperties(board, boardCollection);
        boardService.createBoard(boardCollection);
        List<String> myBoard = userCollection.getMyBoards();
        myBoard.add(boardCollection.getId());
        userCollection.setMyBoards(myBoard);
        userRepository.save(userCollection);

        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("massage", "board created with board name '" + board.getbName() + "' ");
        return modelMap;
    }

    @GetMapping("/{boardId}")
    public BoardResponse getBoard(@PathVariable String boardId) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (boardCollection == null) throw new RuntimeException("no board exist with such id");
        else {
            if (!boardCollection.getBoardMembers().contains(userName))
                throw new RuntimeException("Only board member can see board");
            else {
                BoardResponse board =new BoardResponse();
                BeanUtils.copyProperties(boardCollection,board);
                if(userRepository.findByUserName(userName).getStarredBoard().contains(boardId))
                    board.setBookmark(true);
                return board;
            }
        }
    }

    @PatchMapping("/update/{boardId}")
    public ModelMap updateBoard(@RequestBody UpdateBoard updateBoard, @PathVariable String boardId) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can update board");
        boardCollection.setbName(updateBoard.getbName());
        boardCollection.setDescription(updateBoard.getDescription());
        ActivityCollection activity = new ActivityCollection(boardId, LocalDateTime.now(), userName + " updated this board");
        boardCollection.getActivities().add(activity);
        boardRepository.save(boardCollection);
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("massage","board updated");
        return modelMap;
    }

    @PatchMapping("/addMember/{boardId}")
    public ModelMap addMember(@PathVariable String boardId, @RequestBody AddMember addmember) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can add members to board");
        UserCollection user = userRepository.findByUserName(addmember.getMemberUsername());
        if (user != null) {
            List<String> members = boardCollection.getBoardMembers();
            if (members.contains(addmember.getMemberUsername()))throw new RuntimeException(addmember.getMemberUsername()+" is already a member of this board");
            members.add(addmember.getMemberUsername());
            boardCollection.setBoardMembers(members);
            ActivityCollection activity = new ActivityCollection(boardId, LocalDateTime.now(), userName + " added "+addmember.getMemberUsername()+" to this board");
            boardCollection.getActivities().add(activity);
            boardRepository.save(boardCollection);
            List<String> myBoard = user.getMyBoards();
            myBoard.add(boardCollection.getId());
            user.setMyBoards(myBoard);
            List<NotificationCollection> notification=user.getNotifications();
            String message=userName+" added you to the board at "+ LocalDateTime.now().format(DateTimeFormatter.ofPattern("h:mm a"));
            boardService.sendNotification(addmember.getMemberUsername(),message);
            NotificationCollection notificationCollection=new
                    NotificationCollection(notification.size(),message+boardCollection.getbName(),LocalDateTime.now());
            notification.add(notificationCollection);
            userRepository.save(user);
            ModelMap modelMap = new ModelMap();
            modelMap.addAttribute("massage", addmember.getMemberUsername() + " added to board as member");

            return modelMap;
        } else
            throw new RuntimeException("No user exist with such username");
    }

    @PatchMapping("/removeMember/{boardId}")
    public ModelMap removeMember(@PathVariable String boardId,@RequestBody AddMember member){
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))throw new RuntimeException("Only board member can add members to board");
        UserCollection user = userRepository.findByUserName(member.getMemberUsername());
        if (user != null) {
            List<String> members = boardCollection.getBoardMembers();
            members.remove(member.getMemberUsername());
            boardCollection.setBoardMembers(members);
            ActivityCollection activity = new ActivityCollection(boardId, LocalDateTime.now(), userName + " removed "+member.getMemberUsername()+" from this board");
            boardCollection.getActivities().add(activity);
            boardRepository.save(boardCollection);
            List<String> myBoard =user.getMyBoards();
            myBoard.remove(boardCollection.getId());
            user.setMyBoards(myBoard);
            List<NotificationCollection> notification=user.getNotifications();
            NotificationCollection notificationCollection=new
                    NotificationCollection(notification.size(),userName+" removed you from the board "+boardCollection.getbName(),LocalDateTime.now());
            notification.add(notificationCollection);
            userRepository.save(user);
            ModelMap modelMap = new ModelMap();
            modelMap.addAttribute("massage", member.getMemberUsername() + " removed from board as member");
            return modelMap;
        } else
            throw new RuntimeException("No user exist with such username");
    }

    @DeleteMapping("/delete/{boardId}")
    public ModelMap deleteBoard(@PathVariable String boardId) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!boardRepository.findBoardCollectionById(boardId).getMadeBy().equals(userName))
            throw new RuntimeException("only board admin can delete board");
        List<String>boardMember=boardRepository.findBoardCollectionById(boardId).getBoardMembers();
        for (String memberName: boardMember) {
            UserCollection user=userRepository.findByUserName(memberName);
            user.getMyBoards().remove(boardId);
            userRepository.save(user);
        }
        boardRepository.delete(boardRepository.findBoardCollectionById(boardId));
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("massage", "Board deleted successfully");
        return modelMap;
    }

    @PostMapping("addList/{boardId}")
    public ModelMap addList(@PathVariable String boardId, @RequestBody ListDetailRequestModel model) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can add list to board");
        List<ListCollection> lists = boardCollection.getLists();
        ListCollection list = new ListCollection();
        BeanUtils.copyProperties(model, list);
        list.setId(lists.size());
        lists.add(list);
        boardCollection.setLists(lists);
        boardCollection.setUpdatedAt(LocalDateTime.now());
        boardRepository.save(boardCollection);
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("message", "list created");
        return modelMap;

    }

    @DeleteMapping("/deleteList/{boardId}/{listId}")
    public ModelMap deleteList(@PathVariable String boardId,@PathVariable int listId) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can delete list in board");
        List<ListCollection> lists = boardCollection.getLists();
        lists.remove(listId);
        boardCollection.setLists(lists);
        boardCollection.setUpdatedAt(LocalDateTime.now());
        boardRepository.save(boardCollection);
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("message", "list deleted");
        return modelMap;
    }

    @PutMapping("addToFavourite/{boardId}")
    public ModelMap bookmark(@PathVariable String boardId, @RequestBody BookmarkStatus bookmarkStatus) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserCollection user = userRepository.findByUserName(userName);
        if (!user.getMyBoards().contains(boardId)) throw new RuntimeException("You are not member of this board");
        else {
            ModelMap modelMap = new ModelMap();
            if (bookmarkStatus.isBookmark()) {
                user.getStarredBoard().add(boardId);
                userRepository.save(user);
                modelMap.addAttribute("message", "board added to your favourite boards");
                return modelMap;
            } else {
                user.getStarredBoard().remove(boardId);
                userRepository.save(user);
                modelMap.addAttribute("message", "board removed from your favourite boards");
                return modelMap;
            }
        }
    }

}
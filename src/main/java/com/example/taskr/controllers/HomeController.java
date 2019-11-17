package com.example.taskr.controllers;

import com.example.taskr.collections.UserCollection;
import com.example.taskr.model.response.BoardResponse;
import com.example.taskr.model.response.UserProfile;
import com.example.taskr.repositories.BoardRepository;
import com.example.taskr.repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class HomeController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    BoardRepository boardRepository;

    @GetMapping("/home")
    public UserProfile getMyProfile() {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserCollection userCollection = userRepository.findByUserName(userName);
        List<String> boardId = userCollection.getMyBoards();
        List<String> starredBoard = userCollection.getStarredBoard();
        List<BoardResponse> myBoards = new ArrayList<>();
        boardId.forEach(id -> {
            BoardResponse boardResponse = new BoardResponse();
            BeanUtils.copyProperties(boardRepository.findBoardCollectionById(id), boardResponse);
            if (starredBoard.contains(id))
                boardResponse.setBookmark(true);
            else
                boardResponse.setBookmark(false);
            myBoards.add(boardResponse);
        });
        UserProfile profile=new UserProfile();
        profile.setBoards(myBoards);
        BeanUtils.copyProperties(userCollection,profile);
        return profile;
    }

}
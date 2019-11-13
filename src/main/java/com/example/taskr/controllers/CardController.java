package com.example.taskr.controllers;

import com.example.taskr.collections.*;
import com.example.taskr.model.request.ChangeDueDate;
import com.example.taskr.model.request.ListDetailRequestModel;
import com.example.taskr.model.request.UpdateCard;
import com.example.taskr.repositories.BoardRepository;
import com.example.taskr.repositories.UserRepository;
import com.example.taskr.service.BoardService;
import com.example.taskr.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/board")
public class CardController {
    @Autowired
    BoardRepository boardRepository;
    @Autowired
    BoardService boardService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    EmailSenderService emailSenderService;
    private static final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    @PostMapping("addCard/{boardId}/{listId}")
    public ModelMap addCard(@PathVariable String boardId, @PathVariable int listId, @RequestBody ListDetailRequestModel cardModel) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can add cards");
        List<ListCollection> lists = boardCollection.getLists();
        ListCollection list =lists.get(listId);
        CardCollection card = new CardCollection();
        card.setId(list.getCards().size());
        card.setName(cardModel.getName());
        list.getCards().add(card);
        ActivityCollection activity = new ActivityCollection(boardId, LocalDateTime.now(), userName + " added "+cardModel.getName()+" to "+list);
        boardCollection.getActivities().add(activity);
        boardRepository.save(boardCollection);
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("massage", "card added to list");
        return modelMap;
    }


    @PatchMapping("updateCard/{boardId}/{listId}/{cardId}")
    public ModelMap updateCard(@PathVariable String boardId, @PathVariable int cardId, @PathVariable int listId, @RequestBody UpdateCard updateCard){
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can update cards");
        List<ListCollection> lists = boardCollection.getLists();
        ListCollection listCollection=lists.get(listId);
        List<CardCollection>cards=listCollection.getCards();
        CardCollection card=cards.get(cardId);
        card.setName(updateCard.getName());
        card.setDescription(updateCard.getDescription());
        card.setPriority(updateCard.getPriority());
        ActivityCollection activity = new ActivityCollection(boardId, LocalDateTime.now(), userName + " updated "+card.getName());
        boardCollection.getActivities().add(activity);
        boardRepository.save(boardCollection);
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("message", "card updated");
        return modelMap;
    }

    @PutMapping("setDueDate/{boardId}/{listId}/{cardId}")
    public ModelMap setDueDate(@PathVariable String boardId, @PathVariable int cardId, @PathVariable int listId, @RequestBody ChangeDueDate changeDueDate) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can update cards");
        List<ListCollection> lists = boardCollection.getLists();
        ListCollection listCollection = lists.get(listId);
        List<CardCollection> cards = listCollection.getCards();
        CardCollection card = cards.get(cardId);
        card.setDueDate(LocalDateTime.parse(changeDueDate.getDueDate()));
        Duration delay = Duration.between(LocalDateTime.parse(changeDueDate.getDueDate()).minusMinutes(changeDueDate.getReminderBefore()),LocalDateTime.now());
        String message =userName + " changed the due date of "+card.getName();
        scheduler.schedule(() -> {
                List<String>boardMembers=boardCollection.getBoardMembers();
                for (String userName1 :boardMembers) {
                    UserCollection userCollection =userRepository.findByUserName(userName1);
                    SimpleMailMessage mailMessage =new SimpleMailMessage();
                    mailMessage.setFrom("taskrapp01@gmail.com");
                    mailMessage.setSubject("Card notification.");
                    mailMessage.setTo(userCollection.getEmail());
                    mailMessage.setText(message);
                    emailSenderService.sendEmail(mailMessage);
            }
        }, delay.getSeconds(), TimeUnit.SECONDS);
        ActivityCollection activity = new ActivityCollection(boardId, LocalDateTime.now(),userName + " changed the due date of "+card.getName());
        boardCollection.getActivities().add(activity);
        boardRepository.save(boardCollection);
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("message", "changed due date");
        return modelMap;
    }

    @PutMapping("/{boardId}/moveCard/{cardId}/{fromListId}/{toListId}")
    public void moveCard(@PathVariable String boardId, @PathVariable int cardId, @PathVariable int fromListId, @PathVariable int toListId){
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can update cards");
        List<ListCollection> lists = boardCollection.getLists();
        ListCollection listCollection=lists.get(fromListId);
        List<CardCollection>cards=listCollection.getCards();
        CardCollection card=cards.get(cardId);
        cards.remove(card);
        ListCollection list=lists.get(toListId);
        List<CardCollection>cards1=list.getCards();
        cards1.add(card);
        ActivityCollection activity = new ActivityCollection(boardId, LocalDateTime.now(), userName + " moved "+card.getName()+" from "+listCollection.getName()+" to "+list.getName());
        boardCollection.getActivities().add(activity);
        boardRepository.save(boardCollection);
    }


    @DeleteMapping("/deleteCard/{boardId}/{listId}/{cardId}")
    public ModelMap deleteCard(@PathVariable String boardId, @PathVariable int listId, @PathVariable int cardId) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoardCollection boardCollection = boardRepository.findBoardCollectionById(boardId);
        if (!boardCollection.getBoardMembers().contains(userName))
            throw new RuntimeException("Only board member can delete cards");
        List<ListCollection> lists = boardCollection.getLists();
        ListCollection listCollection=lists.get(listId);
        ActivityCollection activity = new ActivityCollection(boardId, LocalDateTime.now(),userName + " deleted "+listCollection.getCards().get(cardId).getName());
        boardCollection.getActivities().add(activity);
        listCollection.getCards().remove(cardId);
        boardRepository.save(boardCollection);
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("massage", "card deleted from list");
        return modelMap;
    }
}

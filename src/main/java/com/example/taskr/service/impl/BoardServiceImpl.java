package com.example.taskr.service.impl;

import com.example.taskr.collections.ActivityCollection;
import com.example.taskr.collections.BoardCollection;
import com.example.taskr.collections.ListCollection;
import com.example.taskr.collections.UserCollection;
import com.example.taskr.repositories.BoardRepository;
import com.example.taskr.repositories.UserRepository;
import com.example.taskr.service.BoardService;
import com.example.taskr.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {
    @Autowired
    BoardRepository boardRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    EmailSenderService emailSenderService;
    @Override
    public void createBoard(BoardCollection boardCollection) {
        boardCollection.setCreatedAt(LocalDateTime.now());
        ListCollection toDo =new ListCollection(0,"To Do");
        ListCollection doing =new ListCollection(1,"Doing");
        ListCollection done =new ListCollection(2,"Done");
        List<ListCollection> lists=new ArrayList<>(Arrays.asList(toDo,doing,done));
        boardCollection.setLists(lists);
        boardRepository.save(boardCollection);
        ActivityCollection activity = new ActivityCollection(boardCollection.getId(), LocalDateTime.now().format(DateTimeFormatter.ofPattern("d MMM uuuu , hh:mm a")), boardCollection.getMadeBy() + " created this board");
        boardCollection.getActivities().add(activity);
        boardRepository.save(boardCollection);

    }

    @Override
    public void sendNotification(String userName,String message) {
        UserCollection userCollection =userRepository.findByUserName(userName);
        if(userCollection.equals(null))throw new RuntimeException("No user found with this username");
        SimpleMailMessage mailMessage =new SimpleMailMessage();
        mailMessage.setFrom("taskrapp01@gmail.com");
        mailMessage.setSubject("Board notification.");
        mailMessage.setTo(userCollection.getEmail());
        mailMessage.setText(message);
        emailSenderService.sendEmail(mailMessage);
    }

}

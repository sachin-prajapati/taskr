package com.example.taskr.service;

import com.example.taskr.collections.BoardCollection;

public interface BoardService {
    void createBoard(BoardCollection boardCollection);
    void sendNotification(String userName,String message);
}

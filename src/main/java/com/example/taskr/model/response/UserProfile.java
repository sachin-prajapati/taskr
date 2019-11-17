package com.example.taskr.model.response;

import com.example.taskr.collections.NotificationCollection;

import java.util.ArrayList;
import java.util.List;

public class UserProfile {
    private String userName;
    private String fullName;
    private String email;
    private List<BoardResponse> boards=new ArrayList<>();
    private List<NotificationCollection>notifications=new ArrayList<>();

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public List<BoardResponse> getBoards() {
        return boards;
    }

    public void setBoards(List<BoardResponse> boards) {
        this.boards = boards;
    }

    public List<NotificationCollection> getNotifications() {
        return notifications;
    }

    public void setNotifications(List<NotificationCollection> notifications) {
        this.notifications = notifications;
    }
}

package com.example.taskr.collections;

import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class NotificationCollection {
    private int id;
    private String notification;
    private boolean markRead;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNotification() {
        return notification;
    }

    public void setNotification(String notification) {
        this.notification = notification;
    }

    public boolean isMarkRead() {
        return markRead;
    }

    public void setMarkRead(boolean markRead) {
        this.markRead = markRead;
    }

    public NotificationCollection() {
    }

    public NotificationCollection(int id ,String notification) {
        this.id=id;
        this.notification = notification;
    }
}

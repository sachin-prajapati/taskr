package com.example.taskr.collections;

import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
@Document
public class NotificationCollection {
    private int id;
    private String notification;
    private LocalDateTime notificationTime;
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

    public LocalDateTime getNotificationTime() {
        return notificationTime;
    }

    public void setNotificationTime(LocalDateTime notificationTime) {
        this.notificationTime = notificationTime;
    }

    public boolean isMarkRead() {
        return markRead;
    }

    public void setMarkRead(boolean markRead) {
        this.markRead = markRead;
    }

    public NotificationCollection() {
    }

    public NotificationCollection(int id ,String notification, LocalDateTime notificationTime) {
        this.id=id;
        this.notification = notification;
        this.notificationTime = notificationTime;
    }
}

package com.example.taskr.model.request;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class ChangeDueDate {
    private String dueDate;
    private String dueTime;
    private long reminderBefore;

    public LocalDateTime getDueDateShow() {
        LocalDate date = LocalDate.parse(dueDate);
        LocalTime time = LocalTime.parse(dueTime);
        return LocalDateTime.of(date, time);
    }

    public String getDueDate() {
        return dueDate;
    }

    public String getDueTime() {
        return dueTime;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public void setDueTime(String dueTime) {
        this.dueTime = dueTime;
    }

    public long getReminderBefore() {
        return reminderBefore;
    }

    public void setReminderBefore(long reminderBefore) {
        this.reminderBefore = reminderBefore;
    }
}

package com.example.taskr.model.request;

public class ChangeDueDate {
    private String dueDate;
    private long reminderBefore;

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public long getReminderBefore() {
        return reminderBefore;
    }

    public void setReminderBefore(long reminderBefore) {
        this.reminderBefore = reminderBefore;
    }
}

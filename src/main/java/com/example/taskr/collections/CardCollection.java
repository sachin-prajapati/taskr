package com.example.taskr.collections;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;
@Document
public class CardCollection {

    private int id;
    @NotEmpty(message = "name can't be empty.")
    private String name;
    private String description;
    private List<ChecklistItem>checklist=new ArrayList<>();
    private String dueDateShow;
    private String dueDate;
    private String dueTime;
    private long reminderBefore;
    private String priority;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<ChecklistItem> getChecklist() {
        return checklist;
    }

    public void setChecklist(List<ChecklistItem> checklist) {
        this.checklist = checklist;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getDueDateShow() {
        return dueDateShow;
    }

    public void setDueDateShow(String dueDateShow) {
        this.dueDateShow = dueDateShow;
    }

    public String getDueTime() {
        return dueTime;
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

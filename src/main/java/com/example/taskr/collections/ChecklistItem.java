package com.example.taskr.collections;

import javax.validation.constraints.NotEmpty;

public class ChecklistItem {
    @NotEmpty(message = "name can't be empty.")
    private String name;
    private boolean completed;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}

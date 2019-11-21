package com.example.taskr.model.request;

import javax.validation.constraints.NotBlank;

public class UpdateCard {
    @NotBlank(message = "card name can't be empty.")
    private String name;
    private String description;
    private String priority;

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

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }
}

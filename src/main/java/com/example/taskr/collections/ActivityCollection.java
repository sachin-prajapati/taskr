package com.example.taskr.collections;

import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
@Document
public class ActivityCollection {
    private String activityOf;
    private LocalDateTime activityTime;
    private String activity;

    public String getActivityOf() {
        return activityOf;
    }

    public void setActivityOf(String activityOf) {
        this.activityOf = activityOf;
    }

    public LocalDateTime getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(LocalDateTime activityTime) {
        this.activityTime = activityTime;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public ActivityCollection(String activityOf, LocalDateTime activityTime, String activity) {
        this.activityOf = activityOf;
        this.activityTime = activityTime;
        this.activity = activity;
    }
}

package com.example.taskr.collections;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class ActivityCollection {
    private String activityOf;
    private String activityTime;
    private String activity;

    public String getActivityOf() {
        return activityOf;
    }

    public void setActivityOf(String activityOf) {
        this.activityOf = activityOf;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public String getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(String activityTime) {
        this.activityTime = activityTime;
    }

    public ActivityCollection(String activityOf, String activityTime, String activity) {
        this.activityOf = activityOf;
        this.activityTime = activityTime;
        this.activity = activity;
    }
}

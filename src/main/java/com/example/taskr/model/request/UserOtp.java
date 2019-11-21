package com.example.taskr.model.request;

import javax.validation.constraints.Size;

public class UserOtp {
    @Size(min =6,max = 6)
    private int otp;

    public int getOtp() {
        return otp;
    }

    public void setOtp(int otp) {
        this.otp = otp;
    }
}

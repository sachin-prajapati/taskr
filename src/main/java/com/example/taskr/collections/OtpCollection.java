package com.example.taskr.collections;

import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
@Document
public class OtpCollection {
    private int otp;
    private LocalDateTime otpGenerationTime;

    public int getOtp() {
        return otp;
    }

    public void setOtp(int otp) {
        this.otp = otp;
    }

    public LocalDateTime getOtpGenerationTime() {
        return otpGenerationTime;
    }

    public void setOtpGenerationTime(LocalDateTime otpGenerationTime) {
        this.otpGenerationTime = otpGenerationTime;
    }
}

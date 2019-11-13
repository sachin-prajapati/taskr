package com.example.taskr.utility;

import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class OtpGenerator {
    public int generateOtp() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return otp;
    }
}

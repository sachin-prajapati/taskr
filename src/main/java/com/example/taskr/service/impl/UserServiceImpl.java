package com.example.taskr.service.impl;

import com.example.taskr.collections.OtpCollection;
import com.example.taskr.collections.UserCollection;
import com.example.taskr.model.request.UserDetailRequestModel;
import com.example.taskr.model.response.UserResponse;
import com.example.taskr.repositories.UserRepository;
import com.example.taskr.service.EmailSenderService;
import com.example.taskr.service.UserService;
import com.example.taskr.utility.OtpGenerator;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    OtpGenerator otpGenerator;
    @Autowired
    EmailSenderService emailSenderService;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Override
    public UserResponse createUser(UserDetailRequestModel userDetailRequestModel) {
        UserResponse userResponse = new UserResponse();
        UserCollection userCollection =new UserCollection();
        BeanUtils.copyProperties(userDetailRequestModel, userCollection);
        userCollection.setEncryptedPassword(bCryptPasswordEncoder.encode(userDetailRequestModel.getPassword()));
        userCollection.setEnabled(true);
        userResponse.setMessage("OTP has been sent to your email ,please enter otp to verify.");
        BeanUtils.copyProperties( userRepository.save(userCollection), userResponse);
        sendOtp(userDetailRequestModel.getUserName());
        return userResponse;
    }

    public void sendOtp(String userName)
    {
        UserCollection userCollection =userRepository.findByUserName(userName);
        if(userCollection.equals(null))throw new RuntimeException("No user found with this username");
        OtpCollection otpCollection=new OtpCollection();
        int otp= otpGenerator.generateOtp();
        otpCollection.setOtp(otp);
        SimpleMailMessage mailMessage =new SimpleMailMessage();
        mailMessage.setFrom("taskrapp01@gmail.com");
        mailMessage.setSubject("TaskR account verification.");
        mailMessage.setTo(userCollection.getEmail());
        mailMessage.setText("Hi "+ userCollection.getFullName()+" ! Never share otp with someone.\nEnter this OTP  "+otp+
                "  to verify your account on TaskR app. If it was not you then ignore the message.\nTeam Taskr.\nThank you!");
        emailSenderService.sendEmail(mailMessage);
        otpCollection.setOtpGenerationTime(LocalDateTime.now());
        userCollection.setOtpCollection(otpCollection);
        userRepository.save(userCollection);
    }
    @Override
    public UserCollection getUser(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public List<UserResponse> getAllUser() {
        List<UserResponse> userResponse =new ArrayList<>();
        BeanUtils.copyProperties(userRepository.findAll(), userResponse);
        return userResponse;
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserCollection userCollection =userRepository.findByEmail(email);
        return new User(userCollection.getEmail(), userCollection.getEncryptedPassword(),new ArrayList<>());
    }

}

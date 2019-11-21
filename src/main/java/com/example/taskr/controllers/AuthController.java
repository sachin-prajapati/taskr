package com.example.taskr.controllers;

import com.example.taskr.collections.UserCollection;
import com.example.taskr.model.request.UserDetailRequestModel;
import com.example.taskr.model.request.UserOtp;
import com.example.taskr.model.response.UserResponse;
import com.example.taskr.repositories.UserRepository;
import com.example.taskr.service.UserService;
import com.example.taskr.service.impl.UserServiceImpl;
import com.example.taskr.utility.TokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.time.Duration;
import java.time.LocalDateTime;

@RestController
@RequestMapping("api/auth")
public class AuthController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;
    @Autowired
    UserServiceImpl userServiceImpl;
    @Autowired
    TokenGenerator tokenGenerator;
    @PostMapping("/signUp")
    UserResponse createUser(@Valid @RequestBody UserDetailRequestModel userDetailRequestModel, HttpServletResponse res) throws IOException {
    if (userRepository.findByEmail(userDetailRequestModel.getEmail())!=null)
        throw new IOException("This email address is already taken. Please login to continue.");
    if(userRepository.findByUserName(userDetailRequestModel.getUserName())!=null)
        throw new IOException("Username already exist.");
    if(userDetailRequestModel.getPassword().length()<7|| !userDetailRequestModel.getPassword().equals(userDetailRequestModel.getConfirmPassword()))
        throw new IOException("Password should be greater than six character and should match confirmPassword ");
    return userService.createUser(userDetailRequestModel);
    }

    @GetMapping("/resendOtp/{userName}")
    ModelMap resendOtp(@PathVariable String userName) {
        if (userRepository.findByUserName(userName)==null) throw new RuntimeException("invalid username");
        else {
            userServiceImpl.sendOtp(userName);
            ModelMap modelMap = new ModelMap();
            modelMap.addAttribute("message", "OTP has been resended. ");
            return modelMap;
        }
    }

    @PostMapping("/verifyEmail/{userName}")
    ModelMap verifyUser(@Valid@RequestBody UserOtp userOtp, @PathVariable String userName ,HttpServletResponse res) throws IOException {
        ModelMap modelMap=new ModelMap();
    UserCollection  user=userRepository.findByUserName(userName);
    LocalDateTime date =LocalDateTime.now();
    Duration dur =Duration.between(user.getOtpCollection().getOtpGenerationTime(),date);
    if (userOtp.getOtp()!=user.getOtpCollection().getOtp()||dur.getSeconds()>180){
        throw new IOException("Either otp has been expired or is invalid");
    }
    else{
        user.setVerified(true);
        user.deleteOtpCollection();;
        userRepository.save(user);
        modelMap.addAttribute("message","Your email has been verified successfully");
        modelMap.addAttribute(tokenGenerator.getToken(user.getUserName()));
    }
    return modelMap;
}
}

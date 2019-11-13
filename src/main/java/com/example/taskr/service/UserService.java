package com.example.taskr.service;

import com.example.taskr.collections.UserCollection;
import com.example.taskr.model.request.UserDetailRequestModel;
import com.example.taskr.model.response.UserResponse;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
   UserResponse createUser(UserDetailRequestModel userDetailRequestModel);
   UserCollection getUser(String email);
   List<UserResponse> getAllUser();

}

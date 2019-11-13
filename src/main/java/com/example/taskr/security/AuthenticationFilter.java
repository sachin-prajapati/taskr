package com.example.taskr.security;

import com.example.taskr.SpringApplicationContext;
import com.example.taskr.collections.UserCollection;
import com.example.taskr.model.request.Login;
import com.example.taskr.model.response.UserLoginResponse;
import com.example.taskr.repositories.UserRepository;
import com.example.taskr.service.UserService;
import com.example.taskr.service.impl.UserServiceImpl;
import com.example.taskr.utility.TokenGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.ui.ModelMap;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final UserServiceImpl userServiceImpl;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    UserCollection userCollection;
    public AuthenticationFilter(UserServiceImpl userServiceImpl, UserRepository userRepository, AuthenticationManager authenticationManager) {
        this.userServiceImpl = userServiceImpl;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;

    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res) {
        if (!req.getMethod().equals("POST")) {
            throw new AuthenticationServiceException(
                    "Authentication method not supported: " + req.getMethod());
        }
        try {
            Login creds = new ObjectMapper().readValue(req.getInputStream(), Login.class);
            userCollection = userRepository.findByEmail(creds.getEmail());
            if (userCollection == null) {
                throw new AuthenticationServiceException("You are not registered user.Please signUp to continue.");
            }else {
                if (!userCollection.isVerified()) {
                    userServiceImpl.sendOtp(userCollection.getUserName());
                    throw new AuthenticationServiceException("Please verify your email address to login.");
                }
                else
                    return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                            creds.getEmail(), creds.getPassword(), new ArrayList<>()));
            }
        } catch (IOException e) {
            throw new RuntimeException();
        }
    }

    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain,
                                            Authentication auth) throws IOException {
        String email = ((User) auth.getPrincipal()).getUsername();
        UserService userService = (UserService) SpringApplicationContext.getBean("userServiceImpl");
        UserCollection userCollection =userService.getUser(email);
        TokenGenerator tokenGenerator=new TokenGenerator();
        String userName = userCollection.getUserName();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        Gson gson = new Gson();
        res.getWriter().print(gson.toJson(tokenGenerator.getToken(userName), UserLoginResponse.class));
    }
    protected void unsuccessfulAuthentication(HttpServletRequest req, HttpServletResponse res, AuthenticationException e)
            throws IOException, ServletException {
      SecurityContextHolder.clearContext();
      res.setStatus(HttpStatus.UNAUTHORIZED.value());
        ModelMap modelMap=new ModelMap();
        modelMap.addAttribute("message",e.getMessage());
        if(userCollection!=null)
            modelMap.addAttribute("userName",userCollection.getUserName());
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        Gson gson = new Gson();
        res.getWriter().print(gson.toJson(modelMap,ModelMap.class));
}

}
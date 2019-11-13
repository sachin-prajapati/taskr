package com.example.taskr.utility;

import com.example.taskr.model.response.UserLoginResponse;
import com.example.taskr.security.SecurityConstant;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
@Component
public class TokenGenerator {
   public UserLoginResponse getToken(String userName){
        String token = Jwts.builder().setSubject(userName).setExpiration(
                new Date(System.currentTimeMillis() + SecurityConstant.EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SecurityConstant.TOKEN_SECRET).compact();
        UserLoginResponse response= new UserLoginResponse();
        response.setUserName(userName);
        response.setToken(token);
        return response;
    }
}

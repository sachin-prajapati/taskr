package com.example.taskr.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RedirectController {
    @RequestMapping({"/signup", "/login","/board/**","/verify/**","/user/**"})
    public String redirectApi() {
        return "forward:/";
    }
}

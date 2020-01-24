package com.example.taskr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@EnableScheduling
@SpringBootApplication
public class TaskrApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskrApplication.class, args);
	}
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder(){return  new BCryptPasswordEncoder();}
	@Bean
	public SpringApplicationContext springApplicationContext(){
		return new SpringApplicationContext();
	}
}
//  cd C:\Program Files\MongoDB\Server\4.2\bin
//   mongod --bind_ip_all

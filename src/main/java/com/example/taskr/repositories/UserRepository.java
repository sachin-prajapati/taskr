package com.example.taskr.repositories;

import com.example.taskr.collections.UserCollection;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserCollection,String> {
    UserCollection findByUserName(String userName);
    UserCollection findByEmail(String email);

}

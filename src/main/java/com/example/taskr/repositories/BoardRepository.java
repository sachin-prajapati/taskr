package com.example.taskr.repositories;

import com.example.taskr.collections.BoardCollection;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BoardRepository extends MongoRepository<BoardCollection,String> {
    BoardCollection findBoardCollectionById(String BoardId);
}

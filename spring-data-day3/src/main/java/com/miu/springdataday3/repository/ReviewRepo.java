package com.miu.springdataday3.repository;

import com.miu.springdataday3.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Integer> {
//    List<Review> findAllByProduct_Id(int id);
}

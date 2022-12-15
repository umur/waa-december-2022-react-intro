package com.miu.springdataday3.service;

import com.miu.springdataday3.dto.ReviewDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReviewService {
    List<ReviewDto> findAll();
    ReviewDto findById(int id);
    void save(ReviewDto reviewDto);
    void update(int id, ReviewDto reviewDto);
    void delete(int id);
}

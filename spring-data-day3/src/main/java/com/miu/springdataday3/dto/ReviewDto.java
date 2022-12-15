package com.miu.springdataday3.dto;

import com.miu.springdataday3.entity.Product;
import com.miu.springdataday3.entity.User;
import lombok.Data;

@Data
public class ReviewDto {
    private int id;
    private String comment;
    private Product product;
    private User user;
}

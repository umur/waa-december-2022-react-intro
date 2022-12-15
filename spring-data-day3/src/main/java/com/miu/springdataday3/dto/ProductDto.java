package com.miu.springdataday3.dto;

import com.miu.springdataday3.entity.Category;
import com.miu.springdataday3.entity.Review;
import lombok.Data;

import java.util.List;

@Data
public class ProductDto {
    private int id;
    private String name;
    private double price;
    private double rating;
    private Category category;
    private List<Review> reviews;
}

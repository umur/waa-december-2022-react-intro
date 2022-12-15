package com.miu.springdataday3.dto;

import com.miu.springdataday3.entity.Product;
import lombok.Data;

import java.util.List;

@Data
public class CategoryDto {
    private int id;
    private String name;
    private List<Product> products;
}

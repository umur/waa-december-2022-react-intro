package com.miu.springdataday3.service;

import com.miu.springdataday3.dto.CategoryDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    List<CategoryDto> findAll();
    CategoryDto findById(int id);
    void save(CategoryDto categoryDto);
    void update(int id, CategoryDto categoryDto);
    void delete(int id);
}

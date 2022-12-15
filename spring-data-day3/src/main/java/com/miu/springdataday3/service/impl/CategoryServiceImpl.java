package com.miu.springdataday3.service.impl;

import com.miu.springdataday3.dto.CategoryDto;
import com.miu.springdataday3.entity.Category;
import com.miu.springdataday3.repository.CategoryRepo;
import com.miu.springdataday3.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class CategoryServiceImpl implements CategoryService
{
    private final CategoryRepo categoryRepo;
    private final ModelMapper modelMapper;


    @PreAuthorize("hasRole('ROLE_USER') || hasRole('ROLE_ADMIN')")
    @Override
    public List<CategoryDto> findAll() {
        return categoryRepo.findAll().stream().map(a -> modelMapper.map(a, CategoryDto.class)).toList();
    }

    @PreAuthorize("hasRole('ROLE_USER') || hasRole('ROLE_ADMIN')")
    @Override
    public CategoryDto findById(int id) {
        return categoryRepo.findById(id).map(a -> modelMapper.map(a, CategoryDto.class)).get();
    }

    @Override
    public void save(CategoryDto categoryDto) {
        Category category = modelMapper.map(categoryDto, Category.class);
        categoryRepo.save(category);
    }

    @Override
    public void update(int id, CategoryDto categoryDto) {
        categoryRepo.findById(id).orElseThrow(() -> new RuntimeException("Category not found."));
        Category category = modelMapper.map(categoryDto, Category.class);
        categoryRepo.save(category);
    }

    @Override
    public void delete(int id) {
        Category category = categoryRepo.findById(id).orElseThrow(() -> new RuntimeException("Category not found."));
        categoryRepo.delete(category);
    }
}

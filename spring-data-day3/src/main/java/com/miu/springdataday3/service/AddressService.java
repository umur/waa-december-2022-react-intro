package com.miu.springdataday3.service;

import com.miu.springdataday3.dto.AddressDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AddressService {
    List<AddressDto> findAll();
    AddressDto findById(int id);
    void save(AddressDto addressDto);
    void update(int id, AddressDto addressDto);
    void delete(int id);
}

package com.miu.springdataday3.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.miu.springdataday3.entity.Address;
import com.miu.springdataday3.entity.Role;
import lombok.Data;

import java.util.List;

@Data
public class UserDto {
    private int id;
    private String email;
    @JsonIgnore
    private String password;
    private String firstName;
    private String lastName;
    private Address address;
    @JsonIgnore
    private List<Role> roles;
}

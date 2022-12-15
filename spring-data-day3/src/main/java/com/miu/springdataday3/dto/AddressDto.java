package com.miu.springdataday3.dto;

import lombok.Data;

@Data
public class AddressDto {
    private int id;
    private String street;
    private int zip;
    private String city;
}

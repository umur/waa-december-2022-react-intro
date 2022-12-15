package com.miu.springdataday3.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="addresses")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String street;
    private int zip;
    private String city;
}

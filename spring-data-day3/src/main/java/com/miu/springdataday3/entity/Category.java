package com.miu.springdataday3.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name="categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(mappedBy="category")
    @JsonManagedReference
    private List<Product> products;
}

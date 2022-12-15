package com.waa.security.service;


import com.waa.security.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

        void save(Product p);

        void delete(long id);
        void save(long id, Product product);

        Product findById(long id);

        List<Product> findAll();

}


package com.waa.security.service.impl;

import com.waa.security.entity.Product;
import com.waa.security.security.CustomUserDetails;
import com.waa.security.repository.ProductRepo;
import com.waa.security.repository.UserRepo;
import com.waa.security.service.ProductService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Transactional
@RequiredArgsConstructor
public class productServiceImpl implements ProductService {
    private final ProductRepo productRepo;
    private final UserRepo userRepo;


    public void save(Product p) {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var user = userRepo.findByEmail(userDetails.getUser().getEmail());
        p.setUser(user);
        user.getProducts().add(p);
        userRepo.save(user);
        save(p.getId(), p);
    }

    public void save(long id, Product product) {
        productRepo.findById(id).ifPresent(p -> {
            p.setName(product.getName());
            p.setPrice(product.getPrice());
            productRepo.save(p);
        });
        productRepo.save(product);
    }

    public void delete(long id) {
        productRepo.deleteById(id);
    }

    public Product findById(long id) {
        return productRepo.findById(id).orElse(null);

    }

    public List<Product> findAll() {
        return (List<Product>) productRepo.findAll();
    }
}

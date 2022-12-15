package com.waa.security.controller;


import com.waa.security.entity.Product;
import com.waa.security.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/products")
@RestController
@CrossOrigin
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Product p) {
        try {
            productService.save(p);
            return ResponseEntity.ok().body("Product Saved");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        try {
            productService.delete(id);
            return ResponseEntity.ok().body("Product Deleted");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @GetMapping
    public List<Product> getAll() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable long id) {

        return productService.findById(id);
    }

    @PutMapping("/admin/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long productId, @RequestBody Product product) {
        try {
            productService.save(productId, product);
            return ResponseEntity.ok().body("Product updated");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}

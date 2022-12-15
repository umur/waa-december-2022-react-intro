package com.miu.springdataday3.controller;

import com.miu.springdataday3.dto.ProductDto;
import com.miu.springdataday3.entity.Category;
import com.miu.springdataday3.entity.Product;
import com.miu.springdataday3.entity.Review;
import com.miu.springdataday3.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public List<ProductDto> findAll(){
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public ProductDto findById(@PathVariable int id) {
        return productService.findById(id);
    }

    @PostMapping
    public void save(@RequestBody ProductDto productDto){
        productService.save(productDto);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody ProductDto productDto) {
        productService.update(id, productDto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        productService.delete(id);
    }

    @GetMapping("/filterByPriceGreaterThan")
    public List<Product> findAllByPriceGreaterThan(@RequestParam double price) {
        return productService.findAllByPriceGreaterThan(price);
    }

    @GetMapping("/filterByCategoryAndPrice")
    public List<Product> findAllByCategoryAndPriceLessThan(@RequestParam String cat, @RequestParam double price) {
        return productService.findAllByCategoryAndPriceLessThan(cat, price);
    }

    @GetMapping("/filterByName")
    public List<Product> findAllByNameContainingIgnoreCase(@RequestParam String keyword) {
        return productService.findAllByNameContainingIgnoreCase(keyword);
    }

    @GetMapping("/{id}/reviews")
    public List<Review> findReviewsByProductId(@PathVariable int id) {
        return productService.findReviewsByProductId(id);
    }
}

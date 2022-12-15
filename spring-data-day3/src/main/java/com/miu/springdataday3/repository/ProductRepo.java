package com.miu.springdataday3.repository;

import com.miu.springdataday3.entity.Category;
import com.miu.springdataday3.entity.Product;
import com.miu.springdataday3.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {
    List<Product> findAllByPriceGreaterThan(double price);
    List<Product> findAllByCategory_NameAndPriceLessThan(String cat, double price);
    List<Product> findAllByNameContainingIgnoreCase(String keyword);

    @Query(value="select reviews from Product where id= :id")
    List<Review> reviewsById(int id);
}

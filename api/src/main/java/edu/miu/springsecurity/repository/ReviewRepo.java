package edu.miu.springsecurity.repository;

import edu.miu.springsecurity.entity.Category;
import edu.miu.springsecurity.entity.Product;
import edu.miu.springsecurity.entity.Review;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepo extends CrudRepository<Review, Integer> {
    Iterable<Review> findAllByProduct(Product product);
}

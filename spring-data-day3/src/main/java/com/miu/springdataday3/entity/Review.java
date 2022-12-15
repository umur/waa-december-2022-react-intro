package com.miu.springdataday3.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name="reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String comment;

    @ManyToOne
//    @JoinTable(name = "product_reviews",
//            inverseJoinColumns = {@JoinColumn(name = "product_id", referencedColumnName = "id")},
//            joinColumns = {@JoinColumn(name = "review_id", referencedColumnName = "id")}
//    )
    @JsonBackReference
    private Product product;

    @ManyToOne
    private User user;
}

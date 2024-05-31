package com.jasirid.demo.mapper;

import com.jasirid.demo.dto.ReviewDTO;
import com.jasirid.demo.entity.Review;

public class ReviewMapper {
    //Takes a review JPA entity and converts it into a User DTO
    public static ReviewDTO mapToReviewDTO(Review review){
        return new ReviewDTO(
            review.getId(),
            review.getATitle(),
            review.getTitle(),
            review.getBody(),
            review.getUser()
        );
    }

    //takes a review DTO and converts it into a User entity
    public static Review mapToReviewEntity(ReviewDTO reviewDTO){
        return new Review(
            reviewDTO.getId(),
            reviewDTO.getATitle(),
            reviewDTO.getTitle(),
            reviewDTO.getBody(),
            reviewDTO.getUser()
        );
    }

}

package com.jasirid.demo.service;

import com.jasirid.demo.dto.ReviewDTO;
import com.jasirid.demo.dto.UserDTO;

import java.util.List;

public interface ReviewService {

    //create a new review method
    ReviewDTO createReview(ReviewDTO reviewDTO);

    //Get any review by ID method
    ReviewDTO getReviewByID(int userID);


    //Update review method
    ReviewDTO updateReview(int reviewID, ReviewDTO updatedReview);

    //Delete review method
    void deleteReview(int reviewID);

    //get all reviews method
    List<ReviewDTO> getAllReviews();

}

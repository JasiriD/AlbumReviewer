package com.jasirid.demo.service.impl;

import com.jasirid.demo.dto.ReviewDTO;
import com.jasirid.demo.entity.Review;
import com.jasirid.demo.entity.User;
import com.jasirid.demo.exception.NotFoundException;
import com.jasirid.demo.mapper.UserMapper;
import com.jasirid.demo.repository.ReviewRepository;
import com.jasirid.demo.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.jasirid.demo.mapper.ReviewMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private ReviewRepository reviewRepository;


    //createReview Method
    @Override
    public ReviewDTO createReview(ReviewDTO reviewDTO) {
        //taking dto from input and converting it to an entity using method from ReviewMapper class
        Review review = ReviewMapper.mapToReviewEntity(reviewDTO);
        Review savedReview = reviewRepository.save(review);

        //returning savedReview back to client as a DTO
        return ReviewMapper.mapToReviewDTO(review);
    }


    //getReviewByID method
    @Override
    public ReviewDTO getReviewByID(int reviewID) {
        Review review = reviewRepository.findById(reviewID)
                .orElseThrow(() -> new NotFoundException("There is no review with the id " + reviewID + "! "));

        //Returning review back as DTO
        return ReviewMapper.mapToReviewDTO(review);

    }

    //updateReview method
    @Override
    public ReviewDTO updateReview(int reviewID, ReviewDTO updatedReview) {
        //Throwing exeption if there is no review with reviewID id
        Review review = reviewRepository.findById(reviewID)
                .orElseThrow(() -> new NotFoundException("There is no review with the id " + reviewID + "!"));

        review.setTitle(updatedReview.getTitle());
        review.setBody(updatedReview.getBody());
        review.setUser(updatedReview.getUser());


        Review newUpdatedReview = reviewRepository.save(review);

        return ReviewMapper.mapToReviewDTO(newUpdatedReview);
    }

    //deleteReview method
    @Override
    public void deleteReview(int reviewID) {
        //Throwing exeption if there is no review with reviewID id
        Review review = reviewRepository.findById(reviewID)
                .orElseThrow(() -> new NotFoundException("There is no review with the id " + reviewID + "!"));

        reviewRepository.deleteById(reviewID);
    }

    //getAllReviews method
    @Override
    public List<ReviewDTO> getAllReviews() {
        List<Review> reviews = reviewRepository.findAll();



/*        for(Review review:reviews){
            review.setUser(null);
        }*/

        //Takes all the reviews in database and maps them to dtos
        return reviews.stream().map((review) -> ReviewMapper.mapToReviewDTO(review))
                .collect(Collectors.toList());
    }
}

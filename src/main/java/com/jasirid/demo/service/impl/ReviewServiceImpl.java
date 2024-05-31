package com.jasirid.demo.service.impl;

import com.jasirid.demo.dto.ReviewDTO;
import com.jasirid.demo.entity.Review;
import com.jasirid.demo.entity.User;
import com.jasirid.demo.mapper.UserMapper;
import com.jasirid.demo.repository.ReviewRepository;
import com.jasirid.demo.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.jasirid.demo.mapper.ReviewMapper;

import java.util.List;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private ReviewRepository reviewRepository;

    @Override
    public ReviewDTO createReview(ReviewDTO reviewDTO) {
        //taking dto from input and converting it to an entity using method from ReviewMapper class
        Review review = ReviewMapper.mapToReviewEntity(reviewDTO);
        Review savedReview = reviewRepository.save(review);

        //returning savedReview back to client as a DTO
        return ReviewMapper.mapToReviewDTO(review);
    }

    @Override
    public ReviewDTO getReviewByID(int userID) {
        return null;
    }

    @Override
    public ReviewDTO updateReview(int reviewID, ReviewDTO updatedReview) {
        return null;
    }

    @Override
    public void deleteReview(int reviewID) {

    }

    @Override
    public List<ReviewDTO> getAllReviews() {
        return null;
    }
}

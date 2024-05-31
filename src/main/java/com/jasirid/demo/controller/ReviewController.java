package com.jasirid.demo.controller;

import com.jasirid.demo.dto.ReviewDTO;
import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//RestController annotation allows this class to handle HTTP requests
//CrossOrgin allows React application/client to call user rest APIS
@CrossOrigin("*")
@RestController
//Base url for rest APIs that are built within this controller
@AllArgsConstructor
@RequestMapping("/api/reviews")
public class ReviewController {

    private ReviewService reviewService;


    //Add Review REST API
    @PostMapping
    public ResponseEntity<ReviewDTO> createUser(@RequestBody ReviewDTO reviewDTO){
        ReviewDTO savedReview = reviewService.createReview(reviewDTO);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }

    //----------------------------------------------------------------------------

    //Get Review REST API
    @GetMapping("{id}")
    public ResponseEntity<ReviewDTO> getReviewByID(@PathVariable("id") int reviewID){

        ReviewDTO reviewDTO = reviewService.getReviewByID(reviewID);

        return ResponseEntity.ok(reviewDTO);
    }

    //----------------------------------------------------------------------------

    //Get all reviews REST API
    @GetMapping
    public ResponseEntity<List<ReviewDTO>> getAllReviews(){
        List<ReviewDTO> reviews = reviewService.getAllReviews();

        return ResponseEntity.ok(reviews);
    }

    //----------------------------------------------------------------------------

    //Update Review REST API
    @PutMapping("{id}")
    public ResponseEntity<ReviewDTO> updateReview(@PathVariable("id") int reviewID, @RequestBody ReviewDTO updatedReview){

        //Updates review at ID with passed updatedReview
        ReviewDTO reviewDTO = reviewService.updateReview(reviewID, updatedReview);

        return ResponseEntity.ok(reviewDTO);
    }

    //----------------------------------------------------------------------------

    //Delete Review REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteReview(@PathVariable("id") int reviewID){
        reviewService.deleteReview(reviewID);

        return ResponseEntity.ok("Review Deleted.");
    }



}

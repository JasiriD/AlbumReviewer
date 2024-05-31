package com.jasirid.demo.controller;

import com.jasirid.demo.dto.ReviewDTO;
import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//RestController annotation allows this class to handle HTTP requests
//CrossOrgin allows React application/client to call user rest APIS
@CrossOrigin("*")
@RestController
//Base url for rest APIs that are built within this controller
@AllArgsConstructor
@RequestMapping("/api/reviews")
public class ReviewController {

    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<ReviewDTO> createUser(@RequestBody ReviewDTO reviewDTO){
        ReviewDTO savedReview = reviewService.createReview(reviewDTO);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }
}

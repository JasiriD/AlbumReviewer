package com.jasirid.demo.dto;

import com.jasirid.demo.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

//This class is made to transfer the data of a user class between the client and server

//Lombok annotations
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    //Adding fields from User class
    private int id;
    private String firstName;
    private String lastName;
    private String userName;
    private String email;
    private String password;
    private List<Review> reviews;

}

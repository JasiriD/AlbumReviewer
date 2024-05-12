package com.jasirid.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//Lombok annotations
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    //adding fields from User class
    private int id;
    private String firstName;
    private String lastName;
    private String userName;
    private String email;
}

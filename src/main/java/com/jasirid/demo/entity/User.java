package com.jasirid.demo.entity;

//Lombok is a java library that makes it so I don't have to write/generate each constructor, getter, setter, etc for
//my class files. At least, that's how I understand it. Ill update this later if Im wrong.

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




//Annotations to tell Lombok to generate Getters, Settters, etc
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//Specific class as a JPA entity (A class/object represented in a table)
@Entity
@Table(name = "users")
//User class within entity package
public class User {

    //Fields
    //These annotations tell the database to automatically increment the primary entity (the id)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    //Assigns these fields to columns in a table
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    //States this field cannot be empty and must be unique to each object
    @Column(name = "username", nullable = false, unique = true)
    private String userName;

    //Same as username
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;



}

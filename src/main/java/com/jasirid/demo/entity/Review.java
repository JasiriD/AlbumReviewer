package com.jasirid.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//Specific class as a JPA entity (A class/object represented in a table)
@Entity
//User class within entity package
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "Title")
    private String title;

    @Column(name = "body")
    private String body;

    //ManyToOne Annotation announces that many of these will be attributed to one entry in another table
    @ManyToOne(fetch = FetchType.LAZY)
    //JoinColumn makes this entity have a foreign id that maps to the primary id of a user entry
    //This is all done to make it so that we can have multiple reviews per user
    @JoinColumn(name = "user_id")
    private User user;
}

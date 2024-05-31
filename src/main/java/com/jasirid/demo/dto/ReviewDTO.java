package com.jasirid.demo.dto;

import com.jasirid.demo.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO {
    private int id;
    private String aTitle;
    private String title;
    private String body;
    private User user;
}

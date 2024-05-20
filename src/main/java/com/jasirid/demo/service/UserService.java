package com.jasirid.demo.service;

import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.entity.User;

import java.util.List;

public interface UserService {

    //create a new user method
    UserDTO createUser(UserDTO userDTO);

    //Get any user by ID method
    UserDTO getUserByID(int userID);

    //Update user method
    UserDTO updateUser(int userID, UserDTO updatedUser);
}

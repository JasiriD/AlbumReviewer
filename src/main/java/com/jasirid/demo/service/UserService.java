package com.jasirid.demo.service;

import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.entity.User;

import java.util.List;

public interface UserService {
    UserDTO createUser(UserDTO userDTO);

    UserDTO getUserByID(int userID);

    List<UserDTO> getAllUsers();
}

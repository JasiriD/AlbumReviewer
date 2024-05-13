package com.jasirid.demo.service;

import com.jasirid.demo.dto.UserDTO;

public interface UserService {
    UserDTO createUser(UserDTO userDTO);

    UserDTO getUserByID(int userID);
}

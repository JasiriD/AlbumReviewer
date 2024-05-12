package com.jasirid.demo.mapper;

import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.entity.User;

public class UserMapper {
    //Takes a user JPA entity and converts it into a User DTO
    public static UserDTO mapToUserDTO(User user){
        return new UserDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getUserName(),
                user.getEmail()
        );
    }
}

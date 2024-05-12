package com.jasirid.demo.mapper;

import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.entity.User;

//This class maps user objects to user dtos and vice versa

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

    //takes a user DTO and converts it into a User entity
    public static User mapToUserEntity(UserDTO userDTO){
        return new User(
                userDTO.getId(),
                userDTO.getFirstName(),
                userDTO.getLastName(),
                userDTO.getUserName(),
                userDTO.getEmail()
        );
    }

}

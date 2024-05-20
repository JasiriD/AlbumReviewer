package com.jasirid.demo.service.impl;

import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.entity.User;
import com.jasirid.demo.exception.NotFoundException;
import com.jasirid.demo.mapper.UserMapper;
import com.jasirid.demo.repository.UserRepository;
import com.jasirid.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

//Implementing UserService interface
//Impl stands for implementation, just in case you forget for some odd reason
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    //createUser method / Creates a user
    @Override
    public UserDTO createUser(UserDTO userDTO) {
        //taking dto from input and converting it to an entity using method from UserMapper class
        User user = UserMapper.mapToUserEntity(userDTO);
        User savedUser = userRepository.save(user);

        //returning savedUser back to client as a DTO
        return UserMapper.mapToUserDTO(savedUser);
    }

    //Method for finding users by id
    @Override
    //Method returns a UserDTO
    public UserDTO getUserByID(int userID) {
        //findByID returns a user object, so here we apply that to a new user object
        User user = userRepository.findById(userID)
                //throwing exception if there is not a user with userID ID
                .orElseThrow(() ->
                        new NotFoundException("There is no user with the id " + userID + "!"));

        //Converting findById's user object into an employee DTO to return proper data type for method
        return UserMapper.mapToUserDTO(user);
    }

    @Override
    public UserDTO updateUser(int userID, UserDTO updatedUser) {
        //throwing exception if there is not a user with userID ID
        User user = userRepository.findById(userID).orElseThrow(()
                -> new NotFoundException("There is no user with the id " + userID + "!"));

        //Setting new user objects parameters to given user DTO
        user.setUserName(updatedUser.getUserName());
        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());


        User newUpdatedUser = userRepository.save(user);

        //Returning updated user
        return UserMapper.mapToUserDTO(newUpdatedUser);
    }
}

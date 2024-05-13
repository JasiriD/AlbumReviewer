package com.jasirid.demo.service.impl;

import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.entity.User;
import com.jasirid.demo.mapper.UserMapper;
import com.jasirid.demo.repository.UserRepository;
import com.jasirid.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

//Implementing UserService interface
//Impl stands for implementation, just in case you forget for some odd reason
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    //createUser method
    @Override
    public UserDTO createUser(UserDTO userDTO) {
        //taking dto from input and converting it to an entity using method from UserMapper class
        User user = UserMapper.mapToUserEntity(userDTO);
        User savedUser = userRepository.save(user);

        //returning savedUser back to client as a DTO
        return UserMapper.mapToUserDTO(savedUser);
    }
}

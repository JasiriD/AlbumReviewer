package com.jasirid.demo.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginServiceImpl {
    public boolean validateUser(String username, String password){
        return username.equals("Jeezi") && password.equals("Izeej");
    }
}

package com.jasirid.demo.exception;

//Extending RuntimeException java class

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//This is configuring a message for when something searched for in the database does not exist

//ResponseStatus annotation throws the error

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException{
    public NotFoundException(String message){
        //Passes message to superclass constructor
        super(message);
    }
}

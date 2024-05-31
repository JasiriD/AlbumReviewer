package com.jasirid.demo.controller;

import com.jasirid.demo.dto.UserDTO;
import com.jasirid.demo.entity.User;
import com.jasirid.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//RestController annotation allows this class to handle HTTP requests
//CrossOrgin allows React application/client to call user rest APIS
@CrossOrigin("*")
@RestController
//Base url for rest APIs that are built within this controller
@AllArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    //injecting UserService interface
    private UserService userService;

    //Add User REST API

    //Postmapping marking this method as a post request
    @PostMapping
    //@RequestBody annotation takes JSON from HTTP request and converts it into the userDTO java object
    //Method's return type is ResponseEntity of type UserDTO
    //Not sure what ResponseEntity is, I believe you can use it to configure http responses (such as error messages) but what it's doing here I am clueless to
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO){
        UserDTO savedUser = userService.createUser(userDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    //---------------------------------------------------------------------------------------------------------

    //Get User REST API

    //GetMapping annotation tells spring that this is a get request
    @GetMapping("{id}")
    //passing ID to method
    //I think PathVariable here is passing the ID from the url above to the userID method argument.
    public ResponseEntity<UserDTO> getUserByID(@PathVariable("id") int userID){
        //userService.getUserByID method returns userDTO and assigns it to a new userDTO object
        UserDTO userDTO = userService.getUserByID(userID);


        return ResponseEntity.ok(userDTO);
    }

    //---------------------------------------------------------------------------------------------------------

    //Get all Users REST API

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers(){
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    //---------------------------------------------------------------------------------------------------------

    //Update User REST API

    //PutMapping tells spring that this is a put request
    @PutMapping("{id}")
    //Once again passing id to method
    //Still not too sure about requestbody, but I had it in the earlier method so I put it here
    public ResponseEntity<UserDTO> updateUser(@PathVariable("id") int userID, @RequestBody UserDTO updatedUser){


        UserDTO userDTO = userService.updateUser(userID, updatedUser);

        return ResponseEntity.ok(userDTO);

    }

    //---------------------------------------------------------------------------------------------------------

    //Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") int userID){
        userService.deleteUser(userID);
        return ResponseEntity.ok("Employee Deleted");
    }


}

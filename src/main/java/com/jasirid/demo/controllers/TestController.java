package com.jasirid.demo.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


//Annotation that tells spring how to handle this class. This one tells spting that this is a controller class.
@Controller
public class TestController {
    @GetMapping
    //ResponseBody returns a plain text output with no template. (So no front end fancyness. Just text)
    @ResponseBody
    public String ough(){
      return "Oughhhhhh";
    };
}

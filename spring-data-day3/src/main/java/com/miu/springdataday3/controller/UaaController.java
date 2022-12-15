package com.miu.springdataday3.controller;

import com.miu.springdataday3.dto.UserDto;
import com.miu.springdataday3.entity.User;
import com.miu.springdataday3.model.LoginRequest;
import com.miu.springdataday3.model.LoginResponse;
import com.miu.springdataday3.service.UaaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/uaa")
@RequiredArgsConstructor
@CrossOrigin
public class UaaController {

    private final UaaService uaaService;

    @PostMapping("/signin")
    public LoginResponse signin(@RequestBody LoginRequest loginRequest){
        return uaaService.signIn(loginRequest);
    }

    @PostMapping("/signup")
    public LoginResponse signup(@RequestBody User user){
        return uaaService.singUp(user);
    }


}

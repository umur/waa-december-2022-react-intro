package com.waa.security.controller;

import com.waa.security.entity.User;
import com.waa.security.model.LoginRequest;
import com.waa.security.service.UaaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping()
@CrossOrigin
@RequiredArgsConstructor
public class UaaController {

    private final UaaService uaaService;


    @PostMapping("/login")
    public ResponseEntity<?> loginPost(@RequestBody LoginRequest loginRequest) {
        try {
            var loginResponse = uaaService.login(loginRequest);
            return ResponseEntity.ok().body(loginResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }


    }


    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        try {
            uaaService.signUp(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
        return ResponseEntity.ok().body("User created");

    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok().body(uaaService.getAllUsers());
    }
}

package com.miu.springdataday3.controller;

import com.miu.springdataday3.dto.UserDto;
import com.miu.springdataday3.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<UserDto> findAll(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public UserDto findById(@PathVariable int id) {
        return userService.findById(id);
    }

    @PostMapping
    public void save(@RequestBody UserDto userDto){
        userService.save(userDto);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody UserDto userDto) {
        userService.update(id, userDto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        userService.delete(id);
    }
}

package com.miu.springdataday3.service;

import com.miu.springdataday3.dto.UserDto;
import com.miu.springdataday3.entity.User;
import com.miu.springdataday3.model.LoginRequest;
import com.miu.springdataday3.model.LoginResponse;
import com.miu.springdataday3.model.RefreshTokenRequest;
import org.springframework.stereotype.Service;

@Service
public interface UaaService {
    LoginResponse signIn(LoginRequest loginRequest);
    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
    LoginResponse singUp(User user);
}

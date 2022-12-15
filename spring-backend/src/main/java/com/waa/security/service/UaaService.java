package com.waa.security.service;

import com.waa.security.entity.User;
import com.waa.security.model.LoginRequest;
import com.waa.security.model.LoginResponse;
import com.waa.security.model.RefreshTokenRequest;

import javax.naming.AuthenticationException;
import java.util.List;

public interface UaaService {
    LoginResponse login(LoginRequest loginRequest);

    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest) throws AuthenticationException;

    void signUp(User user);

    List<User> getAllUsers();
}

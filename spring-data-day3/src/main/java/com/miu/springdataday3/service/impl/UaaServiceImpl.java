package com.miu.springdataday3.service.impl;

import com.miu.springdataday3.dto.UserDto;
import com.miu.springdataday3.entity.Role;
import com.miu.springdataday3.entity.User;
import com.miu.springdataday3.model.LoginRequest;
import com.miu.springdataday3.model.LoginResponse;
import com.miu.springdataday3.model.RefreshTokenRequest;
import com.miu.springdataday3.repository.RoleRepo;
import com.miu.springdataday3.security.JwtHelper;
import com.miu.springdataday3.service.UaaService;
import com.miu.springdataday3.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UaaServiceImpl implements UaaService {
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final RoleRepo roleRepo;
    private final JwtHelper jwtHelper;
    private final ModelMapper modelMapper;

    @Override
    public LoginResponse signIn(LoginRequest loginRequest) {
        try {
            var result = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                            loginRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            log.info("Bad Credentials");
        }

        final String accessToken = jwtHelper.generateToken(loginRequest.getEmail());
        final String refreshToken = jwtHelper.generateRefreshToken(loginRequest.getEmail());
        var loginResponse = new LoginResponse(accessToken, refreshToken);
        return loginResponse;
    }

    @Override
    public LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        boolean isRefreshTokenValid = jwtHelper.validateToken(refreshTokenRequest.getRefreshToken());
        if (isRefreshTokenValid) {
            final String accessToken = jwtHelper.generateToken(jwtHelper.getSubject(refreshTokenRequest.getRefreshToken()));
            var loginResponse = new LoginResponse(accessToken, refreshTokenRequest.getRefreshToken());
            return loginResponse;
        }
        return new LoginResponse();
    }

    @Override
    public LoginResponse singUp(User user) {
        List<Role> roles = new ArrayList<>();

        //assign user role by default
        roles.add(roleRepo.findByRole("USER"));
        user.setRoles(roles);

        String hashed = new BCryptPasswordEncoder().encode(user.getPassword());
        user.setPassword(hashed);

        userService.save(modelMapper.map(user,UserDto.class));
        return new LoginResponse();
    }
}

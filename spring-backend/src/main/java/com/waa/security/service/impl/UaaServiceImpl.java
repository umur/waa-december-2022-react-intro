package com.waa.security.service.impl;

import com.waa.security.entity.User;
import com.waa.security.model.LoginRequest;
import com.waa.security.model.LoginResponse;
import com.waa.security.model.RefreshTokenRequest;
import com.waa.security.repository.UserRepo;
import com.waa.security.security.JwtHelper;
import com.waa.security.service.UaaService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import javax.naming.AuthenticationException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class UaaServiceImpl implements UaaService {
    private final UserRepo userRepo;

    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final JwtHelper jwtHelper;

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        try {
            var result = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                            loginRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new RuntimeException("Bad Credentials");
        }

        final String accessToken = jwtHelper.generateToken(loginRequest.getEmail());
        final String refreshToken = jwtHelper.generateRefreshToken(loginRequest.getEmail());
        return new LoginResponse(accessToken, refreshToken);
    }


    @Override
    public LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest) throws AuthenticationException {
        boolean isRefreshTokenValid = jwtHelper.validateToken(refreshTokenRequest.getRefreshToken());
        if (isRefreshTokenValid) {
            final String accessToken = jwtHelper.generateToken(jwtHelper.getSubject(refreshTokenRequest.getRefreshToken()));
            return new LoginResponse(accessToken, refreshTokenRequest.getRefreshToken());
        }
        return new LoginResponse();
    }

    @Override
    public void signUp(User user) {
        if (userRepo.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("User already exists");
        }
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepo.save(user);
    }

    @Override
    public List<User> getAllUsers() {

        return userRepo.findAll();
    }
}

package com.waa.security.controller;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.naming.AuthenticationException;


@RestControllerAdvice
@CrossOrigin

public class CustomErrorController {
    private static final String PATH = "/error";


    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleAuthenticationError(final HttpServletRequest request,
                                                       final HttpServletResponse response, Exception e) throws Throwable {
        return ResponseEntity.status(response.getStatus()).body(e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleError(final HttpServletRequest request,
                                         final HttpServletResponse response, RuntimeException e) throws Throwable {


        return ResponseEntity.status(response.getStatus()).body(e.getMessage());

    }


    public String getErrorPath() {
        return PATH;
    }
}

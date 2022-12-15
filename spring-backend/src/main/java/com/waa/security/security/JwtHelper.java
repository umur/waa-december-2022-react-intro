package com.waa.security.security;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import javax.naming.AuthenticationException;
import java.util.Date;
import java.util.Map;


@Component
public class JwtHelper {

    public final String secret = "SecretKeyToGenJWTs";

    public final long expiration = 15 * 60 * 1000;

    public String generateToken(String email) {
        return Jwts.builder().setSubject(email)
                .setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    public String generateRefreshToken(String email) {
        return Jwts.builder().setSubject(email)
                .setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    public String getSubject(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token) throws AuthenticationException {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (SignatureException e) {
            throw new AuthenticationException(e.getMessage());
//        } catch (IllegalArgumentException e) {
//            throw new AuthenticationException(e.getMessage());
//        } catch (MalformedJwtException e) {
//            throw new AuthenticationException(e.getMessage());
//        } catch (UnsupportedJwtException e) {
//            throw new AuthenticationException(e.getMessage());
//        } catch (ExpiredJwtException e) {
//            throw new AuthenticationException(e.getMessage());
//        }
        }
    }

    public String doGenerateRefreshToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    public String getUserNameFromToken(String token) throws Exception {
        String result;
        try {
            result = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();

        } catch (ExpiredJwtException e) {
            throw new ExpiredJwtException(null, null, "Token is expired");

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
        return result;
    }

}

package com.waa.security.repository;

import com.waa.security.entity.User;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepo extends CrudRepository<User, Long> {

    @NotNull
    List<User> findAll();

    User findByEmail(String email);

}

package com.money.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public class CustomerDetailService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username){
        return User.withUsername("admin")
                .password("{noop}password")
                .roles("USER")
                .build();
    }
}

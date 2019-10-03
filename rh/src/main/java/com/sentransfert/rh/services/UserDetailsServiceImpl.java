package com.sentransfert.rh.services;


import com.sentransfert.rh.model.User;
import com.sentransfert.rh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private User userConnecte; //###1###

    @Autowired
    UserRepository userRepository;


    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found with -> username or email : " + username));
        //c est ici que mohamet gerer les garants
        this.userConnecte=user; //####2####
        return UserPrinciple.build(user);
    }

    @Autowired
    public  User getUserConnecte()
    {
        return userConnecte;
    }
}

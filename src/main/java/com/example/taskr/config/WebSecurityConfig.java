package com.example.taskr.config;

import com.example.taskr.repositories.UserRepository;
import com.example.taskr.security.AuthenticationFilter;
import com.example.taskr.security.AuthorizationFilter;
import com.example.taskr.service.UserService;
import com.example.taskr.service.impl.UserServiceImpl;
import com.example.taskr.utility.RestAuthenticationEntryPoint;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;
    private final UserServiceImpl userServiceImpl;

    public WebSecurityConfig(UserServiceImpl userServiceImpl,UserService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder, UserRepository userRepository) {
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;
        this.userServiceImpl = userServiceImpl;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .headers().frameOptions().disable()
                .and()
                .formLogin().disable()
                .httpBasic().disable().exceptionHandling().authenticationEntryPoint(new RestAuthenticationEntryPoint())
                .and()
                .authorizeRequests()
                .antMatchers( "/","/api/auth/**","/**/*.png", "/**/*.gif", "/**/*.svg", "/**/*.jpg", "/**/*.html", "/**/*.css", "/**/*.js",
                        "/v2/api-docs","/swagger-resources/**", "/swagger-ui.html")
                .permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilter(getAuthenticationFilter())
                .addFilter(new AuthorizationFilter(authenticationManager()))
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    public AuthenticationFilter getAuthenticationFilter() throws Exception {
        final AuthenticationFilter filter = new AuthenticationFilter(userServiceImpl,userRepository, authenticationManager());
        filter.setFilterProcessesUrl("/api/auth/login");
        return filter;
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource(){
        final CorsConfiguration configuration =new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE","OPTIONS","PATCH"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(Arrays.asList("*"));
        final UrlBasedCorsConfigurationSource src =new UrlBasedCorsConfigurationSource();
        src.registerCorsConfiguration("/**",configuration);
        return src;
    }

}

package com.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.login.entity.Login;
import com.login.services.LoginService;

import java.util.List;


@RestController
public class LoginController {
	@Autowired
	private LoginService loginService;


	@PostMapping("/register") //checking whether the userid is already present in the data base or not if present throw exception
	@CrossOrigin(origins="http://localhost:4200")
	public Login registeruser(@RequestBody Login cre) throws Exception{
		String temp = cre.getUseremail();
		if(temp != null && !"".equals(temp)) {
			Login cd = loginService.fetchuserId(temp);
			if(cd !=null) {
				throw new Exception("user with "+temp+" is already present");
			}
			
		}
		Login cred = null;
		cred=loginService.saveuser(cre);
		return cred;
		
	}
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public Login loginUser(@RequestBody Login cre) throws Exception {
		String temp = cre.getUseremail();
		Integer password = cre.getPassword();
		Login cd= null;
		if(temp != null && password != null) {
		 cd = loginService.fetchuserIdAndPassword(temp, password);
		}
		if(cd == null) {
			throw new Exception("bad credential");
		}
		return cd;
	}

	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getuser/{id}")
	public  Login getUser(@PathVariable String id ){
		return loginService.fetchuserId(id);
	}

}

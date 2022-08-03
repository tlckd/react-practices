package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LandingController {
	
	@RequestMapping("")
	public String index() {
		return "index";
	}
	// 페비아이콘 에러뜨는거 처리
	@GetMapping("favicon.ico")
	@ResponseBody // 직접 응답하겠다고 해줌, null이 템플릿엔진으로 들어가서 이거 해준거 
	public void returnNoFavion() {
		//약어로 페비아이콘 설정이 있는데 만들어버린거 
		
	}
}

package dev.pernthaler.sebastian.website.controllers;

import dev.pernthaler.sebastian.website.utils.RequestUtil;
import dev.pernthaler.sebastian.website.utils.ResourceUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/robots.txt", produces = "text/plain")
public class Robots {

    @GetMapping
    @ResponseBody
    public String getRobots(HttpServletRequest request) {
        return ResourceUtil.readString("assets/robots.txt").formatted(RequestUtil.getURL(request));
    }

}
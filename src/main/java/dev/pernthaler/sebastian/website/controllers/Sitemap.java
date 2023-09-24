package dev.pernthaler.sebastian.website.controllers;

import dev.pernthaler.sebastian.website.utils.RequestUtil;
import dev.pernthaler.sebastian.website.utils.ResourceUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/sitemap.xml", produces = "application/xml")
public class Sitemap {

    @GetMapping
    @ResponseBody
    public String getSitemap(HttpServletRequest request) {
        return ResourceUtil.readString("assets/sitemap.xml").formatted(RequestUtil.getURL(request));
    }

}
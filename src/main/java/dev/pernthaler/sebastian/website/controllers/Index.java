package dev.pernthaler.sebastian.website.controllers;

import dev.pernthaler.sebastian.website.entities.Link;
import dev.pernthaler.sebastian.website.entities.LinkTarget;
import dev.pernthaler.sebastian.website.utils.RequestUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

@Controller
@RequestMapping("/")
public class Index {

    private static final List<Link> LINKS = List.of(
            new Link("Contact", "mailto:sebastian@pernthaler.dev", "fa-solid fa-envelope"),
            new Link("LinkedIn", "https://www.linkedin.com/in/pernthaler/", "fa-brands fa-linkedin", LinkTarget.BLANK),
            new Link("GitHub", "https://github.com/pernthaler/website", "fa-brands fa-github", LinkTarget.BLANK)
    );

    @GetMapping
    public String getIndex(HttpServletRequest request, @NotNull Model model) {
        model.addAttribute("url", RequestUtil.getURL(request));
        model.addAttribute("domain", request.getServerName());
        model.addAttribute("plausible", System.getenv("PLAUSIBLE"));
        model.addAttribute("links", LINKS);
        return "index";
    }

}
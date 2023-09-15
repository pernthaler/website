package dev.pernthaler.sebastian.website.controllers;

import dev.pernthaler.sebastian.website.entities.Link;
import dev.pernthaler.sebastian.website.entities.Target;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

@Controller
@RequestMapping("/")
public class Index {

    private final List<Link> links = List.of(
            new Link("Contact", "mailto:sebastian@pernthaler.dev", "fa-solid fa-envelope"),
            new Link("LinkedIn", "https://www.linkedin.com/in/pernthaler/", "fa-brands fa-linkedin", Target.BLANK),
            new Link("GitHub", "https://github.com/pernthaler/website", "fa-brands fa-github", Target.BLANK)
    );

    @GetMapping
    public String getIndex(@NotNull Model model) {
        model.addAttribute("links", links);
        return "index";
    }

}
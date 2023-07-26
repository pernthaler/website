package dev.pernthaler.website.controllers

import dev.pernthaler.website.entities.Link
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/")
class Index {

    def links = [
            new Link("Contact", "mailto:sebastian@pernthaler.dev", false),
            new Link("LinkedIn", "https://www.linkedin.com/in/pernthaler/", true),
            new Link("GitHub", "https://github.com/pernthaler/website", true)
    ]

    @GetMapping
    def getIndex(Model model) {
        model["links"] = links
        "index"
    }

}
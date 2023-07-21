package dev.pernthaler.website.pages

import dev.pernthaler.website.entities.Link
import org.springframework.stereotype.Controller
import org.springframework.ui.ModelMap
import org.springframework.web.bind.annotation.GetMapping

@Controller
class Index {

    def links = [
            new Link("Contact", "mailto:sebastian@pernthaler.dev", false),
            new Link("LinkedIn", "https://www.linkedin.com/in/pernthaler", true),
            new Link("GitHub", "https://github.com/pernthaler/website", true)
    ].asImmutable()

    @GetMapping("/")
    index(ModelMap model) {
        model["links"] = links
        "Index"
    }

}
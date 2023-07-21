package dev.pernthaler.website.pages

import dev.pernthaler.website.entities.Link
import org.springframework.stereotype.Controller
import org.springframework.ui.ModelMap
import org.springframework.web.bind.annotation.GetMapping

@Controller
class Index {

    def links = [
            new Link("Contact", "mailto:sebastian@pernthaler.dev"),
            new Link("GitHub", "https://github.com/pernthaler/website"),
            new Link("LinkedIn", "https://www.linkedin.com/in/pernthaler"),
            new Link("Xing", "https://www.xing.com/profile/Sebastian_Pernthaler")
    ].asImmutable()

    @GetMapping("/")
    index(ModelMap model) {
        model["links"] = links
        "Index"
    }

}
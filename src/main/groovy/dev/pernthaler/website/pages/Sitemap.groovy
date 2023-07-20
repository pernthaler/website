package dev.pernthaler.website.pages

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class Sitemap {

    @GetMapping("/sitemap.xml")
    sitemap() {
        "Sitemap"
    }

}
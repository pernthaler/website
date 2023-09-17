package dev.pernthaler.sebastian.website.entities;

public record Link(String text, String href, String icon, LinkTarget target) {

    public Link(String text, String href, String icon) {
        this(text, href, icon, LinkTarget.SELF);
    }

}
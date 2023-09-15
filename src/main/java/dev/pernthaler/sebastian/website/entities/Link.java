package dev.pernthaler.sebastian.website.entities;

public record Link(String text, String href, String icon, Target target) {

    public Link(String text, String href, String icon) {
        this(text, href, icon, Target.SELF);
    }

}
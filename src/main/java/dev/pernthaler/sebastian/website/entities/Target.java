package dev.pernthaler.sebastian.website.entities;

public enum Target {

    SELF,
    BLANK;

    @Override
    public String toString() {
        return "_%s".formatted(name().toLowerCase());
    }

}
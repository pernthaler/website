package dev.pernthaler.website.entities

record Link(
        String name,
        String url,
        boolean external
) {}
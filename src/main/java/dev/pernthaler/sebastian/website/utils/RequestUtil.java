package dev.pernthaler.sebastian.website.utils;

import jakarta.servlet.http.HttpServletRequest;
import lombok.experimental.UtilityClass;
import org.jetbrains.annotations.NotNull;

@UtilityClass
public class RequestUtil {

    public static @NotNull String getURL(@NotNull HttpServletRequest request) {
        int i = request.getRequestURL().indexOf(":");
        String protocol = request.getHeader("X-Forwarded-Proto");
        if (protocol == null)
            protocol = request.getRequestURL().substring(0, i);
        return "%s:%s".formatted(protocol, request.getRequestURL().substring(i + 1,
                request.getRequestURL().length() - request.getRequestURI().length()
        ));
    }

}
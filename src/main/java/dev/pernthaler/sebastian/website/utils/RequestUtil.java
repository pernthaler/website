package dev.pernthaler.sebastian.website.utils;

import jakarta.servlet.http.HttpServletRequest;
import lombok.experimental.UtilityClass;
import org.jetbrains.annotations.NotNull;

@UtilityClass
public class RequestUtil {

    public static @NotNull String getURL(@NotNull HttpServletRequest request) {
        return request.getRequestURL().substring(0, request.getRequestURL().length() - request.getServletPath().length());
    }

}
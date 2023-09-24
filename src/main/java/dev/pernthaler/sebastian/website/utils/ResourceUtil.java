package dev.pernthaler.sebastian.website.utils;

import lombok.SneakyThrows;
import lombok.experimental.UtilityClass;
import org.jetbrains.annotations.Contract;
import org.jetbrains.annotations.NotNull;
import org.springframework.core.io.ClassPathResource;

@UtilityClass
public class ResourceUtil {

    @Contract("_ -> new")
    @SneakyThrows
    public static @NotNull String readString(String path) {
        return new String(new ClassPathResource(path).getInputStream().readAllBytes());
    }

}
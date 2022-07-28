package me.pernthaler.sebastian.website;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;
import java.util.Objects;

public class Main {

    public static void main(String[] args) throws Exception {
        var server = new Server(8080);
        var webAppContext = new WebAppContext();
        var resourceBase = Objects.requireNonNull(Main.class.getClassLoader().getResource("public")).toExternalForm();
        webAppContext.setResourceBase(resourceBase);
        webAppContext.getMimeTypes().addMimeMapping("mjs", "application/javascript");
        server.setHandler(webAppContext);
        server.start();
        server.join();
    }

}
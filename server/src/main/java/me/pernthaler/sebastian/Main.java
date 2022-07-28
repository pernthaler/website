package me.pernthaler.sebastian;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;
import java.util.Objects;

public class Main {

    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);
        WebAppContext webAppContext = new WebAppContext();
        String resourceBase = Objects.requireNonNull(Main.class.getClassLoader().getResource("static")).toExternalForm();
        webAppContext.setResourceBase(resourceBase);
        server.setHandler(webAppContext);
        server.start();
        server.join();
    }

}
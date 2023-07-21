<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="color-scheme" content="dark">
    <meta name="HandheldFriendly" content="true">
    <meta name="theme-color" content="#e06c75">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <title>Sebastian Pernthaler</title>
    <meta name="description" content="Software-Developer">
    <meta name="author" content="Sebastian Pernthaler">

    <link rel="icon" href="/img/icon.png">
    <link rel="stylesheet" href="/webjars/fontsource-variable__jetbrains-mono/index.css">
    <link rel="stylesheet" href="/webjars/normalize.css/normalize.css">
    <link rel="stylesheet" href="/css/styles.css">

    <script type="text/javascript" src="/webjars/particles.js/particles.js"></script>

</head>
<body>

<main>
    <h1>Sebastian Pernthaler</h1>
    <h2>Software-Developer</h2>
    <ul>
        <#list links as link>
            <li>
                <a href="${link.url()}" target="${link.external()?then("_blank", "_self")}" rel="noopener noreferrer">${link.name()}</a>
            </li>
        </#list>
    </ul>
</main>

<div id="background"></div>

<script type="text/javascript" src="/js/main.js"></script>

</body>
</html>
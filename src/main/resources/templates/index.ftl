<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="color-scheme" content="dark">
    <meta name="HandheldFriendly" content="true">
    <meta name="theme-color" content="#e06c75">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <title>Sebastian Pernthaler</title>
    <meta name="description" content="Software Developer">
    <meta name="author" content="Sebastian Pernthaler">
    <meta name="keywords" content="Sebastian Pernthaler">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sebastian.pernthaler.dev/">
    <meta property="og:title" content="Sebastian Pernthaler">
    <meta property="og:site_name" content="Sebastian Pernthaler">
    <meta property="og:description" content="Software Developer">
    <meta property="og:image" content="https://sebastian.pernthaler.dev/img/icon.png">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Sebastian Pernthaler">
    <meta name="twitter:description" content="Software Developer">
    <meta name="twitter:image" content="https://sebastian.pernthaler.dev/img/icon.png">

    <link rel="icon" href="/img/icon.png">
    <link rel="author" href="/humans.txt">

    <link rel="stylesheet" href="/webjars/fontsource-variable__jetbrains-mono/index.css">
    <link rel="stylesheet" href="/webjars/normalize.css/normalize.css">
    <link rel="stylesheet" href="/css/styles.css">

    <script type="text/javascript" src="/webjars/particles.js/particles.js"></script>

</head>
<body>

<main>
    <h1>Sebastian Pernthaler</h1>
    <h2>Software Developer</h2>
    <ul>
        <#list links as link>
            <li>
                <a href="${link.url()}" target="${link.external()?then("_blank", "_self")}" rel="noopener noreferrer">${link.name()}</a>
            </li>
        </#list>
    </ul>
</main>

<div id="background"></div>

<script type="text/javascript" src="/js/background.js"></script>

</body>
</html>
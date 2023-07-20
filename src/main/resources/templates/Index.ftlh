<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sebastian Pernthaler</title>
    <link rel="stylesheet" href="/webjars/fontsource-variable__jetbrains-mono/index.css">
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
<main>
    <h1>Sebastian Pernthaler</h1>
    <ul>
        <#list links as link>
            <li>
                <a href="${link.url()}">${link.name()}</a>
            </li>
        </#list>
    </ul>
</main>
</body>
</html>
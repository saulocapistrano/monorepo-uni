<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=false displayMessage=true; section>
    <head>
        <link rel="stylesheet" href="${url.resourcesPath}/css/login.css">
    </head>
    <div class="login">
        <h1>Bem-vindo ao Sistema Acadêmico</h1>
        <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
            <input type="text" id="username" name="username" placeholder="Usuário" autofocus>
            <input type="password" id="password" name="password" placeholder="Senha">
            <input type="submit" id="kc-login" name="login" value="Entrar">
        </form>
    </div>
</@layout.registrationLayout>

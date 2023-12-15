<template>
    <div class="login">
        <div class="center">
            <h1>Login</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>E-mailadres</label>
                </div>
                <div class="txt_field">
                    <input type="password" required>
                    <span></span>
                    <label>Wachtwoord</label>
                </div>
                <div class="pass">Wachtwoord vergeten?</div>
                <input type="submit" value="Login">
                <div class="signup_link">
                    Nog geen member? <a href="#">Signup</a>
                </div>
            </form>
        </div>
    </div>
</template>
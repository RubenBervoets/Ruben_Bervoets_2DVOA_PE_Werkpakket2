<template>
    <div class="login">
        <div class="center">
            <h1>{{ titleForm }}</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>{{ label1 }}</label>
                </div>
                <div class="txt_field">
                    <input type="password" required>
                    <span></span>
                    <label>{{ label2 }}</label>
                </div>
                <div class="pass">{{ forgotPass }}</div>
                <input type="submit" value="Login">
                <div class="signup_link">
                    Nog geen member? <a href="#">Signup</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titleForm: "Login",
            label1: "E-mailadres",
            label2: "Wachtwoord",
            forgotPass: "Wachtwoord vergeten?"
        }
    }
}
</script>
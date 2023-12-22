<template>
    <section class="login">
        <div class="center">
            <div class="form-container" v-if="!loggedIn">
                <h1>{{ titleForm }}</h1>
                <form class="loginForm" v-on:submit.prevent="submitForm()" action="">
                    <div class="txt_field">
                        <label for="email">{{ label1 }}</label>
                        <input type="email" name="email" id="email" required>
                    </div>
                    <div class="txt_field">
                        <label for="password">{{ label2 }}</label>
                        <input type="password" name="password" id="password" required>
                    </div>
                    <div class="pass">{{ forgotPass }}</div>
                    <div class="form-action">
                        <button class="loginbutton" type="submit">{{ accountButtonText }}</button>
                    </div>
                </form>
            </div>
            <div class="form-container" v-else>
                <h1>{{ title2 }}</h1>
                <p class="message">{{ message }}</p>
                <button v-on:click="logout()" type="button" class="loginbutton">{{ accountButtonText }}</button>
            </div>
        </div>
    </section>
</template>

<script >
export default {
    data() {
        return {
            titleForm: "Login",
            label1: "E-mailadres",
            label2: "Wachtwoord",
            forgotPass: "Wachtwoord vergeten?",
            title2: "Welkom!",
            message: "Je bent succesvol ingelogd!",
            accountButtonText: 'Login',
            loggedIn: false
        }
    },
    methods: {
        submitForm() {
            this.accountButtonText = "Logout";
            this.loggedIn = true;
        },
        logout() {
            this.accountButtonText = "Login";
            this.loggedIn = false;
        },
    }
}
</script>
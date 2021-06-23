<template>
    <div class="body">
    <main class="animate-right">
        <section class="instructions">
            <h2>Login, vem com a gente!</h2>
            <p>Preencha as informações abaixo<br>para acessar nossos serviços</p>
        </section>
        <form>
            <!-- labels are included when input stay on focus -->
            <div class="user-container">
                <label :class="classes.user" for="user">Nome</label>

                <input v-model="input.user" v-on:blur="hideUserLabel()" v-on:focus="showUserLabel()" 
                cc-number id="user" type="text" name="user" placeholder="Nome" required>
            </div>
            <div class="password-container">
                <label :class="classes.password" for="password">Senha</label>

                <div class="pass-container">
                    <input v-model="input.password" v-on:blur="hidePassLabel()" v-on:focus="showPassLabel()"
                    id="password" :type="type" name="password" placeholder="Senha" autocomplete="on" required>

                    <img v-on:click="viewPass()" 
                    alt="Botão para ver a senha desativado" src="../assets/eye-down.svg" class="eye-down" :class="classes.eyeDown">
                    <img v-on:click="hidePass()" 
                    alt="Botão para ver a senha ativado" src="../assets/eye.svg"  class="eye" :class="classes.eye">
                </div>     
            </div>
            <button class="submit" type="submit">Enviar</button>
        </form>
    </main>
    <footer>
        <p>Feito com ❤ para</p>
        <img src="../assets/ylogo.png" alt="YBOH logo">
    </footer>
    </div>
</template>

<script>

export default {
    data() {
        return {
            input: {
                user: '',
                password: ''
            },
            classes: {
                user: 'hide',
                password: 'hide',
                eyeDown: '',
                eye: 'hide'
            },
            type: 'password' 
        }
    },
    methods: {
        //show labels
        showUserLabel() {
            this.classes.user = '';
        },
        showPassLabel() {
            this.classes.password = '';
        },

        //hide labels
        hideUserLabel() {
            if(this.input.user == '') {
                this.classes.user = 'hide';
            }
        },
        hidePassLabel() {
            if(this.input.password == '') {
                this.classes.password = 'hide';
            }
        },

        //swiching password view
        viewPass() {
            this.type = 'text';
            this.classes.eyeDown = 'hide';
            this.classes.eye = '';
        },
        hidePass() {
            this.type = 'password';
            this.classes.eyeDown = '';
            this.classes.eye = 'hide';
        },
    }
}
</script>

<style scoped>
    /* global */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.body {
    width: 100%;
    height: 100%;
    background-color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p, label, input, button {
    font-family: 'Niramit', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5rem;
}

main, footer {
    max-width: 710px;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    gap: 3.7rem
}

/* .instructions */
.instructions {
    width: 100%;
    align-self: left;
}

h2 {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    color: #193B57;
    margin: 0 0 1.2rem 0;
}

/* form */
form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3rem;
}

form div {
    width: 100%
}

label {
    display: inherit;
    position: inherit;
    transition: 0.5s;
}

.hide {
    transition: 0.5s;
    display: none;
    position: absolute;
    right: -999px;
}

input {
    width: 100%;
    height: 2rem;

    padding: 0 0 0 .75rem;

    border: 0;
    border-bottom: 2px solid #C4C4C4;
}

input:focus {
    outline: none;
    border: 2px solid #062743;
    transition: 0.1s;
}

.pass-container {
    display: flex;
    justify-content: space-between;
}

.pass-container input {
    width: 90%;
}

.pass-container img {
    width: 2rem;
    height: 2rem;
    filter: opacity(0.7);
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.pass-container img:hover {
    filter: opacity(1);
}

.submit {
    border: none;
    max-width: 455px;
    width: 70%;
    height: 3rem;

    margin: 0 0 3rem 0;

    color: #FFF;
    background-color: #062743;

    cursor: pointer;
}

.submit:focus {
    border: 2px solid #FFF;
}

.submit:hover {
    filter: opacity(0.8);
    transition: 0.3s ease-in;
}

/* animations */
@keyframes right {
    from {
      opacity: 0;
      transform: translatex(-35px)
    }
    to {
      opacity: 1;
      transform: translatex(0)
    } 
  }
  
  .animate-right {
    transform: translatex(35px);
    opacity: 0;
  
    animation: right 200ms forwards;
  }
</style>
<template>
  <q-page class="container column justify-center items-center">
    <div class="instructions ">
      <h2 class="text-h4 text-primary">Login, vem com a gente!</h2>
      <p class="text-secondary">Preencha as informações abaixo para acessar nossos serviços</p>
    </div>
    <q-form class="form column items center">
      <q-input v-model="form.name" label="Nome" />
      <div class="row items-end justify-between">
        <q-input class="password-input" v-model="form.password" :type="type" label="Senha" autocomplete> </q-input>
        <img :class="eyeButton.eyeDown"  v-on:click="viewPass()" tabindex src="../assets/eye-down.svg" alt="Botão ver senha desativada">
        <img v-on:click="hidePass()" :class="eyeButton.eye" tabindex  src="../assets/eye.svg" alt="Botão ver senha desativada">
      </div>
      
      <q-btn class="button self-center" label="Enviar" type="submit" color="dark"/>
      
    </q-form>
    <div class="footer column items-center">
      <p class="text-center">Feito com ❤ para</p>
      <img src="../assets/ylogo.png" alt="YBOH logo">
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      eyeButton: {
        eyeDown: '',
        eye: 'hide'
      },
      type: 'password'
    }
  },
  methods: {
    viewPass() {
        this.type = 'text';
        this.eyeButton.eyeDown = 'hide';
        this.eyeButton.eye = '';
        },
    hidePass() {
        this.type = 'password';
        this.eyeButton.eyeDown = '';
        this.eyeButton.eye = 'hide';
    }
  }
}
</script>

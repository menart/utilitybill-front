<template>
  <div class="card shadow mb-5 rounded">
    <div class="card-header text-bg-primary p-3 text-center fw-bold">
      Аутинфикация пользователя
    </div>
    <div class="card-body">
      <h5 class="card-title">Введите имя и пароль</h5>
      <div class="mb-3">
        <label for="login" class="form-label">Адрес электронной почты/логин/номер телефона</label>
        <input v-model="vLogin" type="text" class="form-control" id="login" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input v-model="vPassword" type="password" class="form-control" id="password">
      </div>
      <a href="#" class="btn btn-primary" @click.prevent="login">Вход</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLogin',
  data () {
    return {
      vLogin: null,
      vPassword: null
    }
  },
  methods: {
    login() {
      const login = this.vLogin
      const password = this.vPassword
      this.axios
          .post('/api/auth/login', {username: login, password: password})
          .then(res => {
            console.log(res)
            const user = {
              name: res.data.username,
              token: res.data.token,
              issuedAt: res.data.issuedAt,
              expiresAt: res.data.expiresAt,
            }
            localStorage.setItem('user', JSON.stringify(user))
            alert("ok")
          })
    },
    // logout() {
    //   privateApi
    //       .post('/api/auth/logout')
    //       .then(() => {
    //         const user = JSON.parse(localStorage.getItem('user'))
    //         this.$emit('showAlert', `До встречи, ${user.name}`, 'info')
    //         localStorage.removeItem('user')
    //         this.getRegistration()
    //       })
    //       .catch(error => {
    //         this.$emit('showAlert', error.response.data.error, 'warning')
    //       })
    // },
  }
}
</script>

<style scoped>

</style>

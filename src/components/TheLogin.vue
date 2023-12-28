<template>
  <div class="card shadow mb-5 rounded">
    <div class="card-header text-bg-primary p-3 text-center fw-bold">
      Аутинфикация пользователя
    </div>
    <div class="card-body">
      <h5 class="card-title">Введите имя и пароль</h5>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Адрес электронной почты/логин/номер телефона</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="exampleFormControlInput1">
      </div>
      <a href="#" class="btn btn-primary">Вход</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLogin'
}
</script>

<style scoped>

</style>

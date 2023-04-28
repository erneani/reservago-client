<template>
  <div class="input-wrapper">
    <label for="username">Qual o seu nome de usuário?</label>
    <input type="text" placeholder="Insira aqui seu nome de usuário" />
  </div>
</template>

<style>
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

.input-wrapper label {
  margin-bottom: 8px;
  font-size: 20px;
}

.input-wrapper input {
  padding: 16px 24px;
  border-radius: 5px;
  border: 0px solid #fff;
  font-size: 20px;
}

.input-wrapper input::placeholder {
  color: #000;
}
</style>

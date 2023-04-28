<template>
  <div class="big-input-wrapper">
    <label for="big-input">Quantos dias você deseja reservar?</label>
    <div class="big-number-wrapper">
      <input type="text" placeholder="x dias" />
    </div>
  </div>
</template>

<style>
.big-input-wrapper {
  font-size: 20px;
}

.big-number-wrapper input {
  background: transparent;
  border: 0px solid transparent;
  font-size: 96px;
  color: #fff;
  font-weight: bold;
  width: 100%;
}

.big-number-wrapper input::placeholder {
  color: #fff;
}

.big-number-wrapper input:focus {
  border: transparent;
  border-bottom: 3px solid #fff;
}
</style>

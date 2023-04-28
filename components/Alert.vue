<template>
  <div class="alert">
    <span class="alert-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style>
.alert {
  padding: 24px;
  background-color: #5dfdcb;
  border-radius: 5px;
  margin-bottom: 16px;
}

.alert-title {
  font-size: 20px;
  color: #3b429f;
  font-weight: bold;
}
</style>

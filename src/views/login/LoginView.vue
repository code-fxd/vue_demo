<template>
  <div class="login">
    <div class="login-box">
      <div class="login-btn">
        <span>123</span>
        <el-button @click="login" size="large" type="primary" :round="false"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="LoginView">
const login = () => {
  console.log("login");
};
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(
    140deg,
    #eadedb 0%,
    #bc70a4 50%,
    #409eff 75%
  );

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    .login-btn {
      display: flex;
      .el-button {
        flex: 1;
      }
    }
  }
}
</style>

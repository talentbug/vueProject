<template>
  <div class="login-container">
    
    <!-- 登录框 -->
    <div class="login-box">

      <!-- logo区域 -->
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>

      <!-- 登录表单 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <el-form-item prop="username">
          <!-- 用户名输入框 -->
          <el-input placeholder="登录名称" prefix-icon="iconfont icon-user" v-model="loginForm.username">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="登录密码" v-model="loginForm.password" :type="ispwd?'password':'text'">
            <i slot="prefix" :class="['iconfont',ispwd? 'icon-3702mima':'icon-showpassword']" @click="ispwd=!ispwd"></i>
          </el-input>
        </el-form-item>
        <!-- 按钮组 -->
      <el-row>
        <el-col>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-col>
      </el-row>
      </el-form>

      
    </div>
  </div>
</template>

<script>
import mix from "./LoginMixins.js";
export default {
  name: "Login",
  mixins: [mix]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login-container {
  background-color: #2b4b6b;
  height: 100%;

  .login-box {
    height: 304px;
    width: 450px;
    background-color: #fff;
    border-radius: 6px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    .logo {
      width: 120px;
      height: 120px;
      padding: 10px;
      border: 1px solid #eee;
      box-shadow: 0 1px 6px #eee;
      border-radius: 50%;
      position: relative;
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }

    .el-form {
      padding: 16px;
      position: relative;
      top: -50px;
    }

    .el-col {
      display: flex;
      justify-content: flex-end;
    }

    .icon-3702mima,
    .icon-showpassword {
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
        color: darkred;
      }
    }
  }
}
</style>

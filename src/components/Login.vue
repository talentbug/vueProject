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
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-col>
      </el-row>
      </el-form>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ispwd: true,
      // 登录表单对象
      loginForm: {
        username: "",
        password: ""
      },
      // 登录表单验证规则
      loginFormRules: {
        // 用户名校验规则
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        // 登录密码的校验规则
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  }
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

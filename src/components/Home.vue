<template>
    <!-- 根容器 -->
    <el-container>
        <!-- 头部区域 -->
        <el-header>
            <img src="../assets/images/logo.png" alt="">
            <h3 class="title">电商后台管理系统</h3>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 主体区域 -->
        <el-container>
            <el-aside>
                
            </el-aside>
            <!-- 右侧内容区域 -->
            <el-main>
                <!-- <router-view><router-view> -->
            </el-main>
        </el-container>
    </el-container>
    
    

</template>

<script>
import mix from "./HomeMixins.js";
export default {
  mixins: [mix]
};
</script>

<style lang="less" scope>
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  height: 60px;
  background-color: #373d41;
  user-select: none;
  padding: 0;
  img {
    float: left;
  }
  .title {
    float: left;
    color: #fff;
    font-weight: 200;
    margin-left: 15px;
  }
  .el-button {
    float: right;
    margin: 10px 20px 0 0;
  }
}
.el-aside {
  background-color: #333744;
  font-size: 12px;
  user-select: none;
}
</style>

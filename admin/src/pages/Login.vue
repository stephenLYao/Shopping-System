<template>
  <div class="login-page">
    <transition name="form-fade" mode="in-out">
      <section class="form-contianer" v-show="showLogin">
        <div class="manage-tip">
          <p>后台管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item
            :prop="username"
            :rules="{ required: true, message: '用户名不能为空', trigger: 'blur' }"
          >
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            :rules="{ required: true, message: '密码不能为空', trigger: 'blur' }"
          >
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
    <div class="overlay"></div>
  </div>
</template>

<script>
import { login } from '@/service/api';
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      showLogin: false
    };
  },
  mounted () {
    this.showLogin = true;
  },
  methods: {
    async submitForm (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          const res = await login({
            username: this.loginForm.username,
            password: this.loginForm.password
          });
          if (res.status == 200) {
							this.$message({
                type: 'success',
                message: '登录成功'
              });
							this.$router.push('manage')
						}else{
							this.$message({
		            type: 'error',
		            message: res.message
		          });
						}
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100
          });
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import '../styles/_mixin.less';

.login-page {
  background-color: #324057;
  width: 100%;
  height: 100%;
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.manage-tip {
  position: absolute;
  width: 100%;
  top: -100%;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}
.form-contianer {
  width: 320px;
  height: 160px;
  padding: 35px;
  .ctt();
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  z-index: 10;
  .submit {
    width: 100%;
    font-size: 16px;
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
}
.form-fade-enter-active, .form-fade-leave-active {
	transition: all 1s;
}
.form-fade-enter, .form-fade-leave-active {
	transform: translate3d(0, -50px, 0);
	opacity: 0;
}
</style>


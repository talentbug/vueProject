export default {
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
        username: [{
            required: true,
            message: "请输入登录名称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 6,
            message: "长度在 3 到 6 个字符",
            trigger: "blur"
          }
        ],
        // 登录密码的校验规则
        password: [{
            required: true,
            message: "请输入登录密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    reset() {
      this.$refs.loginFormRef.resetFields()
    }
  }
}

<template>
    <div id="login">
        <div class="logins">
            <div class="phone">
                <input placeholder="请输入手机号" @blur.prevent="changeCount()" v-model="username">
                <!-- <el-button type="danger" size="small " class="rg">短信验证码</el-button> -->
                <img src="../assets/dagou.png" alt=""  class="ims1" v-show="lg">
                <img src="../assets/cuo.png" alt=""  class="ims2" v-show="ld">
            </div>
            <div class="phone2">
                <input type="password" placeholder="输入密码" @blur.prevent="changeCount2()" v-model="password">
                 <img src="../assets/dagou.png" alt=""  class="ims1" v-show="lg1">
                <img src="../assets/cuo.png" alt=""  class="ims2" v-show="ld1">
            </div>
            <div class="reads">
                <el-checkbox v-model="checked" >我已认真阅读、理解并同意 <span style="color:red">《每日优鲜用户协议》</span></el-checkbox>  
            </div>
            <div class="btns">
                <div class="wd" v-show="gs">登陆</div>
                <div class="wd1" v-show="gd" @click="logins">登陆</div>
            </div>
            <div class="banr">
                为方便您及时查询订单信息，需要验证您的手机号来登录
            </div>
        </div>
        <div class="butn">
            <a href="javascript:" @click="$router.push({ path: '/register' })">去注册</a>
        </div>
    </div>
</template>
<script>
import qs from "qs";
import ElementUI from "element-ui";
export default {
    data() {
      return {
        checked: true,
        username:"",
        password:"",
        lg:false,
        ld:false,
        lg1:false,
        ld1:false,
        gs:true,
        gd:false,
      };
    },
     created() {
        
    },
    updated(){
        if(this.lg&&this.lg1){
            // console.log("可以登录");
            this.gs=false;
            this.gd=true;
        }else{
            // console.log("不可以登录");
            this.gs=true;
            this.gd=false;
        }
    
    },
    methods:{
         
        changeCount:function(){
            var myreg=/^[1][3,5,7,8][0-9]{9}$/;
            if(myreg.test(this.username)){
                // console.log("正确");
                this.ld=false;
                this.lg=true;
            }else{
                // console.log("错误");
                this.ld=true;
                 this.lg=false;
            }
        },
        changeCount2:function(){
            var myregs=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*].{5,12}$/;
            if(myregs.test(this.password)){
                // console.log("正确");
                this.lg1=true;
                this.ld1=false;
            }else{
                // console.log("错误");
                 this.ld1=true;
                 this.lg1=false;
                 alert("请输入6-12位的数字字母密码")
            }
        },
        logins(){
            this.$axios.post(
                "http://106.15.176.14:3000/users/login",
                qs.stringify(
                    {
                        resname:this.username,
                        respwd:this.password,
                    },
                    {
                        headers:{"Content-type":"application/x-www-form-urlencoded"}
                    },
                    {
                        withCredentials:true
                    }
                )
            )
            .then((res)=>{
                console.log(res.data);
                localStorage.setItem("token",res.data.token);
                // console.log(res.data.token);
                if(res.data.status=="success"){
                    this.$router.push({name:'Me'});
                    localStorage.setItem("resname",res.data.resname);
                    
                }else{
                    alert("密码错误或者该手机号码未注册");
                }
                
            })
        }
    }
}
</script>
<style scoped>
    #login {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    .logins{
        padding: 114px 30px 0 30px;
        width: 100%;
        height: 360px;
        box-sizing: border-box;
    }
    .logins .phone{
        width: 100%;
        height: 45px;
        padding: 5px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #adadad
    }
    .logins .phone input{
        height: 34px;
        border: black;
        font-size: 16px;
        outline:none;cursor: pointer;
    }
    .logins .phone  .ims1{
        float:right;
        width: 20px;
        height: 20px;
        margin: 8px 0;
    }
    .logins .phone  .ims2{
        float:right;
        width: 18px;
        height: 18px;
        margin: 9px 0;
    }
    .logins .phone2{
        width: 100%;
        height: 45px;
        padding: 5px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #adadad
    }
    .logins .phone2 input{
        height: 34px;
        border: black;
        font-size: 16px;
        outline:none;cursor: pointer;
    }
    .logins .phone2  .ims1{
        float:right;
        width: 20px;
        height: 20px;
        margin: 8px 0;
    }
    .logins .phone2  .ims2{
        float:right;
        width: 18px;
        height: 18px;
        margin: 9px 0;
    }
    .rg{
        float: right;
    }
    .rg{
        float: right;
    }
    .reads{
        height: 32px;
        width: 100%;
        margin: 35px 0 0;
    }
    .btns{
        height: 42px;
        width: 100%;
    }
    .btns .wd{
        width: 100%;
        height: 40px;
        margin-top: 20px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #ffffff;
        background: lightgray;
        border-radius: 10px;
    }
    .btns .wd1{
        width: 100%;
        margin-top: 20px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #ffffff;
        background: lightskyblue;
        border-radius: 10px;
    }
    .banr{
        height: 34px;
        padding: 15px 0 0 0;
        color: #adadad;
        box-sizing: border-box;
        font-size: 12px;
    }
    .butn{
        width: 100%;
        height: 20px;
        margin-top: 10px;
        text-align: center;
        line-height: 20px;
        font-size: 16px;
    }
</style>
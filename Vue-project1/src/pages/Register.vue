<template>
    <div id="login">
        <div class="logins">
            <div class="phone">
                <input placeholder="请输入手机号" @blur.prevent="res()" v-model="resname">
                <img src="../assets/dagou.png" alt=""  class="ims1" v-show="un">
                <img src="../assets/cuo.png" alt=""  class="ims2" v-show="ud">
                <!-- <el-button type="danger" size="small " class="rg">短信验证码</el-button> -->
            </div>
            <div class="phone">
                <input type="password" placeholder="请输入6-12位包含数字字母的密码" @blur.prevent="res2()" v-model="respwd">
                <img src="../assets/dagou.png" alt=""  class="ims1" v-show="un1">
                <img src="../assets/cuo.png" alt=""  class="ims2" v-show="ud1">
            </div>
            <div class="reads">
                <el-checkbox v-model="checked" >我已认真阅读、理解并同意 <span style="color:red">《每日优鲜用户协议》</span></el-checkbox>  
            </div>
            <div class="btns">
                <div class="wd" v-show="rs">注册</div>
                <div class="wd1" v-show="rd" @click="registe">注册</div>
            </div>
            <div class="banr">
                为方便您及时查询订单信息，需要验证您的手机号来登录
            </div>
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
        un:false,
        ud:false,
        un1:false,
        ud1:false,
        rs:true,
        rd:false,
        resname:"",
        respwd:""
      };
    },
     created() {
        
    },
    updated(){
        if(this.un&&this.un1){
            // console.log("可以登录");
            this.rs=false;
            this.rd=true;
        }else{
            // console.log("不可以登录");
            this.rs=true;
            this.rd=false;
        }
    
    },
    methods:{
        registe(){
             this.$axios.post(
                    "http://106.15.176.14:3000/users/register",
                    qs.stringify(
                        {
                            resname:this.resname,
                            respwd:this.respwd,
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
                    // console.log(res.data)
                    localStorage.setItem("token",res.data.token);
                    alert("注册成功");
                    this.$router.push({ path: '/login' });
                })
        },
        res:function(){
            var myreg=/^[1][3,5,7,8][0-9]{9}$/;
            if(myreg.test(this.resname)){
                // console.log("正确");
                
                this.$axios.post(
                    "http://106.15.176.14:3000/users/findUser",
                    qs.stringify(
                        {
                            resname:this.resname,
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
                    localStorage.setItem("token",res.data.token);
                    // console.log(res)
                    if(res.data.length>0){
                        this.un=false;
                        this.ud=true;
                        alert("已存在此用户");
                       
                    }else{
                        this.un=true;
                        this.ud=false;
                    }
                })
            }else{
                // console.log("错误")
                 this.ud=true;
                 this.un=false;
            }
        },
        res2:function(){
            var myregs=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*].{5,12}$/;
            if(myregs.test(this.respwd)){
                // console.log("正确");
                this.un1=true;
                this.ud1=false;
            }else{
                // console.log("错误");
                 this.ud1=true;
                 this.un1=false;
           
            }
        },
    },
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
        width: 250px;
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
        height: 25px;
        padding: 5px 0 0 0;
        color: #adadad;
        box-sizing: border-box;
        font-size: 12px;
    }
    
</style>
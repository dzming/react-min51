<template>
    <div id="login">
        <div class="logins">
            <div class="phone">
                <input placeholder="请输入手机号" >
                <el-button type="danger" size="small " class="rg">短信验证码</el-button>
            </div>
            <div class="phone">
                <input placeholder="输入验证码" >
            </div>
            <div class="reads">
                <el-checkbox v-model="checked" >我已认真阅读、理解并同意 <span style="color:red">《每日优鲜用户协议》</span></el-checkbox>  
            </div>
            <div class="btns">
                <el-button type="info" disabled class="wd">信息按钮</el-button>
            </div>
            <div class="banr">
                为方便您及时查询订单信息，需要验证您的手机号来登录
            </div>
        </div>
    </div>
</template>
<script>
import ElementUI from "element-ui";
export default {
    
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
        margin-top: 20px;
    }
    .banr{
        height: 34px;
        padding: 15px 0 0 0;
        color: #adadad;
        box-sizing: border-box;
        font-size: 12px;
    }
</style>
<template>
  <div id="me">
    <div class="me">
      <div class="m-tab">
        <el-button plain size="small" @click="$router.push({ path: '/login' })">用户登录</el-button>
        <div class="touxiang" style="display:none">
          <img src="../assets/给心.jpg">
          <span>124543484</span>
        </div>
      </div>
      <ul class="me-u1">
        <li>
          <span>0</span>
          <span>余额</span>
        </li>
        <li>
          <span>0</span>
          <span>红包</span>
        </li>
        <li>
          <span>0</span>
          <span>商品卷</span>
        </li>
        <li>
          <span>积分兑换</span>
        </li>
      </ul>
      <div class="me-vip">
        <span class="lf">会员权益</span>
        <span class="rg">></span>
        <span class="rg">开通会员</span>
        <p>
          成为优享会员，预计1年将为你
          <span class="cr">节省1121.30元</span>
        </p>
      </div>
      <ul class="me-tq">
        <li>
          <span>
            <img src="../assets/vipzx.png" alt>
          </span>
          <p>会员专享价</p>
        </li>
        <li>
          <span>
            <img src="../assets/xiaoshi.png" alt>
          </span>
          <p>1小时送达</p>
        </li>
        <li>
          <span>
            <img src="../assets/kefu.png" alt>
          </span>
          <p>专属客服</p>
        </li>
        <li>
          <span>
            <img src="../assets/qidai.png" alt>
          </span>
          <p>敬请期待</p>
        </li>
      </ul>
      <div class="me-hd">
        <div class="hdx">
          <img src="../assets/caomei.png">
          <img src="../assets/caomei.png">
          <img src="../assets/caomei.png">
        </div>
      </div>
      <div class="me-mine">
        我的订单
        <span class="rg5">></span>
      </div>
      <div class="me-mine">
        我的地址
        <span class="rg5">></span>
      </div>
      <div class="me-mine">
        账号与安全
        <span class="rg5">></span>
      </div>
      <div class="me-mine">
        客服与帮助
        <span class="rg5">></span>
      </div>
      <div class="me-mine">
        意见反馈
        <span class="rg5">></span>
      </div>
      <div class="me-mine">
        关于我们
        <span class="rg5">></span>
      </div>
    </div>
    <div id="footer">
        <ul>
          <li @click="$router.push({ path: '/home' })">
            <img src="../assets/store0.png" alt>
            <span>首页</span>
          </li>
          <li @click="$router.push({ path: '/fund' })">
            <img src="../assets/fund0.png" alt>
            <span>列表</span>
          </li>
          <li @click="$router.push({ path: '/designer' })">
            <img src="../assets/designer0.png" alt>
            <span>发现</span>
          </li>
          <li @click="$router.push({ path: '/cart' })">
            <img src="../assets/service0.png" alt>
            <span>购物车</span>
          </li>
          <li @click="$router.push({ path: '/me' })">
            <img src="../assets/me1.png" alt>
            <span>我的</span>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
import ElementUI from "element-ui";
export default {
  
};
</script>
<style scoped>
#me {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.me {
  flex:1;
  overflow-x: hidden;
  overflow-y: auto;
  /* width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
}
.m-tab {
  height: 162px;
  width: 100%;
  background: url(../assets/mybg.png) no-repeat;
  padding-top: 63px;
  text-align: center;
}
.touxiang {
  float: left;
  width: 100%;
}
.touxiang img {
  float: left;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 50px;
}
.touxiang span {
  float: left;
  margin: 15px 0 0 20px;
}
.me-u1 {
  height: 70px;
  width: 100%;
  padding: 12px 0;
  list-style: none;
}
.me-u1 li {
  float: left;
  width: 25%;
  height: 46px;
  padding: 12px 0;
}
.me-u1 li span {
  float: left;
  width: 100%;
  height: 23px;
  line-height: 23px;
  font-size: 12px;
  text-align: center;
}
.me-vip {
  height: 60px;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.me-vip span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
}
.lf {
  float: left;
  font-size: 20px;
}
.rg {
  float: right;
  font-size: 12px;
  color: #adadad;
  margin: 0 5px;
}
.me-vip p {
  float: left;
  height: 30px;
  width: 100%;
  font-size: 12px;
}
.cr {
  color: red;
}
.me-tq {
  height: 54px;
  width: 100%;
  padding: 15px 15px;
  list-style: none;
}
.me-tq li {
  float: left;
  width: 25%;
  height: 54px;
  text-align: center;
}
.me-tq li span {
  height: 34px;
  width: 100%;
}
.me-tq li span img {
  width: 28px;
  height: 28px;
}
.me-tq li p {
  width: 100%;
  height: 20px;
  font-size: 12px;
}
.me-hd {
  height: 100px;
  width: 100%;
  padding: 10px 10px 0;
  box-sizing: border-box;
  overflow-x: scroll;
  overflow-y: hidden;
}
.me-hd .hdx {
  height: 90px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.me-hd img {
  width: 157px;
  height: 90px;
  padding-right: 10px;
  display: block;
}
.me-mine {
  height: 60px;
  padding: 0 15px;
  line-height: 60px;
  box-sizing: border-box;
  width: 100%;
  font-size: 15px;
}
.rg5 {
  float: right;
  font-size: 15px;
  color: #adadad;
  margin: 0 5px;
}
/* footer */
#footer {
  height: 46px;
  width: 100%;

}
#footer ul {
  display:flex;
}
#footer ul li {
  flex: 1;
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#footer ul li img {
  width: 23px;
}
#footer ul li span {
  height: 10px;
  font-size: 10px
}
</style>
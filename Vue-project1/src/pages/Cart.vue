<template>
  <div id="c_cart">
    <div class="detail-title">
      <div class="title-detail detail-title-active">广州市</div>
    </div>
    <div class="main" style="padding-top:25px;">
      <div class="good_cart" v-for="item in goods" :key="item.name">
        <input type="checkbox" class="gouxuan">
        <span class="img">
          <img width="70" src="../assets/cart1.jpg" alt>
        </span>
        <div class="good_cart_info">
          <p class="cartname">蜀道香麻辣牛肉100g</p>
          <p class="kong"></p>
          <p>
            <span>￥</span>
            <span>12.8</span>
          </p>
          <p class="newprice">
            <span>￥</span>
            <span>8.9</span>
          </p>
          <div class="cart_num">
            <span @click="reduce(item.id,item.num)">-</span>
            <input type="text" v-model="num">
            <span @click="add(item.id,item.num)">+</span>
          </div>
        </div>
      </div>

      <div class="good_cart">
        <input type="checkbox" class="gouxuan">
        <span class="img">
          <img width="70" src="../assets/cart1.jpg" alt>
        </span>
        <div class="good_cart_info">
          <p class="cartname">蜀道香麻辣牛肉100g</p>
          <p class="kong"></p>
          <p>
            <span>￥</span>
            <span>12.8</span>
          </p>
          <p class="newprice">
            <span>￥</span>
            <span>8.9</span>
          </p>
          <div class="cart_num">
            <span @click="reduce()">-</span>
            <input type="text" v-model="num">
            <span @click="add()">+</span>
          </div>
        </div>
      </div>
      <div class="details">
        <ul>
          <li class="Dallprice">
            <p>
              商品总价
              <span>￥30.6</span>
            </p>
          </li>
          <li class="gift">
            <p>商品卷</p>
          </li>
          <li class="gift">
            <p>红包</p>
          </li>
          <li class="gift">
            <p>
              商品实付
              <span>￥34.5</span>
            </p>
          </li>
          <li>
            <p>
              配送费
              <span>￥10</span>
            </p>
          </li>
          <li class="allprice">
            <p >
              合计
              <span>￥44.5</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="showgood">
        <p>推荐商品</p>
        <div class="showimg">
          <img src="../assets/showgood.png" alt="">
        </div>
      </div>
    </div>
    <div class="cfooter">
      <div class="C-footer-content" >
        <div class="C-footer-all">
          <input type="checkbox"><span>全选</span>  
        </div>

        <div class="C-footer-price">
          <p class="sprice">
            <span>合计</span>
            <span style="color:#ff4891;font-size:13px;">￥12</span>
          </p>

          <p class="dyunfei">
            <span>配送费</span>
            <span>￥10</span>
          </p>
        </div>
      </div>
      <div class="addcart" @click="$router.push({  })">
        <span>去结算</span>
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
          <img src="../assets/service1.png" alt>
          <span>购物车</span>
        </li>
        <li @click="$router.push({ path: '/me' })">
          <img src="../assets/me0.png" alt>
          <span>我的</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      checkAllGroup: [],
      goods: "",
      num: "1"
    };
  },
  methods: {
    reduce() {
      if (this.num > 1) {
        this.num--;
      } else if (this.num < 1) {
        this.num = 1;
        //删除当物品少于一件时 变成删除该商品
      }
    },
    add() {
      this.num++;
    },
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = ["香蕉", "苹果", "西瓜"];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  },
  created() {
    this.handleCheckAll();
  }
};
</script>
<style scoped>
@import "../assets/css/Cart.css";
</style>

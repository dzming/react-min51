<template>
  <div class="detail">
    <div class="detail-title">
      <span class="z_left"></span>
      <div class="title-list">
        <div class="title-detail detail-title-active">商品详情</div>
      </div>
      <span class="iconfont iconbianji1"></span>
    </div>
    <div class="main">
      <!-- 轮播图 -->
      <el-carousel
        height="260px"
        indicator-position="none"
        class="scoll_1"
        :interval="5000"
        arrow="never"
      >
        <el-carousel-item v-for="(item,idx) in images" :key="idx">
          <h3>
            <img :src="item">
          </h3>
        </el-carousel-item>
        <!-- <span  class="g_num">{{idx+1}}/4</span> -->
      </el-carousel>

      <!-- 商品详情 -->

      <div class="product-describe">
        <div class="product-describe-title">
          <span class="subtitle-text">{{goods.name}}</span>
        </div>
        <div class="product-item-title product-detail-name">
          <p class="sub-title padding">{{goods.subtitle}}</p>
        </div>
        <div class="toname">
          <div class="left_price">
            <div class="up_price">
              <span>￥</span>
              <span>{{goods.lotlprice}}</span>
            </div>
            <div class="down_price">
              <span>￥</span>
              <span>{{goods.lprice}}</span>
            </div>
          </div>
          <div class="right_num">
            <span class="sales-volume">已售5640份</span>
          </div>
        </div>
        <div class="product-attr-container product-attrs">
          <div class="image-text-container product-attr">
            <span class="promotion-img"></span>
            <div class="image-text">
              产地
              <span>中国</span>
            </div>
            <!---->
          </div>
          <div class="image-text-container product-attr">
            <span class="promotion-img"></span>
            <!---->
            <div class="image-text">次日达</div>
          </div>
          <div class="promotion-attr product-attr">
            <span class="promotion-img"></span>
            <span class="promotion-text">实付满69包邮</span>
          </div>
        </div>
      </div>
      <!-- 优惠 -->
      <div class="youhui">
        <div class="myouhui">
          <div class="myouhui_t">
            <p>优惠</p>
            <span>详情</span>
          </div>
          <div class="myouhui_d">
            <span>满69减10,可与红包和商品券叠加使用</span>
          </div>
        </div>
      </div>
      <div class="jietu">
        <img src="../assets/detail.png" alt>
      </div>

      <div class="recommend-list">
        <div class="product-title">推荐商品</div>
        <ul class="list_goods">
          <li>
            <img src="../assets/g0.png" alt>
          </li>
          <li>
            <img src="../assets/g1.png" alt>
          </li>
          <li>
            <img src="../assets/g2.png" alt>
          </li>
        </ul>
      </div>
      <div class="graphic-details-container">
        <div class="graphic-list-container">
          <div class="title-list-container">
            <div class="image-text">商品详情</div>
            <ul class="list-container">
              <li class="list-item list-point">
                <p class="list-item-text text-color">规格: 1袋</p>
              </li>
              <li class="list-item list-point">
                <p class="list-item-text text-color">重量: 100g</p>
              </li>
              <li class="list-item list-point">
                <p class="list-item-text text-color">包装: 袋装</p>
              </li>
              <li class="list-item list-point">
                <p class="list-item-text text-color">保质期: 365天</p>
              </li>
              <li class="list-item list-point">
                <p class="list-item-text text-color">贮存方法: 常温</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="instruction-list-container">
          <div class="image-pre-container instruction-item">
            <img :src="goods.image" class="image-pre-img">
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/79ac652e14204963b8eff28e2c56677e.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/a16349aed9ab44868ef1a3797e64bd37.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/a30176f5e25946c59f1b4fd32f17903c.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/2bc5e361f1a447e4a6cc80824535a223.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/c9f655b7381044f1ae2a763a55cee65a.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/cef95030f13c41d1866d721e614fcd08.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/5ab77e15fde54f2ab80bc27aef271a0a.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/3fad4e1200d0430d8c4f6f7cf7a1fc0d.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/5c0b2430555a4e9abef3ccf9b8ccec87.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/a6775d46ecfe4c07adda336955398cf3.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/39b1a83a8a8b485ab05902cb084e29c4.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/c828ab2c53934e5ea5717acc3b813c48.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/d4b5710c2745442b9d2a2c6e28991e6a.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/57a901b6843d427da3af4a7f522cffcb.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/23f44dbe92de4ba8a8220a9dc0606d4d.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/c679e769309b4271a9f3916adb5c3e64.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
          <div class="image-pre-container instruction-item">
            <img
              src="https://image.missfresh.cn/50a63ec5cadf4d938bf915f04be46d08.jpg"
              class="image-pre-img"
            >
            <!---->
            <!---->
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="tocart" @click="$router.push({ path: '/cart' })">
        <span id="gwc" class="icon iconfont c_gwc">&#xe635;</span>
      </div>
      <div class="addcart" @click="getcart()">
        <span>加入购物车</span>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      goods: [],
      images: [],
      leg: "0",
      uid: "",
      timer: "null"
    };
  },
  methods: {
    // add() {
    //   this.num++;
    // },
    //获取goods表里的商品数据
    getgoods() {
      // let uid = "3"; //模拟列表页传过来的商品假id
      this.uid = this.$route.query.uid;
      let uid =this.uid;
      this.$axios
        .get(`http://106.15.176.14:3000/cart/getgoods?uid=${uid}`)
        .then(res => {
          this.goods = res.data[0];
          this.images = res.data[0].images;
          this.uid = this.goods.uid;
          // console.log(this.goods.uid);
        });
    },
    //获取cart表里的商品数据

    getcart() {
      let timer = this.timer;
      clearTimeout(timer);

      let uid =this.uid; //模拟列表页传过来的商品假id
      console.log(uid);
      setTimeout(timer => {
        console.log(uid);
        //触发请求
        this.$axios
          .get(`http://106.15.176.14:3000/cart?uid=${uid}`)
          .then(res => {
            let leg = res.data.length;
            let goodsnum = 0;
            if (leg > 0) {
              goodsnum = parseInt(res.data[0].num);
            } else {
              goodsnum = 1;
              console.log(goodsnum);
            }
            this.addcart(leg, goodsnum);
          });
      }, 1000);
    },

    addcart(leg, goodsnum) {
      this.popupVisible = false;
      let image = this.goods.image;
      let subtitle = this.goods.subtitle; //商品名字
      let lotlprice = this.goods.lotlprice;
      let lprice = this.goods.lprice;
      let name = this.goods.name;
      // console.log(leg);
      if (leg > 0) {
        // console.log(this.goods.uid);
        this.$axios
          .post(
            "http://106.15.176.14:3000/cart/updata",
            qs.stringify(
              {
                uid: this.goods.uid,
                num: goodsnum + 1
              },
              {
                headers: { "Content-type": "application/x-www-form-urlencoded" }
              },
              {
                withCredentials: true
              }
            )
          )
          .then(res => {
            alert("加入成功");
          });
      } else if (leg <= 0) {
        // console.log(goodsnum, image, subtitle, this.goods.uid);
        this.$axios
          .post(
            "http://106.15.176.14:3000/cart/insert",
            qs.stringify(
              {
                uid: this.goods.uid,
                num: goodsnum,
                image: image,
                subtitle: subtitle,
                lotlprice: lotlprice,
                lprice: lprice,
                name: name
              },
              {
                headers: { "Content-type": "application/x-www-form-urlencoded" }
              },
              {
                withCredentials: true
              }
            )
          )
          .then(res => {
            alert("加入成功");
          });
      }
    }
  },
  created() {
    this.getgoods();
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.jietu img {
  width: 100%;
}
.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.detail-title {
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.34375rem;
  color: #ff4891;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid #eee;
  font-size: 1rem;
}
.title-detail {
  line-height: 43px;
  height: 43px;
  border-bottom: 2px solid #ff4891;
}
.detail-title .z_left {
  padding-left: 10px;
}
.detail-title .iconbianji1 {
  padding-right: 5px;
  font-size: 22px;
  color: #000;
}
.el-carousel {
  background: #fff;
}
/* main */
.main {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.main .lbt {
  width: 100%;
  height: 281px;
}
.product-describe {
  width: 100%;
  padding-left: 0.9375rem;
  padding-top: 0.875rem;
  padding-right: 0.9375rem;
  box-sizing: border-box;
  background: #fff;
}
.product-detail-name {
  padding-bottom: 17px;
  padding-top: 0.375rem;
}
.product-describe .product-describe-title .subtitle-text {
  display: inline-block;
  vertical-align: baseline;
  font-size: 1.125rem;
  color: #474245;
  font-weight: 700;
}
.left_price {
  float: left;
}
.right_num {
  color: #969696;
  font-size: 0.75rem;
  float: right;
  margin-top: 16px;
  margin-right: 12px;
}
.up_price {
  font-size: 12px;
  color: #ff4891;
}
.up_price span {
  font-weight: 800;
}
.down_price {
  font-size: 14px;
}
.toname {
  width: 100%;
  height: 38px;
}

.product-describe .product-attrs {
  margin-top: 0.6875rem;
  padding: 0.75rem 0;
}
.product-attr-container {
  border-top: 0.5px solid #f5f5f5;
  overflow: hidden;
}
.product-attr-container .product-attr {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1.25rem;
  color: #262626;
  font-size: 0.75rem;
}
.image-text-container {
  line-height: 1;
  white-space: nowrap;
}
.product-attr-container .promotion-attr {
  line-height: 1;
}

/* 优惠 */
.youhui {
  height: 99px;
  width: 100%;
  padding-top: 0.625rem;
  background: #fff;
}
.myouhui {
  padding: 20px 15px 15px;
}
.myouhui_t {
  width: 100%;
  height: 28px;
}
.myouhui_t p {
  float: left;
  font-size: 20px;
  color: #474245;
}
.myouhui_t span {
  float: right;
  font-size: 12px;
  color: #c6c6c6;
}
.myouhui_d {
  font-size: 0.75rem;
  color: #474245;
  margin-left: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product-title {
  margin-left: 0.9375rem;
  line-height: 3.375rem;
  font-size: 1.25rem;
  color: #474245;
}
.recommend-list {
  background: #f8f8f8;
  padding-left: 0.9375rem;
  line-height: 3.375rem;
  font-size: 1.25rem;
  color: #474245;
}
.list_goods {
  display: flex;
  overflow-x: scroll;
}
.list_goods li {
  list-style: none;
}
.graphic-details-container {
  background: #fff;
  margin: 0.625rem 0.625rem 0;
  padding: 0.375rem;
}

.product-detail .recommend-list {
  background-color: #f8f8f8;
  padding-bottom: 1.25rem;
}
.title-list-container .image-text {
  padding-left: 0.1875rem;
  text-align: left;
  color: #474245;
  font-size: 1.25rem;
}
.title-list-container .list-container {
  list-style: none;
}
.graphic-details-container .list-container {
  clear: both;
  padding: 0.625rem 0.1875rem 0.625rem;
}
.title-list-container .list-container {
  list-style: none;
}
.title-list-container .list-container .list-item {
  position: relative;
}
.graphic-details-container .list-container .list-item {
  color: #262626;
  line-height: 2.5rem;
  font-size: 0.875rem;
  position: relative;
  box-sizing: border-box;
}
.image-pre-container .image-pre-img {
  display: block;
  width: 100%;
}
/* footer */
#footer {
  height: 2.875rem;
  width: 100%;
  display: flex;
  background: #fff;
}

.footer {
  height: 2.875rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
}
.footer .tocart {
  flex: 1;
}
.footer div {
  flex: 5;
  height: 2.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.g_num {
  position: fixed;
  right: 0;
  bottom: 0;
}
.bb {
  width: 100%;
  height: 100px;
}
.footer #gwc {
  font-size: 24px;
}
.addcart {
  background: #ff4891;
  color: #fff;
}
/* 轮播图 */
.scoll_1 img {
  width: 375px;
  height: 250px;
}
</style>

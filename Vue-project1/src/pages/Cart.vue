<template>
    <div id="c_cart">
      <div class="detail-title">
        <div class="title-detail detail-title-active">广州市</div>
      </div>
      <div class="main" style="padding-top:25px;">
        <div class="good_cart" v-for="(e,index) in we" :key="e.uid">
          <input type="checkbox" class="gouxuan" v-model="e.checked" @click.stop="wq(index,e.uid)">
          <span class="img">
            <img width="70" :src="e.image">
            <!-- <img width="70" src="../assets/cart1.jpg" alt> -->
          </span>
          <div class="good_cart_info">
            <p class="cartname">{{e.name}}</p>
            <p class="kong"></p>
            <p>
              <span>￥</span>
              <span v-text="e.lotlprice"></span>
            </p>
            <p class="newprice">
              <span>￥</span>
              <span v-text="e.lprice"></span>
            </p>
  
            <div class="cart_num">
              <span v-on:click="subtract(index,e.uid)">-</span>
              <input type="text" value="1" size="1" id="ef" v-model="e.num">
              <span @click="add(index,e.uid)">+</span>
            </div>
          </div>
        </div>
  
        <div class="details">
          <ul>
            <li class="Dallprice">
              <p>
                商品总价
                <span v-text="'￥'+totall"></span>
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
                <span v-text="'￥'+ totall"></span>
              </p>
            </li>
            
            <li class="allprice">
              <p>
                合计
                <span v-text="'￥'+totall"></span>
              </p>
            </li>
          </ul>
        </div>
        <div class="showgood">
          <p>推荐商品</p>
          <div class="showimg">
            <img src="../assets/showgood.png" alt>
          </div>
        </div>
      </div>
      <div class="cfooter">
        <div class="C-footer-content">
          <div class="C-footer-all">
            <!-- <input type="checkbox"><span>全选</span> -->
            <input type="checkbox" id="sure" v-model="fv" @click="sd">
            <label for="checkbox">全选</label>
          </div>
  
          <div class="C-footer-price">
            <p class="sprice">
              <span>合计</span>
              <span style="color:#ff4891;font-size:13px;">￥{{totall}}</span>
            </p>
  
            <p class="dyunfei">
              <span>配送费</span>
              <span>￥10</span>
            </p>
          </div>
        </div>
        <div class="addcart" @click="$router.push({  })">
          <span @click="Deal">去结算</span>
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
  import qs from "qs";
  export default {
    data() {
      return {
        fv: false, //全选判断开关 真或者假true或者false
        num: "1",
        uid: "",
        // et:"df",
        // bb:"",
        ws: "",
        // wert:0,
        er: "",
        but: false,
        we: [],
        totall:'0'
      };
    },
    methods: {
      getcart() {
        this.$axios.get(`http://106.15.176.14:3000/cart`).then(res => {
          this.we = res.data;
  
          // this.images = res.data[0].images;
          // console.log(this.we);
        });
      },
      
      add(e, uid) {
        // console.log(e,uid)
        var num = ++this.we[e].num;
        this.$axios({
          method: "post",
          url: "http://106.15.176.14:3000/cart/updata",
          data: {
            uid: uid,
            num: num
          },
          transformRequest: [
            function(data) {
              // 对 data 进行任意转换处理
              return qs.stringify(data);
            }
          ]
        });
        this.wry();
      },
      subtract(e, id) {
        // 删除
        if (this.we[e].num <= 1) {
          let s = confirm("你确定删除该商品么");
          if (s) {
            let arr = this.we.filter(item => {
              return item.uid != id;
            });
            this.we = arr;
            this.$axios({
              method: "delete",
              url: "http://106.15.176.14:3000/cart",
              params: {
                uid: id
              },
              transformRequest: [
                function(data) {
                  // 对 data 进行任意转换处理
                  return qs.stringify(data);
                }
              ]
            }).then(res => {
              // console.log(res.data)
              alert(res.data);
            });
          }
        } else {
          // 减
          var num = (this.we[e].num -= 1);
          this.$axios({
            method: "post",
            url: "http://106.15.176.14:3000/cart/updata",
            data: {
              uid: id,
              num: num
            },
            transformRequest: [
              function(data) {
                // 对 data 进行任意转换处理
                return qs.stringify(data);
              }
            ]
          });
        }
        this.wry();
      },
     
  
      sd() {
        // console.log(this.we)
        if (this.fv) {
          for (let i = 0; i < this.we.length; i++) {
            this.we[i].checked = false;
          }
        } else {
          for (let i = 0; i < this.we.length; i++) {
            this.we[i].checked = true;
            this.fv = true;
          }
        }
        this.wry();
      },
       wq(e) {
        //点击方框
        
        let arrs = [];
        this.we[e].checked = !this.we[e].checked;
        
        for (var i = 0; i < this.we.length; i++) {
          arrs.push(this.we[i].checked);
        }
        
        if (arrs.indexOf(false) == -1) {
          this.fv = true;
          
        } else {
          this.fv = false;
          
        }
        this.wry()
      },
      wer(index) {
        return parseInt(this.we[index].lprice * Number(this.we[index].num));
      },
  
      //商品总价
     
      wry() {
        this.totall = 0;
        var peisong = 10;
        // console.log(totall);
         this.we.forEach((item) => {//遍历商品，如果选中就进行加个计算，然后累加
                  if (item.checked){
                      this.totall += item.num*item.lprice;//累加的
                  }
              });
        if (this.totall == 0) {
          return this.totall.toFixed(2);
        } else {
          return (this.totall + peisong).toFixed(2);
        }
      },
      Deal() {
        alert("结算成功");
      }
    },
    computed: {
      length() {
        return this.we.length;
      }
    },
    created() {
      this.getcart();
      
    }
  };
  </script>
  <style scoped>
  @import "../assets/css/Cart.css";
  </style>
  
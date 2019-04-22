<template>
    <div id="hot">
        <div class="h-tab">
            <div class="h-t1">
                <img src="../assets/youxian.png" alt="">
                <span>优鲜严选</span>
            </div>
            <div class="h-t1">
                <img src="../assets/anxin.png" alt="">
                <span>安心检测</span>
            </div>
            <div class="h-t1">
                <img src="../assets/baozhang.png" alt="">
                <span>赔付保障</span>
            </div>
        </div>
        <div class="h-nav">
            <div class="n1">
                <img src="../assets/new.png" alt="">
                <span>本周新品</span>
            </div>
            <div class="n1">
                <img src="../assets/youli.png" alt="">
                <span>邀请有礼</span>
            </div>
            <div class="n1">
                <img src="../assets/qiandao.png" alt="">
                <span>每日签到</span>
            </div>
            <div class="n1">
                <img src="../assets/coudao.png" alt="">
                <span>凑单专区</span>
            </div>
            <div class="n1">
                <img src="../assets/huiyuan.png" alt="">
                <span>开通会员</span>
            </div>
        </div>
        <div class="h-banner">
            <img src="../assets/xinren.png" alt="">
            <img src="../assets/meiri.png" alt="" style="margin-left:5px">
        </div>
        <div class="h-bg">
            <img src="../assets/shoudan.jpg" alt="" @click="ddd">
        </div>
        <div class="h-sp " v-for="(gocart,idx) in gocart" :key="idx" >
            <div class="spn">
                <img :src="gocart.image" alt="" class="apimg" @click="caxq(gocart.uid)">
                <p class="sp1" v-text="gocart.name">
                    1个新疆阿克苏苹果大果190g起
                </p>
                <p class="sp2" v-text="gocart.subtitle">蜜汁甜 再一次回味初恋</p>
                <p class="sp3">新人专享</p>
                <span class="sn1">￥</span>
                <span class="sn2" v-text="gocart.lprice">1</span>
                <span class="sn3">￥<span class="sn4" v-text="gocart.lotlprice">69</span></span>
                <img src="../assets/sy-cart.png" alt="" class="apimg2" v-show="goods[idx]" @click="goodsimg(idx) ">
                <!-- <el-input-number size="mini" v-model="num" :min="0" :max="10" style="float:right" v-show="numbers" @click="numberimg"></el-input-number> -->
                <div class="car" v-show="numbers[idx]" >
                    <button v-on:click="subtract(idx)" class="btn1">-</button>
                    <input type="text" value="1" size="1" v-model="num" class="ipt">
                    <button v-on:click="add" class="btn2">+</button>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
import ElementUI from "element-ui";
export default {
    
  data() {
      return {
        goods: true,
        numbers:false,
        num: 1,
        gocart:[],
      }
    },
    mounted(){
        
    },
    created(){
        this.$axios.post(
            "http://106.15.176.14:3000/home/goods",
        )
        .then((res)=>{
            this.gocart = res.data;
            console.log(this.gocart);
        })
    },
    methods:{
        add(){
          this.num++;
        },
        ddd(){
           
        },
        caxq(uid){
            this.$router.push({"name":'Detail',query:{uid}});
        },
        subtract(idx){
            console.log(idx);
          if (this.num<=1){
            this.goods[idx] = true;
            this.numbers[idx] = false; 
          }else {
            this.num-=1;
          }
        },
        goodsimg(idx){
            
            this.goods[idx]=false;
            this.numbers[idx]=true;
        },
    }
    
};
</script>

<style scoped>
#hot {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}
.h-tab{
    height: 50px;
    font-size: 12px;
    width: 100%;
}
.h-tab .h-t1{
    /* flex: 1; */
    float: left;
    height: 50px;
    width: 33.3%;
    text-align: center;
    line-height: 50px;
}
.h-tab .h-t1 img{
    float: left;
    height: 16px;
    width: 16px;
    margin: 17px 0 17px 22px
}
.h-tab .h-t1 span{
    float: left;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    margin: 17px 0;
}
.h-nav{
    height: 110px;
    width: 100%;
    box-sizing: border-box;
    padding-top: 24px;
    font-size: 12px;
}
.h-nav .n1{
    float: left;
    width: 20%;
    height: 100%;
    text-align: center;   
}
.h-nav .n1 img{
    width: 40px;
    height: 40px;
    margin: 2px 20%;
}
.h-nav .n1 span{
    width: 100%;
}
.h-banner{
    height: 100px;
    padding: 0 15px;
}
.h-banner img{
    width: 49%;
    height: 100px;
}
.h-bg{
    flex: 1;
    width: 100%;
    height: 71px;
    padding-top: 15px;
}
.h-bg img{
    width: 100%;
    height: 100%;
}
.h-sp{
    width: 100%;
    height: 177px;
    padding: 0 14px;
    box-sizing: border-box;
}
.h-sp .spn{
    height: 177px;
    width: 100%;
    padding: 22px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #f5f5f5;
}
.h-sp .spn .apimg{
    float: left;
    height: 120px;
    width: 120px;
    margin: 0 15px 0 5px;
}
.h-sp .spn .sp1{
    float: left;
    width: 200px;
    height: 20px;
    font-size: 16px;
    margin-top: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #474245;
}
.h-sp .spn .sp2{
    float: left;
    width: 200px;
    height: 20px;
    font-size: 14px;
    color: #969696;
}
.h-sp .spn .sp3{
    float: left;
    width: 50px;
    height: 18px;
    line-height: 18px;
    margin:0 150px 26px 0;
    border: 1px solid #f59fc1;
    /* height: 14px; */
    font-size: 12px;
    color: #f59fc1;
    /* line-height: 16px; */
}
/* .h-sp .spn .sp3 span{
    border: 1px solid #f59fc1;
    height: 14px;
    font-size: 12px;
    color: #f59fc1;
    line-height: 16px;
} */
.h-sp .spn  .sn1{
    float: left;
    height: 14px;
    font-size: 12px;
    color: #ff4891;
    margin-top: 10px; 
}
.h-sp .spn .sn2{
    float: left;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #ff4891;
    margin-top: 9px;
}
.h-sp .spn .sn3{
    float: left;
    height: 14px;
    font-size: 12px;
    margin-top: 10px;
    color: #969696;
    text-decoration: line-through;
}
.h-sp .spn .apimg2{
    float: right;
    height: 45px;
    width: 45px;
    /* margin-left: 105px; */
}
.h-sp .spn .car{
    float: right;
    width: 120px;
    height: 28px;
    list-style: none;
    line-height: 28px;
    margin-top: 5px;
}
.h-sp .spn .car .btn1{
    /* float: left; */
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    border: 1px solid #ff4891;   
    outline: none;
    background: #ffffff;
    color: #ff4891;
}
.h-sp .spn .car .ipt{
    width: 40px;
    height: 20px;
    font-size: 16px;
    text-align: center;
    border: none;
}
.h-sp .spn .car .btn2{
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    border: 1px solid #ff4891;   
    outline: none;
    background: #ffffff;
    color: #ff4891;
}
</style>
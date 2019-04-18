<template>
    <div id="vip">
        <div class="h-tb">
            <img src="../assets/weidao.jpg" alt="">
        </div>
        <div class="h-bg">
            <img src="../assets/meiri.jpg" alt="">
        </div>
        <div class="h-sp">
            <div class="spn">
                <img src="../assets/ap.jpeg" alt="" class="apimg">
                <p class="sp1">
                    1个新疆阿克苏苹果大果190g起
                </p>
                <p class="sp2">蜜汁甜 再一次回味初恋</p>
                <p class="sp3"><span>新人专享</span></p>
                <span class="sn2"><span class="sn1">￥</span>1</span>
                <span class="sn3">￥<span class="sn4">69</span></span>
                <img src="../assets/sy-cart.png" alt="" class="apimg2" v-show="goods" @click="goodsimg">
                <!-- <el-input-number size="mini" v-model="num" :min="0" :max="10" style="float:right" v-show="numbers" @click="numberimg"></el-input-number> -->
                <div class="car" v-show="numbers">
                    <button v-on:click="subtract" class="btn1">-</button>
                    <input type="text" value="1" size="1" v-model="num" class="ipt">
                    <button v-on:click="add" class="btn2">+</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
      return {
        goods: true,
        numbers:false,
        num: 1,
      }
    },
    mounted(){
        
    },
    methods:{
        add(){
          this.num++;
        },
        subtract(){
          if (this.num<=1){
            this.goods = true;
            this.numbers = false; 
          }else {
            this.num-=1;
          }
        },
        goodsimg(){
            this.goods=false;
            this.numbers=true;
        },
    }
};
</script>
<style scoped>
#vip {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}
.h-tb{
    flex: 1;
    width: 100%;
    height: 130px;
}
.h-tb img{
    width: 100%;
    height: 100%;
}
.h-bg{
    flex: 1;
    width: 100%;
    height: 100px;
    /* padding-top: 15px; */
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
    width: 200px;
    height: 20px;
    line-height: 20px;
    margin:0 5px 26px 0;
}
.h-sp .spn .sp3 span{
    border: 1px solid #f59fc1;
    height: 14px;
    font-size: 12px;
    color: #f59fc1;
    line-height: 16px;
}
.h-sp .spn .sn2 .sn1{
    float: left;
    height: 14px;
    font-size: 12px;
    /* color: #ff4891;
    margin-top: 10px; */
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
    float: left;
    height: 45px;
    width: 45px;
    margin-left: 110px;
}
.h-sp .spn .car{
    float: right;
    width: 120px;
    height: 28px;
    list-style: none;
    line-height: 28px;
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
    font-size: 20px;
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
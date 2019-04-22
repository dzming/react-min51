<template>
    <div id="vip">
        <div class="h-bg">
            <img src="../assets/viptj.png" alt="">
        </div>
        <div class="h-sp" v-for="vip in vips" :key="vip.id">
            <div class="spn">
                <img :src="vip.image" alt="" class="apimg">
                <p class="sp1" v-text="vip.name">
                    1个新疆阿克苏苹果大果190g起
                </p>
                <p class="sp2" v-text="vip.subtitle">蜜汁甜 再一次回味初恋</p>
                <p class="sp3"><span>新人专享</span></p>
                <span class="sn1">￥</span>
                <span class="sn2" v-text="vip.lprice">1</span>
                <span class="sn3">￥<span class="sn4" v-text="vip.lotlprice">69</span></span>
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
        vips:[]
      }
    },
    mounted(){
        
    },
    created(){
         this.$axios.post(
            "http://106.15.176.14:3000/home/goods",
        )
        .then((res)=>{
            this.vips = res.data;
    
            // console.log(this.vips);
        })
        
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
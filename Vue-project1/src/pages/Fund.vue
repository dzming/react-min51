<template>
    <div id="fund">
        <div id="fund-header">
            <div class="fheader-left">
                <div class="arrivecon">
                    <img class="arrivepic" src="../assets/2hoursarrive.png" alt="">
                </div>
                <div class="locationcon">
                    <span class="building-name">广州市天河区人民政府</span>
                </div>
            </div>
            <div class="fheader-right">
                <div>
                    <div class="search-nav">
                        <img src="../assets/fund_search.png" alt="">
                        <span>搜索</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="fund-body">
            <div class="category-con">
                <div class="cg-left">
                    <div @click="chosegoodlist(index)" :class="{'active':index==activeIndex}" v-for="(category,index) in categorylist" :key="index" v-text="category" class="cg-item"></div>
                </div>
                <div class="cg-right">
                    <div style="height:100%;">
                        <div class="first-page">
                            <div class="fold-cg-con">
                                <div class="cglist-con">
                                    <div @click="chosetablist(index)" :class="{'item-span-active':index==tabIndex}" v-for="(tab,index) in tabslist" :key="index" v-text="tab" class="item-span"></div>
                                    <!-- <div class="item-span">本周上新</div>
                                    <div class="item-span">本周上新</div>
                                    <div class="item-span">本周上新</div>
                                    <div class="item-span">本周上新</div>
                                    <div class="item-span">本周上新</div>
                                    <div class="item-span">本周上新</div> -->
                                </div>
                                <div class="cglist-img">
                                    <img src="../assets/gray-bg.png" alt="">
                                    <div>
                                        <img class="arrowdown2" src="../assets/fund-arrow-down2.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="good-con">
                                <div class="product-item">
                                    <div class="cg-title">
                                        今日买手推荐
                                    </div>
                                </div>
                                <div class="product-item">



                                    <div v-for="(goods,index) in goodlist" :key="index" class="product-item-box" :data-id="goods.uid">
                                        <div class="line">
                                            <div class="line-split"></div>
                                        </div>
                                        <div class="good-item">
                                            <div @click="toDetail(goods.uid)" class="good-img-box">
                                                <img class="good-img" :src="goods.image" alt="">
                                                <div class="saletag">限时秒杀</div>
                                            </div>
                                            <div class="good-item-right">
                                                <p @click="toDetail(goods.uid)" class="good-title" v-text="goods.name"></p>
                                                <p @click="toDetail(goods.uid)" class="good-show" v-text="goods.subtitle"></p>
                                                <div @click="toDetail(goods.uid)" class="good-bottom">
                                                    <div class="good-price">
                                                        <span class="sub-price" v-text="`¥${goods.lprice}`">
                                                        </span>
                                                    </div>
                                                    <div class="good-price">
                                                        <span class="before-price" v-text="`¥${goods.lotlprice}`"></span>
                                                    </div>
                                                </div>
                                                <div class="good-ctrl">
                                                    <div v-if="goods.num!=0">
                                                        <img @click="goodcut(goods.uid)" class="goodcut" src="../assets/goodcut.png" alt="">
                                                        <span class="goodnum" v-text="goods.num"></span>
                                                        <img @click="goodadd(goods.uid)" class="goodadd" src="../assets/goodadd.png" alt="">
                                                    </div>
                                                    <img @click="goodadd(goods.uid)" src="../assets/fund-goodcar.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
 
                            </div>
                        </div>
                        <div class="three-page" style="display:none;">
                            <div class="fold-cg-con">
                                <div class="span-box">
                                    <div class="span-item">
                                        本周上新
                                    </div>
                                    <div class="span-item">
                                        本周上新
                                    </div>
                                    <div class="span-item">
                                        本周上新
                                    </div>
                                     <div class="span-item">
                                        本周上新
                                    </div>
                                    <div class="span-item">
                                        本周上新
                                    </div>
                                    <div class="span-item">
                                        本周上新
                                    </div>
                                    <div class="span-item">
                                        本周上新
                                    </div>
                                </div>
                                <div class="img-box">
                                    <div>
                                        <img class="arrowdown2" src="../assets/fund-arrow-down2.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                    <div style="height:100%;display:none;"></div>
                </div>
            </div>
        </div>
    
        <div id="footer">
            <ul>
                <li @click="$router.push({ path: '/home' })">
                    <img src="../assets/store0.png" alt>
                    <span>首页</span>
                </li>
                <li @click="$router.push({ path: '/fund' })">
                    <img src="../assets/fund1.png" alt>
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
                    <img src="../assets/me0.png" alt>
                    <span>我的</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// import qs from "qs";
// import request from '../../../vue/day4/vue-cli/my-project/src/request';
export default {
    data(){
        return{
            //商品列表
            categorylist:['热卖','新鲜水果','时令蔬菜','精品肉蛋','海鲜水产','网红零食','酒水饮料','烘焙糕点','方便速食','卤味熟食','粮油调味','美妆百货','囤货专区'],
            tabslist:['本周上新','本周上新','本周上新','本周上新','本周上新','本周上新','本周上新'],
            activeIndex:0,
            tabIndex:0,
            goodlist:[],
            typeslist:['','fruit','vegetables','meat','seafood','snacks','beverage','bread','convenient','flavor','grain','store','hoard']
        }
    },
  methods: {
      //点击时 切换高亮，请求新数据
      chosegoodlist(index){
          //改变高亮
          this.activeIndex=index;
          //重新渲染数据
          if(index==0){
              this.$axios({
              method:"post",
              url:"http://106.15.176.14:3000/home/goods",
              params:{}
          }).then(res=>{
              this.goodlist=res.data;
            //   console.log(this.goodlist);
          });
         }else{
             let types=this.typeslist[index];
             this.$axios({
              method:"post",
              url:"http://106.15.176.14:3000/home/lookup",
              params:{
                  'types':types
              }
          }).then(res=>{
              this.goodlist=res.data;

            //   console.log(this.goodlist);
          });
         }  
      },chosetablist(index){
          this.tabIndex=index;
      },
      goodcut(uid){
          
      },
      goodadd(uid){

      },
      toDetail(uid){
          this.$router.push({"name":'Detail',query:{uid}});
        //   console.log(uid);
      }

  },
  created() {
      
      this.$axios({
              method:"post",
              url:"http://106.15.176.14:3000/home/goods",
              params:{}
          }).then(res=>{
              this.goodlist=res.data;
            //   console.log(this.goodlist);
          });
    
  }
};
</script>
<style scoped>
@import "../assets/css/fund.css";
.active{
      background:#fff;
      font-weight: bold;
  }
.active::before{
      content:'';
      position: absolute;
      left: 0;
      top:50%;
      margin-top: -7px;
      background: #ff4891;
      width: 4px;
      height: 14px;
  }
</style>
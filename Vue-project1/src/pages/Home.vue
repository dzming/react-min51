<template>
  <div id="home">
    <header>
        <div id="title">
            <img src="../assets/2xiaoshi.png" alt="" class="imgs1">
            <span>
              <img src="../assets/sousu.png" alt="" class="imgs2">
              <p>搜索</p>
            </span>
        </div>
    </header>
    <div id="nav">
        <ul class="ink-nav">
            <li v-for="(item,idx) in $store.state.navList" :key="item.name" @click="goto(item.path,idx)" :class="{active:idx===active}">{{item.name}}</li>
        </ul>
    </div>
    <div id="body">
        <router-view></router-view>
    </div>
    <div id="footer">
      <ul>
        <li @click="$router.push({ path: '/home' })">
          <img src="../assets/store1.png" alt>
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
          <img src="../assets/me0.png" alt>
          <span>我的</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            loading: false,
            active:0
        }
    },
    methods: {
        goto(path,idx){
            this.$router.push({ path })
            this.active = idx;
            
        },
        // getAll() {
        //     this.loading = true;
        //     this.$axios({
        //         method: 'post',
        //         url: 'http://www.inklego.com/api/v1/recommend/all'
        //     }).then(res=>{
        //         this.$store.commit('getAll',res.data.result);
        //         this.loading = false;
        //     });
        // },  
        getpath(){
            let navList = this.$store.state.navList
            for(let i = 0;i < navList.length;i++){
                if(this.$route.path == navList[i].path){
                    this.active = i;
                }
            }
        }
    },
    created() {
        // this.getAll();
        this.getpath();
    },
    updated() {
        this.getpath();
    },
};
</script>
<style scoped>
@import "../assets/iconfont/iconfont.css";
#home {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
body{
    background: #ffffff !important;
}
/* header */
header {
    height: 40px;
    background: #ffffff;
    color: #333333;
    display: flex;
}
header #title{
    flex: 1;
    display: flex;
    height: 40px;
    width: 100%;
    line-height: 40px;
}
header #title .imgs1{
  float: left;
  height: 14px;
  margin: 3% 5%;
}
header #title span{
  margin: 1% 0 1% 32%;
  height: 30px;
  width: 154px;
  border-radius:20px; 
  background: #f5f5f5;
}
header #title span .imgs2{
  height: 18px;
  width: 18px;
  float: left;
  margin: 6px 10px;
}
header #title span p{
  float: left;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
header .iconfont {
    font-size: 2rem !important;
}
/* nav */
#nav{
    /* border-bottom: 2px solid #FFD71D; */
    width: auto;
    height: 42px;
    white-space: nowrap;
    background: #FFFFFF;
}
#nav ul{
    display: flex;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    
}
/* 隐藏滚动条 */
#nav ul::-webkit-scrollbar {
    display: none;
}

#nav ul li{   
    list-style:none;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: .875rem;
    border-bottom: .125rem solid transparent;
    padding: 0 1.375rem;  
}
.active{
    font-weight: 900 !important;
    border-bottom: .125rem solid #ff4891 !important;
    box-sizing: border-box;
    color: #ff4891
}
#body {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}
#body::-webkit-scrollbar {
    display: none;
}
/* footer */
#footer {
  height: 46px;
  width: 100%;
  background: #f5f5f5

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
  font-size: 10px;
}
</style>


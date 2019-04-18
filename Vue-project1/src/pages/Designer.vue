<template>
    <div id="designer">
        
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
          <img src="../assets/designer1.png" alt>
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
    
}
</script>
<style scoped>
    #designer {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
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
<template>
    <div id="mine">
        <div class="mine">
            <div class="btns">
                <div class="wd" @click="tuichu">退出登陆</div>
            </div>
        </div>
    </div>
</template>
<script>
import qs from "qs";
import ElementUI from "element-ui";
export default {
    data() {
      return {
      
      };
    },
     created() {
        
    },
    updated(){
     
    },
    methods:{
        
        tuichu(){
            localStorage.removeItem("resname");
            this.$router.push({name:'Me'});
        }
        
    },
}
</script>
<style scoped>
    #mine {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    .mine{
        padding: 114px 30px 0 30px;
        width: 100%;
        height: 360px;
        box-sizing: border-box;
    }
    .btns{
        height: 42px;
        width: 100%;
    }
    .btns .wd{
        width: 100%;
        height: 40px;
        margin-top: 20px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #ffffff;
        background: lightskyblue;
        border-radius: 10px;
    }
    
</style>
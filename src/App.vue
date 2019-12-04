<template>
    <div id="app">
    <div>
<div class="nav-top">
<rotate  class="jia" v-if="$store.state.dd"/>
	<span>个人后台管理系统</span>
    <div class="nav-topright">
        <span>您好：管理员</span><span>注销</span>
    </div>
</div>
<div class="nav-down">
    <div class="leftmenu2">
    	<div class="menu-oc1"></div>
        <ul>
            <li>
                	<a href="/">管理分类</a>
                    <a href="#/ping">管理商品</a>
                    <a href="#/stock">管理库存</a>
                    <a href="#/logo">管理导航</a>
            </li>
        </ul>
        
    </div>
    <div class="rightcon">
    	<div class="right_con">
          <router-view class="nei"/>
        </div>
    </div>
</div>
</div>
    </div>
</template>
<script>
import rotate from'@/views/rotate.vue';
    export default {
        components: {
            rotate,
        },
    }
</script>
<style lang="scss" >
body{
    min-width:1200px;
}
ul,li{ list-style:none; padding:0; margin:0}
a{ text-decoration:none}
.nav-top{ width:100%; height:65px; border-top:solid 2px #cc374b; background:#2b2927; color:#fff}
.nav-top>span{ float:left; height:65px; line-height:65px; display:block; font-family:"方正兰亭粗黑简体"; font-size:28px; font-weight:bold; margin-left:50px}
.nav-top>.nav-topright{ float:right}
.nav-top>.nav-topright>p{ float:left; height:65px; line-height:65px; padding:0; margin:0; display:block; margin-right:50px}
.nav-top>.nav-topright>span{ float:left; display:block; height:65px; line-height:65px; margin-right:20px}
.nav-down{ width:100%; height:auto;}
.leftmenu2{ float:left; width:100px; height:100vh; position:absolute; background:#424f63;left:0px}
.leftmenu2 .menu-oc1{ position:absolute; margin-left:100px; cursor:pointer}
.leftmenu2 ul{ float:left; width:100px; height:auto}
.leftmenu2>ul>li{ width:100px; float:left; height:auto; position:relative}
.leftmenu2>ul>li>a{ width:100px; height:45px; float:left; display:block; line-height:50px; color:#FFF; cursor:pointer;text-align: center;}
.rightcon{ margin-left:55px; }
.rightcon .right_con{ width:100%; margin:auto; display:table}
.rightcon .right_con>p{ margin:0; margin-top:10px; width:100%; display:block}
.nei{
    margin-left:100px;
    margin-top:20px;
    height:95vh;
            overflow-x: auto;
        overflow-y: scroll;
}
.nei::-webkit-scrollbar {
        display: none;
    }
    .jia{
        padding:50vh 50%;
        position:absolute;
z-index:99999;
    }
</style>

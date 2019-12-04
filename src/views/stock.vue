<template>
<div>
<div class="table">
<div></div>
<div>
    <div v-for="i of da">
    <div class="text1"  v-if="i.status!=3">
    <div class="te">{{i.name}}</div>
    <div class="te">{{i.category_name}}</div>
    <div class="te">{{i.sale_num}}</div>
    <div class="te">{{i.content}}</div>
    <div class="te">{{i.sort}}</div>
    <Button type="info" v-if="i.id==null&&data!=2" @click="function(){data=2}">库存管理</Button>
    <Button type="info" v-if="i.id==null&&data!=1"  @click="function(){data=1}">商品详情</Button>
    <Button type="success" v-if="i.id!=null&&data!=2" @click="loginn(i)">点击管理</Button>
    <Button type="success" v-if="i.id!=null&&data!=1" @click="loginn1(i)">编辑详情</Button>
    </div>
    </div>
</div>
</div>
</div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
    export default {
        name:"wechat",
        components: {
        },
        props: {
        },
        mounted(){
            this.$store.state.dd=!this.$store.state.dd;
             this.login();
            this.login4();
 },
        methods: {
            loginn(i){
                this.$router.push({path:"/stocks",query:{id:i}});
            },
            loginn1(i){
                this.$router.push({path:"/details",query:{id:i}});
            },
             login4(){
                axios({
                method:'get',
                url:this.$store.state.http+'/hello',
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.da= [{"name":"名称","category_name":"分类","sale_num":"销量","content":"备注","sort":"排序值"}];
                      for(var i=0;i<data.length;i++){
                        this.da[i+1]=data[i];
                    }
                    this.$store.state.dd=false;
               },
            })
        },
         login(){
                axios({
                method:'get',
                url:this.$store.state.http+'/hello1',
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.da3=data;
                    this.$store.state.dd=false;
               },
            })
        },
        },
        data() {
            return {
                da:[],
                da1:0,
                da3:[],
                da2:0,
                sid:'',
                data:1,
                }
            },
    }

</script>
<style scoped>
body{
    background:#fff;
}
.text1{
    background:#f6f6f6;
    color:#000;
    width:calc(100% - 50px);
    padding:10px 15px;
    margin:10px 0;
    display:flex;
}
.text1 .text2{
    display:flex;
    flex-wrap:wrap;
     flex-grow:1;
     margin: 0 auto;
}
.text1 .text2 div{
    height:30px;
     position: relative;
}
.text1 .text2 span{
    display:inline-block;
        overflow-x: auto;
        overflow-y: scroll;
        text-align: center;
        width:80px;
        height:30px;
}
.text1 .text2 span::-webkit-scrollbar {
        display: none;
    }
.text1 input{
    flex-grow:1;
    width:50px;
    margin:0 10px;
    text-align: center;
}
.text1 .te{
    line-height: 30px;
    width:80px;
flex-grow:1;
     text-align: center;
}
.text1 .te3{
    line-height: 30px;
    width:80px;
     text-align: center;
     background:#000;
     border-radius: 40px;
         margin: 0 10px;
}
.text3{
    width:calc(100% - 50px);
    padding:10px 15px;
    margin:10px 0;
    display:flex;
}
.text3 div{
    flex-grow:1;
    border:1px solid #afafaf;
    text-align: center;
    margin:0 10px;
    width:90px;
    overflow-x: auto;
        overflow-y: scroll;
        text-align: center;
}
.text3 div::-webkit-scrollbar {
        display: none;
    }
.text3 input{
    flex-grow:1;
    border:0;
    width:90px;
    text-align: center;
}
.text1 .te2{
    line-height: 30px;
    display:flex;
    flex-grow:3;
    text-align: center;
}
.text1 .te2 .te1{
flex-grow:1;
}
.text2{
    color:#fff;
    width:calc(100% - 50px);
    padding:10px 15px;
    margin:10px 0;
    display:flex;
}
.text2  .input2{
        position: absolute;
        width:10px;
        height:10px;
        left:75px;
        top:-55px;
        color:red;
        font-family:'微软雅黑';
      }
.text2 input{
    flex-grow:1;
    width:50px;
    margin:0 10px;
    text-align: center;
}
</style>   

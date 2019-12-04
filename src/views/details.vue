<template>
<div>
<div class="table">
<div class="text1">
    <div class="te">标签名</div>
    <div class="te">标签内容</div>
    <div class="te">状态</div>
    <Button type="error" style='margin-right:10px;'  @click="function(){judge1=!judge1}">删除</Button>
    <Button type="success" style='margin-right:10px;'  @click="function(){if(judge!=-1){judge=-1}else{judge=0}}">添加</Button>
</div>
<div class="text1" v-if="judge==-1">
    <input type="text" v-model:value="name"></input>
    <input type="text" v-model:value="content"></input>
    <input type="text" v-model:value="sta"></input>
    <Button type="success" style='margin-right:10px;'  @click="function(){loginn4()}">确定</Button>
</div>
<div  v-for="i of data1">
<div class="text1">
    <div class="te">{{i.id}}</div>
    <div class="te">{{i.value}}</div>
    <div class="te">{{i.status}}</div>
    <Button type="success" style='margin-right:10px;' @click="function(){if(judge!=i.tag_id){judge=i.tag_id;name=i.id;content=i.value}else{judge=0}}">修改</Button>
    <Button type="error" style='margin-right:10px;' v-if="!judge1&&i.status==1" @click="hide(i.tag_id)">隐藏</Button>
    <Button type="success" style='margin-right:10px;' v-if="!judge1&&i.status==2" @click="display(i.tag_id)">回滚</Button>
    <Button type="error" style='margin-right:10px;' v-if="judge1" @click="delete3(i.tag_id)">删除</Button>
</div>
<div class="text1" v-if="judge==i.tag_id">
<input type="text" v-model:value="name"></input>
<input type="text" v-model:value="content"></input>
    <Button type="success" style='margin-right:10px;' @click="login(i.tag_id)">确定</Button>
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
            this.id=this.$route.query.id;
            this.loginn3();
 },
        methods: {
            delete3(id){
                this.$store.state.dd=!this.$store.state.dd;
            axios({
                method:'get',
                url:this.$store.state.http+'/delete3',
                params:{
                    id:id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.loginn3();
               },
            })
            },
            hide(id){
                this.$store.state.dd=!this.$store.state.dd;
                axios({
                method:'get',
                url:this.$store.state.http+'/hide3',
                params:{
                    id:id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.loginn3();
               },
            })
            },
             display(id){
                 this.$store.state.dd=!this.$store.state.dd;
                axios({
                method:'get',
                url:this.$store.state.http+'/display3',
                params:{
                    id:id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.loginn3();
               },
            })
            },
          loginn3(){
                axios({
                method:'get',
                url:this.$store.state.http+'/hello11',
                params:{
                    id:this.id.id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.data1=data;
                     this.$store.state.dd=false;
               },
            })
            },
                      loginn4(){
                          this.$store.state.dd=!this.$store.state.dd;
                axios({
                method:'get',
                url:this.$store.state.http+'/increase5',
                params:{
                    id:this.id.id,
                    vid:this.name,
                    value:this.content,
                    status:this.sta,
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.judge=0;
                     this.loginn3();
               },
            })
            },
            login(id){
                this.$store.state.dd=!this.$store.state.dd;
   axios({
                method:'get',
                url:this.$store.state.http+'/upda',
                params:{
                    id:id,
                    vid:this.name,
                    value:this.content,
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.judge=0;
                     this.loginn3();
               },
            })
            },
        },
        data() {
            return {
               id:null,
               data1:null,
                judge:0,
                content:'',
                name:'',
                sta:'',
                judge1:false,
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

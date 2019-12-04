<template>
<div>


<Menu @on-select="type"mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            类型1
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
           类型2
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-construct" />
            类型3
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            类型max
        </MenuItem>
    </Menu>
    <br>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>


<div class="table">
<div class="text1">
<div class="te">类型</div>
<div class="te">排序</div>
<div class="te">名字</div>
<div class="te">图片</div>
<div class="te">链接类型</div>
<div class="te">链接目标</div>
<Button type="error" style='margin-right:10px;'   @click="function(){judge1=!judge1}">删除</Button>
<Button type="success"   @click="function(){if(judge!=-1){judge=-1;id='';sort='';link_type='';title='';picture='';link_target='';status='';}else{judge=0}}">添加</Button>
</div>
<div class="text1" v-if="judge==-1">
    <input type="text" v-model:value="id" placeholder="类型id"></input>
    <input type="text" v-model:value="sort" placeholder="排序"></input>
    <input type="text" v-model:value="title" placeholder="名字"></input>
   <input type='file'  @change="changeProduct($event)" id='imgs' :style="img!=''&&img!=undefined? 'display:none;' : 'display:block;'">
   <label for='imgs' v-if="img!=''&&img!=undefined">
        <img v-bind:src="img" style="heigth:50px;width:50px;" >
   </label>
   
    <input type="text" v-model:value="link_type" placeholder="链接类型"></input>
    <input type="text" v-model:value="link_target" placeholder="链接目标"></input>
    <input type="text" v-model:value="status" placeholder="状态"></input>
    <Button type="success"  @click="loginn4()">确定</Button>
</div>
<div  v-for="i of data1">
<div class="text1">
<div class="te">{{i.id}}</div>
<div class="te">{{i.sort}}</div>
<div class="te">{{i.title}}</div>
<div class="te">{{i.picture}}</div>
<div class="te">{{i.link_type}}</div>
<div class="te">{{i.link_target}}</div>
<Button type="success" style='margin-right:10px;'  @click="function(){if(judge!=i.type_id){judge=i.type_id;sort=i.sort;id=i.id;title=i.title;img=i.picture;link_type=i.link_type;link_target=i.link_target;}else{judge=0}}">修改</Button>
<Button type="error" v-if="!judge1&&i.status==1" @click="hide(i.type_id)">隐藏</Button>
<Button type="success" v-if="!judge1&&i.status==2" @click="display(i.type_id)">回滚</Button>
    <Button type="error" style='margin-right:10px;' v-if="judge1"   @click="delete3(i.type_id)">删除</Button>
</div>
<div class="text1" v-if="judge==i.type_id">
    <input type="text" v-model:value="id" placeholder="类型id"></input>
    <input type="text" v-model:value="sort" placeholder="排序"></input>
    <input type="text" v-model:value="title" placeholder="名字"></input>
   <input type='file'  @change="changeProduct($event)" id='imgs' :style="img!=''&&img!=undefined? 'display:none;' : 'display:block;'">
   <label for='imgs' v-if="img!=''&&img!=undefined">
        <img v-bind:src="img" style="heigth:50px;width:50px;" >
   </label>
    <input type="text" v-model:value="link_type" placeholder="链接类型"></input>
    <input type="text" v-model:value="link_target" placeholder="链接目标"></input>
    <Button type="success"  @click="loginn1(i.type_id)">确定</Button>
</div>
</div>
</div>
</div>
</template>
<script>
import axios from 'axios';
import Qs from 'qs'
    export default {
        components: {
        },
        props: {
        },
        mounted(){
             this.$store.state.dd=!this.$store.state.dd;
            this.login();
 },
        methods: {
            type(e){
                this.login1(e);
            },
               changeProduct(e){
               var img =e.target.files[0];
                var params=new FormData();
                params.append('file',img);
                console.log(params)
                axios({
                method:'post',
                url:this.$store.state.http+'/img',
               data:params,
               responseType:'json',
                transformResponse:(data)=> {
                    this.img=data[0];
                    console.log(this.img)
               },
            })
            },
            loginn1(id){
                this.$store.state.dd=!this.$store.state.dd;
                axios({
                method:'get',
                url:this.$store.state.http+'/upda1',
                params:{
                    vid:id,
                    id:this.id,
                    sort:this.sort,
                    link_type:this.link_type,
                    title:this.title,
                    picture:this.img,
                    link_target:this.link_target,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.img="";
                    this.judge=0;
                    this.login();
               },
            })
            },
            delete3(id){
                this.$store.state.dd=!this.$store.state.dd;
            axios({
                method:'get',
                url:this.$store.state.http+'/delete4',
                params:{
                    id:id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.login();
               },
            })
            },
            hide(id){
                this.$store.state.dd=!this.$store.state.dd;
                axios({
                method:'get',
                url:this.$store.state.http+'/hide4',
                params:{
                    id:id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.login();
               },
            })
            },
             display(id){
                 this.$store.state.dd=!this.$store.state.dd;
                axios({
                method:'get',
                url:this.$store.state.http+'/display4',
                params:{
                    id:id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.login();
               },
            })
            },
            loginn4(){
                this.$store.state.dd=!this.$store.state.dd;
                   axios({
                method:'get',
                url:this.$store.state.http+'/increase6',
                params:{
                    id:this.id,
                    sort:this.sort,
                    link_type:this.link_type,
                    title:this.title,
                    picture:this.img,
                    link_target:this.link_target,
                    status:this.status,
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.img="";
                    this.judge=0;
                    this.login();
               },
            })
            },
             login(){
   axios({
                method:'get',
                url:this.$store.state.http+'/hello111',
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.data1=data;
                    this.$store.state.dd=false;
               },
            })
            },
 login1(ii){
   axios({
                method:'get',
                url:this.$store.state.http+'/hello1111',
                params:{
                    id:ii,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.data1=data;
                    this.$store.state.dd=false;
               },
            })
            },
        },
        data() {
            return {
                data1:'',
                judge:0,
                judge1:false,
                sort:'',
                id:'',
                title:'',
                picture:'',
                link_type:'',
                link_target:'',
                status:'',
                img:'',
                 theme1: 'light'
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
    .text1 .te{
    display:inline-block;
        overflow-x: auto;
        overflow-y: scroll;
        text-align: center;
        width:80px;
        height:30px;
}
.text1 .te::-webkit-scrollbar {
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

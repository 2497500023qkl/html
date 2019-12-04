<template>
<div>
<div class="table">
<div></div>
<div class="text1">
    <div class="te">{{da.name}}</div>
    <div class="te">{{id.name}}</div>
</div>
<div class="text1" v-if="(''!=da.property.attr1&&''!=da.property.attr1)&&''!=da.property.attr2">
    <div  v-if="''!=da.property.attr1" style="line-height: 40px;">{{da.property.attr1}}:</div><input type="text" v-model:value="attr1" v-if="''!=da.property.attr1"><Button type="success" style="margin:5px;" @click="into(1)" v-if="''!=da.property.attr1">添加</Button>
    <div  v-if="''!=da.property.attr2" style="line-height: 40px;">{{da.property.attr2}}:</div><input type="text" v-model:value="attr2" v-if="''!=da.property.attr2"><Button type="success" style="margin:5px;" @click="into(2)" v-if="''!=da.property.attr2">添加</Button>
    <div  v-if="''!=da.property.attr3" style="line-height: 40px;">{{da.property.attr3}}:</div><input type="text" v-model:value="attr3" v-if="''!=da.property.attr3"><Button type="success" style="margin:5px;"  @click="into(3)" v-if="''!=da.property.attr3">添加</Button>
</div>
    <div class="text1" v-if="(''!=da.property.attr1&&''!=da.property.attr1)&&''!=da.property.attr2">
    <div class="te" v-if="undefined!=da.property.attr1">{{da.property.attr1}}</div>
    <div class="te" v-if="undefined!=da.property.attr2">{{da.property.attr2}}</div>
    <div class="te" v-if="undefined!=da.property.attr3">{{da.property.attr3}}</div>
    </div>
<div class="text1">
    <div class="text2">
    <Button type="success" style="margin:10px;" v-for="i of dat1" @click="function(){cattr1=i.attr1}"><span>{{i.attr1}}</span><div class='input2' @click="delec(i.id)">x</div></Button>
    </div>
<div class="text2">
    <Button type="success" style="margin:10px;"  v-for="i of dat2" @click="function(){cattr2=i.attr1}"><span>{{i.attr1}}</span><div class='input2' @click="delec(i.id)">x</div></Button>
    </div>
    <div class="text2">
    <Button type="success" style="margin:10px;"  v-for="i of dat3" @click="function(){cattr3=i.attr1}"><span>{{i.attr1}}</span><div class='input2' @click="delec(i.id)">x</div></Button>
    </div>
</div>
<div class="text1">
<input type="text" v-model:value="cattr1"  placeholder="类1" v-if="''!=da.property.attr1">
<input type="text" v-model:value="cattr2"  placeholder="类2" v-if="''!=da.property.attr2">
<input type="text" v-model:value="cattr3"  placeholder="类3" v-if="''!=da.property.attr3">
<input type="text" v-model:value="original"  placeholder="起始价">
<input type="text" v-model:value="price"  placeholder="现价">
<input type="text" v-model:value="quantity"  placeholder="库存">
<input type="text" v-model:value="sort"  placeholder="排序值">
<input type="text" v-model:value="status"  placeholder="状态">
<Button type="success" @click="loginn1()" style="width:120px;">提交</Button>
</div>
<div v-for="i of ddata">
<div class="text3" v-if="cid!=i.id" >
<div v-if="''!=da.property.attr1">{{i.attr1}}</div>
<div v-if="''!=da.property.attr2">{{i.attr2}}</div>
<div v-if="''!=da.property.attr3">{{i.attr3}}</div>
<div>{{i.original_price}}</div>
<div>{{i.price}}</div>
<div>{{i.quantity}}</div>
<div>{{i.sort}}</div>
<Button type="success"  style='margin-right:10px;' @click="function(){cid=i.id;d1=i.original_price;d2=i.price;d3=i.quantity;d4=i.sort;}">修改</Button>
<Button type="error" style='margin-right:10px;'  @click="dele(i.id)" v-if="i.status==1">隐藏</Button>
<Button type="success" style='margin-right:10px;'  @click="dele1(i.id)"  v-if="i.status==2">回滚</Button>
<Button type="error" @click="shanc(i.id)">删除</Button>
</div>
<div class="text3" v-else>
<div v-if="''!=da.property.attr1">{{i.attr1}}</div>
<div v-if="''!=da.property.attr2">{{i.attr2}}</div>
<div v-if="''!=da.property.attr3">{{i.attr3}}</div>
<div><input type="text" v-model:value="d1"></div>
<div><input type="text" v-model:value="d2"></div>
<div><input type="text" v-model:value="d3"></div>
<div><input type="text" v-model:value="d4"></div>
<div style="border-radius: 40px; background:#000; color:#fff;flex-grow:0;width:80px;" @click="updata(i.id)">确定</div>
<div style="border-radius: 40px; background:#000; color:#fff;flex-grow:0;width:80px;"  @click="dele(i.id)" v-if="i.status==1">隐藏</div>
<div style="border-radius: 40px; background:#000; color:#fff;flex-grow:0;width:80px;"  @click="dele1(i.id)"  v-if="i.status==2">回滚</div>
<div style="border-radius: 40px; background:#000; color:#fff;flex-grow:0;width:80px;" @click="shanc(i.id)">删除</div>
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
            this.login4();
            this.loginn3();
 },
        methods: {
            updata(i){
                this.$store.state.dd=!this.$store.state.dd;
axios({
                method:'get',
                url:this.$store.state.http+'/Update',
                params:{
                    id:i,
                    original_price:this.d1,
                    price:this.d2,
                    quantity:this.d3,
                    sort:this.d4,
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.cid='';
                     this.loginn3();
               },
            })
            },
            loginn1(){
                this.$store.state.dd=!this.$store.state.dd;
axios({
                method:'get',
                url:this.$store.state.http+'/create2',
                params:{
                    id:this.id.id,
                    attr1:this.cattr1,
                    attr2:this.cattr2,
                    attr3:this.cattr3,
                    original_price:this.original,
                    price:this.price,
                    quantity:this.quantity,
                    sort:this.sort,
                    status:this.status,
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
                url:this.$store.state.http+'/change3',
                params:{
                    id:this.id.id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.ddata=data;
                     this.$store.state.dd=false;
               },
            })
            this.$store.state.dd=!this.$store.state.dd;
            },
             shanc(id){
                 this.$store.state.dd=!this.$store.state.dd;
if(confirm("亲，您确定删除吗？")){
                axios({
                method:'get',
                url:this.$store.state.http+'/delete2?id='+id,
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                 this.loginn3();
               },
                })
            }
        },
        dele(id){
            this.$store.state.dd=!this.$store.state.dd;
                        axios({
                method:'get',
                url:this.$store.state.http+'/hide2?id='+id,
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.loginn3();
               },
                })
        },
        dele1(id){
            this.$store.state.dd=!this.$store.state.dd;
                        axios({
                method:'get',
                url:this.$store.state.http+'/display2?id='+id,
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.loginn3();
               },
                })
        },
                delec(i){
                    this.$store.state.dd=!this.$store.state.dd;
                     if(confirm("亲，您确定删除吗？")){
                axios({
                method:'get',
                url:this.$store.state.http+'/delectqkl',
                params:{
                    id:i,
                },
               responseType:'json',
                transformResponse:(data)=> {
                     this.loginn(this.id.id);
               },
            })
            }
            },
            into(i){
                this.$store.state.dd=!this.$store.state.dd;
                if(i==1){
                    if(this.attr1==''){
                        this.$store.state.dd=!this.$store.state.dd;
                        return
                    }
                    axios({
                method:'get',
                url:this.$store.state.http+'/into',
                params:{
                    product_id:this.id.id,
                    attr1:this.attr1,
                    attr2:this.da.property.attr1,
                },
               responseType:'json',
                transformResponse:(data)=> {
                                        this.attr1="";
                                        this.loginn(this.id.id);
               },
            })
                }else if(i==2){
                    if(this.attr2==''){
                        this.$store.state.dd=!this.$store.state.dd;
                        return
                    }
                    axios({
                method:'get',
                url:this.$store.state.http+'/into',
                params:{
                    product_id:this.id.id,
                    attr1:this.attr2,
                    attr2:this.da.property.attr2,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.attr2="";
                    this.loginn(this.id.id);
               },
            })
                }else if(i==3){
                    if(this.attr3==''){
                        return
                    }
                    axios({
                method:'get',
                url:this.$store.state.http+'/into',
                params:{
                   product_id:this.id.id,
                    attr1:this.attr3,
                    attr2:this.da.property.attr3,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.attr3="";
                    this.loginn(this.id.id);
               },
            })
                }
            },
            loginn(i){
                axios({
                method:'get',
                url:this.$store.state.http+'/see',
                params:{
                    product_id:this.id.id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.dat1=[];
this.dat2=[];
this.dat3=[];
                        for(i of data){
                            if(i.attr2==this.da.property.attr1){
                                this.dat1[this.dat1.length]=i;
                            }else if(i.attr2==this.da.property.attr2){
                                this.dat2[this.dat2.length]=i;
                            }else if(i.attr2==this.da.property.attr3){
                                this.dat3[this.dat3.length]=i;
                            }
                        }
                        this.attr1="sdf";
                        this.attr1='';
                        this.$store.state.dd=false;
               },
            })
            },
             login4(){
                 this.$store.state.dd=!this.$store.state.dd;
                 console.log(this.id.category_id)
                axios({
                method:'get',
                url:this.$store.state.http+'/getone',
                params:{
                    id:this.id.category_id,
                },
               responseType:'json',
                transformResponse:(data)=> {
                      this.da=data;
                      this.da.property=JSON.parse(data.property);
                      this.loginn(this.id.id);
               },
            })
        },
        },
        data() {
            return {
                da:{property: ""},
                da1:0,
                dat1:[],
                dat2:[],
                dat3:[],
                da2:0,
                sid:'',
                id:'',
                cid:'',
                attr1:'',
                attr2:'',
                attr3:'',
                cattr1:'',
                cattr2:'',
                cattr3:'',
                original:'',
                price:'',
                quantity:'',
                sort:'',
                status:'',
                ddata:[],
                d1:'',
                d2:'',
                d3:'',
                d4:'',
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
        left:100px;
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

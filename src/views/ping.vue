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
    <Button type="error" style='margin-right:10px;'  v-if="(i.id==null||i.status=='2')||!shan" @click="shanc(i.id)">删除</Button>
    <Button type="success" style='margin-right:10px;'  v-if="i.status=='1'&&shan"  @click="login1(i)">修改</Button>
    <Button type="error" v-if="i.status=='1'&&shan" @click="dele(i.id)">隐藏</Button>
    <Button type="success" v-if="i.status=='2'&&shan" @click="dele1(i.id)">回滚</Button>
    <Button type="success"v-if="i.id==null" @click="loginn(1)">添加</Button>
    </div>
        <div class="text2" v-if="i.id!=null&&da2==i.id">
<input type="text" v-model:value="name"  placeholder="名称">
<input type="text" v-model:value="attr2"  placeholder="销量">
<input type="text" v-model:value="attr3"  placeholder="备注">
<input type="text" v-model:value="sort"  placeholder="排序">
    </div>
    </div>
</div>
<div v-if="da1==1" class="text1">
<input type="text" v-model:value="name"  placeholder="名称">
<select v-model:value="sid">  
      <option v-for="j of da3" v-bind:value="j.id">{{j.name}}</option>  
 </select>
<input type="text" v-model:value="attr2"  placeholder="销量">
<input type="text" v-model:value="attr3"  placeholder="备注">
<input type="text" v-model:value="sort"  placeholder="排序">
<input type="text" v-model:value="status"  placeholder="状态">
    <Button type="success" @click="loginn(2)">提交</Button>
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
                    shanc(id){
                        this.$store.state.dd=!this.$store.state.dd;
            if(id==null){
                this.shan=!this.shan;
                this.$store.state.dd=!this.$store.state.dd;
            }else if(confirm("亲，您确定删除吗？")){
                 this.shan=!this.shan;
                axios({
                method:'get',
                url:this.$store.state.http+'/delect1?id='+id,
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                    this.da=[
                    {"name":"名称","property":"{\"attr1\":\"属性1\",\"attr2\":\"属性2\",\"attr3\":\"属性3\"}","sort":"排序值"},
                ];
                this.login();
               },
                })
            }else{
 this.$store.state.dd=!this.$store.state.dd;
            }
        },
        dele(id){
             this.$store.state.dd=!this.$store.state.dd;
                        axios({
                method:'get',
                url:this.$store.state.http+'/hide1?id='+id,
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                    console.log(data)
                    this.da=[
                    {"name":"名称","property":"{\"attr1\":\"属性1\",\"attr2\":\"属性2\",\"attr3\":\"属性3\"}","sort":"排序值"},
                ];
                this.login();
               },
                })
        },
        dele1(id){
             this.$store.state.dd=!this.$store.state.dd;
                        axios({
                method:'get',
                url:this.$store.state.http+'/display1?id='+id,
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                    console.log(data)
                    this.da=[
                    {"name":"名称","property":"{\"attr1\":\"属性1\",\"attr2\":\"属性2\",\"attr3\":\"属性3\"}","sort":"排序值"},
                ];
                this.login();
               },
                })
        },
            login1(id){
                 this.$store.state.dd=!this.$store.state.dd;
                if(this.da2!=id.id){
                this.sid=id.category_id;
                this.da2=id.id;
                this.name=id.name
                this.attr2=id.sale_num;
                this.attr3=id.content;
                this.sort=id.sort;
                 this.$store.state.dd=!this.$store.state.dd;
            }else{
                axios({
                    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
                     },
                method:'post',
                url:this.$store.state.http+'/change',
                data:Qs.stringify({
                    id:this.da2,
                    name:this.name,
                    category_id:this.sid,
                    sale_num:this.attr2,
                    content:this.attr3,
                    sort:this.sort,
                }),
               responseType:'json',
                transformResponse:(data)=> {
                    console.log(data)
                    this.name=''
                this.attr1=''
                this.attr2=''
                this.attr3=''
                this.da2=''
                    this.da=[
this.da= {"name":"名称","category_name":"分类","sale_num":"销量","content":"备注","sort":"排序值"}
                ];
                this.login4();
               },
            })
            }
            },
            loginn(i){
                 this.$store.state.dd=!this.$store.state.dd;
         if(i==2){
                axios({
                    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
                     },
                method:'post',
                url:this.$store.state.http+'/create1',
                data:Qs.stringify({
                    name:this.name,
                    category_id:this.sid,
                    sale_num:this.attr2,
                    content:this.attr3,
                    sort:this.sort,
                    status:this.status,
                }),
               responseType:'json',
                transformResponse:(data)=> {
                    this.name=''
                this.attr1=''
                this.attr2=''
                this.attr3=''
                    this.da1=i;
this.da= [{"name":"名称","category_name":"分类","sale_num":"销量","content":"备注","sort":"排序值"}];
                this.login4();
               },
            })
            }else if(this.da1==1){
                this.da1=0;
                 this.$store.state.dd=!this.$store.state.dd;
            }else{
                 this.da1=i;
                  this.$store.state.dd=!this.$store.state.dd;
            }
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
                name:'',
                attr1:'',
                attr2:'',
                attr3:'',
                sort:'',
                status:'',
                property:{"attr1":"","attr2":"","attr3":""},
                shan:true,
                da2:0,
                sid:'',
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

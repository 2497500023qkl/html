<template>
<div>
<div class="table">
<div></div>
<div>
    <div v-for="i of da" v-if="i.status!=3">
    <div class="text1">
    <div class="te">{{i.name}}</div>
    <div class="te2" v-for="j of i.property">
    <div  class="te1">{{j.attr1}}</div>
    <div  class="te1">{{j.attr2}}</div>
    <div  class="te1">{{j.attr3}}</div>
    </div>
    <div class="te">{{i.sort}}</div>
    <Button type="error" style='margin-right:10px;' v-if="(i.id==null||i.status=='2')||!shan"  @click="shanc(i.id)">删除</Button>
    <Button type="success" style='margin-right:10px;' v-if="i.status=='1'&&shan"  @click="login1(i)">修改</Button>
    <Button type="error" v-if="i.status=='1'&&shan" @click="dele(i.id)">隐藏</Button>
    <Button type="success" v-if="i.status=='2'&&shan" @click="dele1(i.id)">回滚</Button>
   <Button type="success" v-if="i.id==null" @click="into(1)">添加</Button>
    </div>
        <div class="text2" v-if="i.id!=null&&da2==i.id">
<input type="text" v-model:value="name"  placeholder="名称">
<input type="text" v-model:value="attr1"  placeholder="属性1">
<input type="text" v-model:value="attr2"  placeholder="属性2">
<input type="text" v-model:value="attr3"  placeholder="属性3">
<input type="text" v-model:value="sort"  placeholder="排序">
    </div>
    </div>
</div>
<div v-if="da1==1" class="text1">
<input type="text" v-model:value="name"  placeholder="名称">
<input type="text" v-model:value="attr1"  placeholder="属性1">
<input type="text" v-model:value="attr2"  placeholder="属性2">
<input type="text" v-model:value="attr3"  placeholder="属性3">
<input type="text" v-model:value="sort"  placeholder="排序">
<input type="text" v-model:value="status"  placeholder="状态">
<Button type="success" @click="into(2)">添加</Button>
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
 },
        methods: {
             login(){
                axios({
                method:'get',
                url:this.$store.state.http+'/hello1',
                params:{
                },
               responseType:'json',
                transformResponse:(data)=> {
                    for(var i=0;i<data.length;i++){
                        this.da[i+1]=data[i];
                    }
                    for(var i=0;i<this.da.length;i++){
                    this.da[i].property=JSON.parse("["+this.da[i].property+"]");
                    }
                    this.$store.state.dd=false;
               },
            })
        },
        login1(id){
            this.$store.state.dd=!this.$store.state.dd;
            if(this.da2!=id.id){
                this.da2=id.id
                this.name=id.name
                this.attr1=id.property[0].attr1;
                this.attr2=id.property[0].attr2;
                this.attr3=id.property[0].attr3;
                this.sort=id.sort;
                 this.$store.state.dd=false;  
            }else{
                this.property.attr1=this.attr1;
            this.property.attr2=this.attr2;
            this.property.attr3=this.attr3;
 var ca=JSON.stringify(this.property);
                axios({
                    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
                     },
                method:'post',
                url:this.$store.state.http+'/update',
                data:Qs.stringify({
                    id:id.id,
                    name:this.name,
                    property:ca,
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
                    {"name":"名称","property":"{\"attr1\":\"属性1\",\"attr2\":\"属性2\",\"attr3\":\"属性3\"}","sort":"排序值"},
                ];
                this.login();
               },
            })
            }
        },
        shanc(id){
            this.$store.state.dd=!this.$store.state.dd;
            if(id==null){
                this.shan=!this.shan;
                  this.$store.state.dd=false;
            }else if(confirm("亲，您确定删除吗？")){
                 this.shan=!this.shan;
                axios({
                method:'get',
                url:this.$store.state.http+'/delect?id='+id,
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
            }
        },
        dele(id){
            this.$store.state.dd=!this.$store.state.dd;
                        axios({
                method:'get',
                url:this.$store.state.http+'/hide?id='+id,
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
                url:this.$store.state.http+'/display?id='+id,
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
        into(i){
            this.$store.state.dd=!this.$store.state.dd;
            this.property.attr1=this.attr1;
            this.property.attr2=this.attr2;
            this.property.attr3=this.attr3;
            if(i==2){
                var ca=JSON.stringify(this.property);
                axios({
                    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
                     },
                method:'post',
                url:this.$store.state.http+'/create',
                data:Qs.stringify({
                    name:this.name,
                    property:ca,
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
                    this.da=[
                    {"name":"名称","property":"{\"attr1\":\"属性1\",\"attr2\":\"属性2\",\"attr3\":\"属性3\"}","sort":"排序值"},
                ];
                this.login();
               },
            })
            }else if(this.da1==1){
                this.da1=0;
                this.$store.state.dd=false;
            }else{
                 this.da1=i;
                 this.$store.state.dd=false;
            }
        },
        },
        data() {
            return {
                da:[
                    {"name":"名称","property":"{\"attr1\":\"属性1\",\"attr2\":\"属性2\",\"attr3\":\"属性3\"}","sort":"排序值"},
                ],
                da1:0,
                name:'',
                attr1:'',
                attr2:'',
                attr3:'',
                sort:'',
                status:'',
                property:{"attr1":"","attr2":"","attr3":""},
                shan:true,
                da2:0,
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

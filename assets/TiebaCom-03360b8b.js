import{d as b,r as o,i as v,c as s,a as e,w as h,v as p,u as c,F as f,g,t as d,e as _,o as n,f as r}from"./index-0dc6695d.js";const k={class:"mdui-textfield"},x=e("i",{class:"mdui-icon material-icons mdui-text-color-lime-a700"},"account_circle",-1),y=e("label",{class:"mdui-textfield-label"},"贴吧ID",-1),C={class:"mdui-row-xs-1"},D={class:"mdui-col"},w=e("br",null,null,-1),B={key:0,class:"mdui-card mdui-hoverable"},V={key:0},F={class:"mdui-table-fluid"},N={class:"mdui-table mdui-table-hoverable"},R=e("thead",null,[e("tr",null,[e("th",null,"标题"),e("th",null,"内容"),e("th",null,"吧"),e("th",null,"时间")])],-1),T=["href"],$={key:1},L=b({__name:"TiebaCom",setup(j){const u=o(v("dataRes")),m=o(v("getData")),l=o(""),i=o(1);return(E,a)=>(n(),s("div",null,[e("div",k,[x,y,h(e("input",{class:"mdui-textfield-input","onUpdate:modelValue":a[0]||(a[0]=t=>l.value=t),maxlength:"30",type:"text"},null,512),[[p,l.value]])]),e("div",C,[e("div",D,[e("button",{onClick:a[1]||(a[1]=t=>(i.value=1,l.value&&m.value({name:l.value,page:i.value})||c(r)(1))),class:"mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple"},"查一查")])]),w,u.value.code?(n(),s("div",B,[u.value.code===500?(n(),s("div",V,[e("div",F,[e("table",N,[R,e("tbody",null,[(n(!0),s(f,null,g(u.value.data,t=>(n(),s("tr",{key:t.url},[e("td",null,[e("a",{target:"_blank",href:t.url},d(t.title),9,T)]),e("td",null,d(t.content),1),e("td",null,d(t.group),1),e("td",null,d(t.time),1)]))),128))])])]),e("button",{onClick:a[2]||(a[2]=t=>l.value&&m.value({name:l.value,page:i.value++})||c(r)(1)),class:"mdui-center mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple"},"查看更多")])):u.value.code===502?(n(),s("div",$,d(c(r)("用户不存在！","red"),u.value={}),1)):_("",!0)])):_("",!0)]))}});export{L as default};
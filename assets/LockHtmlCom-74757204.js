import{d as m,r as i,c as r,a as t,w as o,v as a,u as n,o as c,S as u}from"./index-0dc6695d.js";const p={class:"mdui-textfield mdui-textfield-not-empty"},f=t("label",{class:"mdui-textfield-label"},"转义前",-1),v={class:"mdui-textfield mdui-textfield-not-empty"},b=t("label",{class:"mdui-textfield-label"},"转义后",-1),C=m({__name:"LockHtmlCom",setup(x){const d=i('<body><a href="https://链接地址.com">点我跳转</a></body>'),s=i("");return(_,e)=>(c(),r("div",null,[t("div",p,[f,o(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l),rows:"10",class:"mdui-textfield-input"},null,512),[[a,d.value]])]),t("button",{onClick:e[1]||(e[1]=l=>s.value=n(u).encode(d.value)),class:"child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"},"转义"),t("button",{onClick:e[2]||(e[2]=l=>d.value=n(u).decode(s.value)),class:"child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"},"去转义"),t("div",v,[b,o(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),rows:"10",class:"mdui-textfield-input"},null,512),[[a,s.value]])])]))}});export{C as default};
import{d as m,r as o,c as r,a as t,w as s,v as a,u as n,o as c,U as u}from"./index-1bddcf3c.js";const p={class:"mdui-textfield mdui-textfield-not-empty"},f=t("label",{class:"mdui-textfield-label"},"编码前",-1),v={class:"mdui-textfield mdui-textfield-not-empty"},b=t("label",{class:"mdui-textfield-label"},"编码后",-1),C=m({__name:"LockUrlCom",setup(x){const d=o("https://tool.imlolicon.tk/#/doc/lock_html?mdui-dialog"),i=o("");return(_,e)=>(c(),r("div",null,[t("div",p,[f,s(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l),rows:"10",class:"mdui-textfield-input"},null,512),[[a,d.value]])]),t("button",{onClick:e[1]||(e[1]=l=>i.value=n(u).encode(d.value)),class:"child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"},"编码"),t("button",{onClick:e[2]||(e[2]=l=>d.value=n(u).decode(i.value)),class:"child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"},"解码"),t("div",v,[b,s(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=l=>i.value=l),rows:"10",class:"mdui-textfield-input"},null,512),[[a,i.value]])])]))}});export{C as default};

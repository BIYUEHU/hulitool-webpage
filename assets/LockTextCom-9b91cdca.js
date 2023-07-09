import{d as m,r as d,c as r,a as t,w as o,v as n,u as a,o as c,S as u}from"./index-1bddcf3c.js";const p={class:"mdui-textfield mdui-textfield-not-empty"},v=t("label",{class:"mdui-textfield-label"},"转义前",-1),f={class:"mdui-textfield mdui-textfield-not-empty"},x=t("label",{class:"mdui-textfield-label"},"转义后",-1),w=m({__name:"LockTextCom",setup(b){const i=d(`[
    {
        "path": "/doc/bilicomponent",
        "icon": "<svg class="icon" style="width: 1em;" fill="#EB5480" p-id="1511"></svg>",
        "name": "B站查成分"
    }
]`),s=d("");return(_,e)=>(c(),r("div",null,[t("div",p,[v,o(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l),rows:"10",class:"mdui-textfield-input"},null,512),[[n,i.value]])]),t("button",{onClick:e[1]||(e[1]=l=>s.value=a(u).encode(i.value)),class:"child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"},"转义"),t("button",{onClick:e[2]||(e[2]=l=>i.value=a(u).decode(s.value)),class:"child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"},"去转义"),t("div",f,[x,o(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),rows:"10",class:"mdui-textfield-input"},null,512),[[n,s.value]])])]))}});export{w as default};

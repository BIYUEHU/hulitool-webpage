import{d as c,r as n,y as m,o as r,c as v,w as u,z as _,a as o,j as h,u as f,e as x,l as y,k as b,A as g,s as w}from"./index-ac10e691.js";import{o as k,T as V}from"./index-4814f861.js";import{h as C}from"./index-f85a7f05.js";import"./index-5a001f8c.js";import"./index-a9a34364.js";const $=o("h2",null,[o("strong",null,"演示效果")],-1),S=o("label",{class:"mdui-textfield-label"},"选择角色",-1),B=g('<option value="0" selected>随机</option><option value="1">古河渚</option><option value="2">香风智乃</option><option value="3">立华奏</option><option value="4">亚托利</option><option value="5">神户小鸟</option><option value="6">夜羽真白</option><option value="7">Miku</option><option value="8">博丽灵梦</option><option value="9">枣铃</option><option value="10">阿尔托莉雅</option><option value="11">宫水三叶</option>',12),D=[B],N=o("br",null,null,-1),I=["src"],M={class:"mdui-textfield mdui-textfield-not-empty mdui-row"},U=o("label",{class:"mdui-textfield-label"},"内嵌代码",-1),j={class:"mdui-col-xs-9"},z={class:"mdui-col-xs-3"},H=c({__name:"IpcardCom",setup(A){const{proxy:a}=y(),e=n("0"),i=n(""),s="https://api.imlolicon.tk/api/ipcard?apikey=b699b2d60915d83f3723272855240c4c&img=",d=()=>b(a,`<img src="${s}${e.value}" style="width:500px;max-width: 90%;" />`),p=[C(),k];return new a.$mdui.Select("#demo"),m.mutation(),(E,t)=>(r(),v("div",null,[$,S,u(o("select",{class:"mdui-select","mdui-select":"1","onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),id:"demo"},D,512),[[_,e.value]]),N,o("img",{src:s+e.value,class:"huli-image-normal"},null,8,I),o("div",M,[U,o("div",j,[h(f(V),{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),style:{height:"40px"},autofocus:!1,"aria-readonly":"true",extensions:p},null,8,["modelValue"])]),o("div",z,[o("button",{onClick:t[2]||(t[2]=l=>d()),class:"mdui-btn mdui-ripple"},"Copy")])]),u(o("span",null,x(i.value=`<img src="${s}${e.value}" style="width:500px;max-width: 90%;" />`),513),[[w,!1]])]))}});export{H as default};

import{d as h,r as d,j as u,o as a,c as i,b as t,k as v,v as m,e as s,t as l,a as b}from"./index-d9db2b1c.js";const p={class:"mdui-textfield"},g=t("i",{class:"mdui-icon material-icons mdui-text-color-pink-300"},"ondemand_video",-1),f=t("label",{class:"mdui-textfield-label"},"B站BV号或链接",-1),x={class:"mdui-row-xs-1"},k={class:"mdui-col"},y=t("br",null,null,-1),B={key:0,class:"mdui-card mdui-hoverable"},V=t("div",{class:"mdui-card-header mdui-row"},[t("div",{class:"mdui-card-header-title"},[t("h3",null,"解析结果")])],-1),w={class:"mdui-card-content"},D={key:0},C=t("strong",{class:"mdui-text-color-blue"},"解析成功",-1),M=t("br",null,null,-1),N=t("strong",null,"BV号:",-1),U=t("strong",null,"AV号:",-1),j=t("strong",null,"时长:",-1),R=t("br",null,null,-1),T=t("strong",null,"标题:",-1),z=t("br",null,null,-1),A=t("strong",null,"简介:",-1),E=t("br",null,null,-1),I=t("strong",null,"UP主UID:",-1),P=t("strong",null,"视频类型:",-1),S=t("strong",null,"视频大小:",-1),$=t("br",null,null,-1),q=t("strong",null,"视频预览:",-1),F={controls:"",width:"250"},G=["src","type"],H=t("br",null,null,-1),J=t("strong",null,"视频下载:",-1),K=["href"],L=t("br",null,null,-1),O={key:1},Q=t("strong",{class:"mdui-text-color-red"},"解析失败",-1),W=t("br",null,null,-1),X=t("br",null,null,-1),Y=t("div",{class:"mdui-card-header-subtitle"},null,-1),st=h({__name:"BiliCom",setup(Z){const e=d(u("dataRes")),r=d(u("getData")),c=d(u("lib")),o=d("");return(tt,n)=>(a(),i("div",null,[t("div",p,[g,f,v(t("input",{class:"mdui-textfield-input","onUpdate:modelValue":n[0]||(n[0]=_=>o.value=_),maxlength:"30",type:"text"},null,512),[[m,o.value]])]),t("div",x,[t("div",k,[t("button",{onClick:n[1]||(n[1]=_=>o.value&&r.value({msg:o.value})),class:"mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple"},"点击解析")])]),y,e.value?(a(),i("div",B,[V,t("div",w,[e.value[0]&&e.value[0].code===500?(a(),i("div",D,[s(l(c.value.func.tips("解析成功!","rgb(2,181,218)"))+" ",1),C,M,N,s(l(e.value[0].data.bvid)+" ",1),U,s(l(e.value[0].data.aid)+" ",1),j,s(l(e.value[0].data.ctime),1),R,T,s(l(e.value[0].data.title),1),z,A,s(l(e.value[0].data.descr),1),E,I,s(l(e.value[0].data.owner.uid)+" ",1),P,s(l(e.value[1].data.type)+" ",1),S,s(l(Math.floor(e.value[1].data.size/1e6))+"MB",1),$,q,t("video",F,[t("source",{src:e.value[1].data.url,type:"video/"+e.value[1].data.type},null,8,G)]),H,J,t("a",{target:"_blank",href:e.value[1].data.url},"点击此处",8,K),L])):(a(),i("div",O,[s(l(c.value.func.tips("解析失败","pink"),e.value=null)+" ",1),Q,W]))]),X,Y])):b("",!0)]))}});export{st as default};

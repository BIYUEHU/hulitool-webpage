import{d as v,r as u,j as r,o as c,c as _,b as t,k as m,v as h,e as l,t as e,a as p}from"./index-26a23ac2.js";const g={class:"mdui-textfield"},b=t("i",{class:"mdui-icon material-icons mdui-text-color-lime-a700"},"computer",-1),x=t("label",{class:"mdui-textfield-label"},"域名/IP",-1),f={class:"mdui-textfield"},y=t("i",{class:"mdui-icon material-icons mdui-text-color-lime-a700"},"bug_report",-1),k=t("label",{class:"mdui-textfield-label"},"端口",-1),V={class:"mdui-row-xs-1"},C={class:"mdui-col"},D=t("br",null,null,-1),I={key:0,class:"mdui-card mdui-hoverable"},P=t("div",{class:"mdui-card-header mdui-row"},[t("div",{class:"mdui-card-header-title"},[t("h3",null,"查询结果")])],-1),w={class:"mdui-card-content"},B={key:0},N=t("strong",null,"状态:",-1),R=t("span",{class:"mdui-text-color-green"},"在线",-1),j=t("br",null,null,-1),M=t("strong",null,"域名/IP:",-1),T=t("strong",null,"端口:",-1),U=t("br",null,null,-1),E=t("strong",null,"RealIP:",-1),S=t("strong",null,"物理地址:",-1),$=t("br",null,null,-1),q=t("strong",null,"提示信息:",-1),z=t("strong",null,"游戏模式:",-1),A=t("br",null,null,-1),F=t("strong",null,"协议版本:",-1),G=t("strong",null,"游戏版本:",-1),H=t("br",null,null,-1),J=t("strong",null,"在线人数:",-1),K=t("strong",null,"Delay:",-1),L=t("br",null,null,-1),O={key:1},Q=t("span",{class:"mdui-text-color-red"},"离线",-1),W=t("br",null,null,-1),X=t("strong",null,"域名/IP:",-1),Y=t("strong",null,"端口:",-1),Z=t("br",null,null,-1),tt=t("div",{class:"mdui-card-header-subtitle"},null,-1),ot=v({__name:"MotdpeCom",setup(et){const s=u(r("dataRes")),d=u(r("method")),o=u(""),n=u(19132);return(lt,a)=>(c(),_("div",null,[t("div",g,[b,x,m(t("input",{class:"mdui-textfield-input","onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i),maxlength:"30",type:"text"},null,512),[[h,o.value]])]),t("div",f,[y,k,m(t("input",{class:"mdui-textfield-input","onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),maxlength:"6",type:"text"},null,512),[[h,n.value]])]),t("div",V,[t("div",C,[t("button",{onClick:a[2]||(a[2]=i=>o.value&&d.value.getData({ip:o.value,port:n.value?n.value:19132})||d.value.tips(1)),class:"mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple"},"点击查询")])]),D,s.value?(c(),_("div",I,[P,t("div",w,[s.value.data.status==="online"?(c(),_("div",B,[l(e(d.value.tips('<span style="color:lightgreen">服务器在线!</span>'))+" ",1),N,R,j,M,l(e(o.value)+" ",1),T,l(e(n.value),1),U,E,l(e(s.value.data.real)+" ",1),S,l(e(s.value.data.location),1),$,q,l(e(s.value.data.motd)+" ",1),z,l(e(s.value.data.gamemode),1),A,F,l(e(s.value.data.agreement)+" ",1),G,l(e(s.value.data.version),1),H,J,l(e(s.value.data.online)+" / "+e(s.value.data.max)+" ",1),K,l(e(s.value.data.delay),1),L])):(c(),_("div",O,[l(e(d.value.tips('<span style="color:red">服务器离线!</span>'))+" 状态:",1),Q,W,X,l(e(o.value)+" ",1),Y,l(e(n.value),1)]))]),Z,tt])):p("",!0)]))}});export{ot as default};
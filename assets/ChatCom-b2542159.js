import{d as b,r as a,i as h,o,c as n,a as e,w,v as C,u as y,t as L,e as m,f as k,F as B,g as D,p as I,h as S,_ as M}from"./index-ac10e691.js";const d=c=>(I("data-v-a69578b0"),c=c(),S(),c),T={style:{width:"90%","max-width":"700px"}},V={class:"mdui-col-xs-10 mdui-textfield"},z={class:"mdui-row-xs-1 mdui-col-xs-1"},F={class:"mdui-icon material-icons"},N={class:"icon",style:{width:"1em",height:"1em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4602"},R=d(()=>e("path",{d:"M955 125.6c-4.5-12.5-15.4-21.8-28.6-24.2-9.2-1.7-18.4 0.1-26.1 4.8L83.9 544.3c-12.8 6.8-20.6 20.6-19.8 35.1 0.8 14.3 9.9 27.3 23.2 32.9l238.5 97.9c12.4 5.2 26.8 3.4 37.5-4.9s16.1-21.3 14.4-34.8c-1.6-13.2-10.4-24.6-23-29.9l-165-67.7 573-307.3-357 421.9c-6.5 7.7-9.6 17.4-8.8 27.4L411.4 884c1.6 19.7 17.7 34.6 37.5 34.6 9.5 0 18.7-3.7 25.8-10.4l74-69.2 0.1-0.1c13.5-13.2 15.2-33.5 4.8-48.4l222.6 72c4 1.3 7.9 2 11.7 2 18.2 0 33.8-12.9 37-30.6l131.6-688.3h-0.1c1.4-6.6 0.9-13.5-1.4-20zM497.3 783.8L479.9 800l-6.5-75.9L856 271.6l-96.8 506.3L539 706.6c-19.7-6.4-41.1 4.4-47.5 24.2-5.8 17.9 2.5 37.1 18.9 45.4-4.7 1.5-9.2 4-13.1 7.6z","p-id":"4603"},null,-1)),j=[R],A=d(()=>e("br",null,null,-1)),E={class:"mdui-col-xs-12 mdui-row-xs-1 mdui-card mdui-hoverable"},O=d(()=>e("div",{class:"mdui-card-header mdui-row"},[e("div",{class:"mdui-card-header-title"},[e("h4",null,"聊天记录")])],-1)),U={class:"mdui-card-content"},$={key:0},q={key:0,class:"snackbar-me"},G={key:1,class:"snackbar-bot"},H=d(()=>e("br",null,null,-1)),J=d(()=>e("br",null,null,-1)),K=d(()=>e("br",null,null,-1)),P=d(()=>e("div",{class:"mdui-card-header-subtitle"},null,-1)),Q=b({__name:"ChatCom",setup(c){const _=a(h("dataRes")),p=a(h("getData")),r=a([]),i=a(""),u=a({}),f=a(s=>(r.value.push([0,s.msg]),p.value(s),i.value="",!0)),x=a(s=>{_.value={},r.value.push([1,s.msg])});function*g(s){const l=s.split("");for(let t of l)yield t}const v=(s,l)=>{typeof s=="string"&&(x.value({msg:s}),l=s,s=g(s));const t=s.next();t.done===!1&&(u.value[l]=u.value[l]?u.value[l]+=t.value:t.value,setTimeout(()=>v(s,l),.2*1e3))};return(s,l)=>(o(),n("div",T,[e("div",V,[w(e("input",{class:"mdui-textfield-input","onUpdate:modelValue":l[0]||(l[0]=t=>i.value=t),placeholder:"消息内容"},null,512),[[C,i.value]])]),e("div",z,[e("button",{class:"mdui-btn btn",onClick:l[1]||(l[1]=t=>i.value&&f.value({msg:i.value})||y(L)(1))},[e("i",F,[(o(),n("svg",N,j))])])]),A,e("div",E,[O,e("div",U,[_.value.code===500?(o(),n("span",$,m(v(_.value.data)),1)):k("",!0),(o(!0),n(B,null,D(r.value,t=>(o(),n("div",{key:t},[t[0]===0?(o(),n("span",q," 我: "+m(t[1]),1)):(o(),n("span",G," BOT: "+m(u.value[t[1]]),1)),H,J]))),128))]),K,P])]))}});const X=M(Q,[["__scopeId","data-v-a69578b0"]]);export{X as default};

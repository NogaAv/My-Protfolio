(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const d=document.getElementById("canvas1"),l=d.getContext("2d"),v=d.width=2700,I=d.height=700,o="/src/intro-animation/backgroundLayers";let u=3;const f=new Image;f.src=`${o}/layer-1.png`;const m=new Image;m.src=`${o}/layer-2.png`;const w=new Image;w.src=`${o}/layer-3.png`;const p=new Image;p.src=`${o}/layer-4.png`;const y=new Image;y.src=`${o}/layer-5.png`;window.addEventListener("load",function(){class s{constructor(b,E){this.x=0,this.y=0,this.width=2400,this.height=700,this.image=b,this.speedModifier=E,this.speed=u*this.speedModifier}update(){this.speed=u*this.speedModifier,this.x<-this.width&&(this.x=0),this.x-=this.speed}draw(){l.drawImage(this.image,this.x,this.y,this.width,this.height),l.drawImage(this.image,this.x+this.width,this.y,this.width,this.height)}}const e=new s(f,.2),i=new s(m,.4),n=new s(w,.6),t=new s(p,.8),r=new s(y,1),c=[e,i,n,t,r];function h(){l.clearRect(0,0,v,I),c.forEach(a=>{a.update(),a.draw()}),requestAnimationFrame(h)}h()});const g=document.querySelectorAll(".header-main-nav li");g.forEach(s=>s.addEventListener("click",e=>{g.forEach(i=>i.classList.remove("current")),s.classList.add("current")}));const L=new IntersectionObserver(s=>{s.forEach(e=>{e.isIntersecting?e.target.classList.contains("row")?e.target.classList.add("show"):e.target.classList.contains("target-section")&&(e.target.classList.contains("s-about")?document.querySelector('[title="about"]').click():e.target.classList.contains("s-works")?document.querySelector('[title="projects"]').click():e.target.classList.contains("s-contact")?document.querySelector('[title="contact us"]').click():e.target.classList.contains("s-intro")&&document.querySelector('[title="intro"]').click()):e.target.classList.contains("row")&&e.target.classList.remove("show")})}),S=document.querySelectorAll(".row");S.forEach(s=>L.observe(s));const q=document.querySelectorAll("section");q.forEach(s=>L.observe(s));

import{ak as S,a as s,al as p,v as W,R as m,b as f,am as x,an as G,ao as k,s as B,D as E,d as D,C as H,f as T,W as z,g as A,e as I,r as q}from"./OrbitControls-a766af40.js";import{e as F,f as O,o as U,c as V}from"./index-df2c5228.js";const Y={id:"contrainer"},Q={__name:"index",setup(j){let t=null,a=null,n=null,u=null;function g(){t=new D,t.background=new H(16777215)}function h(){a=new T(70,window.innerWidth/window.innerHeight,.1,1e3),a.position.set(200,300,200)}function v(){n=new z({antialias:!0}),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(window.devicePixelRatio)}function b(){u=new A(a,n.domElement)}function w(){if(requestAnimationFrame(w),!(l>1)){if(l+=.009,o){let e=o.getPoint(l);e&&e.x&&i.position.set(e.x,e.y,e.z)}u.update(),a.updateMatrixWorld(),n.render(t,a)}}function P(){const e=new I(16777215,5);e.position.set(20,-50,20),e.castShadow=!0,t.add(e);var c=new q(16777215);c.position.set(400,200,300),t.add(c)}g(),h(),v(),b(),P();var l=0;const o=new S([new s(-80,-40,0),new s(-70,40,0),new s(70,40,0),new s(80,-40,0)],!1),_=new p(o,100,.6,50,!1),r=new W().load("./icon.png");r.wrapS=m,r.wrapT=m,r.repeat.x=20;const y=new f(_,new x({map:r,transparent:!0}));t.add(y);var C=new p(o,100,2,50,!1),M=new x({color:4491519,transparent:!0,opacity:.3}),L=new f(C,M);t.add(L),t.add(new G(300));const d=new k(5,16,16);console.log("geometryP",d);var R=new B({color:16711680,side:E});const i=new f(d,R);return t.add(i),d.rotateY(Math.PI/2),i.position.set(-80,-40,0),console.log(i),F(()=>{document.getElementById("contrainer").appendChild(n.domElement),w()}),O(()=>{}),(e,c)=>(U(),V("div",Y))}};export{Q as default};

(function(t){function a(a){for(var s,r,n=a[0],h=a[1],o=a[2],u=0,i=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&i.push(c[r][0]),c[r]=0;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s]);b&&b(a);while(i.length)i.shift()();return l.push.apply(l,o||[]),e()}function e(){for(var t,a=0;a<l.length;a++){for(var e=l[a],s=!0,n=1;n<e.length;n++){var h=e[n];0!==c[h]&&(s=!1)}s&&(l.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},c={app:0},l=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/alian-game/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],h=n.push.bind(n);n.push=a,n=n.slice();for(var o=0;o<n.length;o++)a(n[o]);var b=h;l.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1d83":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("7a23"),c={id:"app",class:"contain"},l=Object(s["e"])("h2",null,"Which hooman do you want to be?",-1),r={key:1},n={viewBox:"0 -180 1628 1180",class:"main"},h=Object(s["e"])("defs",null,[Object(s["e"])("clipPath",{id:"bottom-clip"},[Object(s["e"])("rect",{class:"bottom-clip-path",x:"1131.5",y:"546.5",width:"406",height:"1000"})]),Object(s["e"])("clipPath",{id:"top-clip"},[Object(s["e"])("rect",{class:"top-clip-path",x:"1131.5",y:"69.5",width:"406",height:"473"})])],-1),o={x:"1000",y:"930",style:{font:"normal 45px 'Recursive","text-transform":"uppercase"},class:"text"},b=Object(s["e"])("path",{fill:"#f0959f",d:"M0 842h657v192H0z"},null,-1),u=Object(s["e"])("g",{id:"friendbubble"},[Object(s["e"])("path",{class:"cls-45",d:"M342.3 471.8h106.6c0 42.6-21.3 63.9-21.3 63.9 64 0 85.3-63.9 85.3-63.9h42.6c42.7 0 42.7-42.7 42.7-42.7s21.3-149.3 21.3-191.9-42.6-42.7-42.6-42.7H321c-42.7 0-42.7 42.7-42.7 42.7l21.4 191.9s0 42.7 42.6 42.7z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-20",d:"M333.8 463.2h106.6c0 42.7-21.3 64-21.3 64 63.9 0 85.3-64 85.3-64H547c42.7 0 42.7-42.6 42.7-42.6s21.3-149.3 21.3-192-42.7-42.6-42.7-42.6H312.4c-42.6 0-42.6 42.6-42.6 42.6l21.3 192s0 42.6 42.7 42.6z",transform:"translate(17)"})],-1),i=Object(s["e"])("g",{id:"alienbubble"},[Object(s["e"])("path",{class:"cls-45",d:"M948.3 344.5c-103.8 0-187.9 76.3-187.9 170.4s84.1 170.3 187.9 170.3a201.5 201.5 0 00100.5-26.4l87.4 26.4-29.1-79.2c18.4-26.4 29.1-57.6 29.1-91.1 0-94.1-84.1-170.4-187.9-170.4z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-20",d:"M938.9 336C835.1 336 751 412.3 751 506.4s84.1 170.3 187.9 170.3a201.5 201.5 0 00100.5-26.4l87.4 26.4-29.1-79.2c18.4-26.4 29.1-57.6 29.1-91.1 0-94.1-84.1-170.4-187.9-170.4z",transform:"translate(17)"})],-1),d={class:"friendtalk"},O={class:"zombietalk"};function j(t,a,e,j,p,f){var v=Object(s["k"])("GamestateStart"),m=Object(s["k"])("Friend"),z=Object(s["k"])("Score"),M=Object(s["k"])("GamestateFinish");return Object(s["g"])(),Object(s["d"])("div",c,["start"===t.uiState?(Object(s["g"])(),Object(s["d"])(v,{key:0},{default:Object(s["p"])((function(){return[l,(Object(s["g"])(!0),Object(s["d"])(s["a"],null,Object(s["i"])(t.characterChoices,(function(t){return Object(s["g"])(),Object(s["d"])("p",{key:t},[Object(s["q"])(Object(s["e"])("input",{"onUpdate:modelValue":a[1]||(a[1]=function(t){return p.characterInput=t}),id:t,value:t,type:"radio",class:"character-choices"},null,8,["id","value"]),[[s["n"],p.characterInput]]),Object(s["e"])("label",{for:t},Object(s["m"])(t),9,["for"])])})),128)),Object(s["e"])("button",{onClick:a[2]||(a[2]=function(){return f.pickCharacter.apply(f,arguments)})},"Pick your character!")]})),_:1})):"characterChosen"===t.uiState?(Object(s["g"])(),Object(s["d"])("section",r,[(Object(s["g"])(),Object(s["d"])("svg",n,[h,Object(s["e"])(m),Object(s["e"])(z),(Object(s["g"])(),Object(s["d"])(Object(s["l"])(t.character))),Object(s["e"])("text",o,Object(s["m"])(t.character),1),b,u,i])),Object(s["e"])("div",d,[Object(s["e"])("h3",null,Object(s["m"])(t.questions[t.questionIdx].question),1)]),Object(s["e"])("div",O,[(Object(s["g"])(!0),Object(s["d"])(s["a"],null,Object(s["i"])(f.shuffle(t.characterChoices),(function(a){return Object(s["g"])(),Object(s["d"])("p",{key:a},[Object(s["e"])("button",{onClick:function(t){return f.pickQuestion(a)}},Object(s["m"])(t.questions[t.questionIdx][a]),9,["onClick"])])})),128))])])):(Object(s["g"])(),Object(s["d"])(M,{key:2}))])}var p=e("5530"),f=e("5502"),v={id:"artist"},m=Object(s["e"])("g",null,[Object(s["e"])("path",{class:"cls-11",d:"M1428.4 934.7h-21v-15a108.3 108.3 0 0121 15zM1450.8 963.1h-15v-21a111.4 111.4 0 0115 21z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-12",d:"M1435.8 942.1v21h-28.4v-28.4h21a86.1 86.1 0 017.4 7.4z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-4",d:"M1407.4 919.7v15h-28.5v-25.8a107.6 107.6 0 0128.5 10.8z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-11",d:"M1378.9 908.9v25.8h-28.4v-28.4h4.4a111 111 0 0124 2.6z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2803.3 1897.9) rotate(180)",d:"M1379 934.7h28.4v28.43H1379z"}),Object(s["e"])("path",{class:"cls-12",transform:"translate(2746.5 1897.9) rotate(180)",d:"M1350.5 934.7h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-4",d:"M1339.1 906.3h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",d:"M1310.7 906.3h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2689.6 1897.9) rotate(180)",d:"M1322.1 934.7h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-12",transform:"translate(2632.8 1897.9) rotate(180)",d:"M1293.7 934.7h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-4",d:"M1293.7 906.3v28.4h-28.5v-25.8a112.6 112.6 0 0124.1-2.6z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-11",d:"M1265.2 908.9v25.8h-28.4v-15a108.3 108.3 0 0128.4-10.8z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2575.9 1897.9) rotate(180)",d:"M1265.2 934.7h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-12",transform:"translate(2519 1897.9) rotate(180)",d:"M1236.8 934.7h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-4",d:"M1236.8 919.7v15h-21a108.3 108.3 0 0121-15z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-11",d:"M1236.8 934.7v28.4h-28.4v-21a86.1 86.1 0 017.4-7.4z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-12",d:"M1208.4 942.1v21h-15a107.1 107.1 0 0115-21z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-4",d:"M1461.6 991.6h-25.8v-28.5h15a107.6 107.6 0 0110.8 28.5z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2860.2 1954.7) rotate(180)",d:"M1407.4 963.1h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",d:"M1464.2 1015.6v4.4h-28.4v-28.4h25.8a111.7 111.7 0 012.6 24z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-12",transform:"translate(2860.2 2011.6) rotate(180)",d:"M1407.4 991.6h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-4",transform:"translate(2803.3 1954.7) rotate(180)",d:"M1379 963.1h28.4v28.43H1379z"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2746.5 1954.7) rotate(180)",d:"M1350.5 963.1h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2803.3 2011.6) rotate(180)",d:"M1379 991.6h28.4v28.43H1379z"}),Object(s["e"])("path",{class:"cls-12",transform:"translate(2746.5 2011.6) rotate(180)",d:"M1350.5 991.6h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-4",transform:"translate(2689.6 1954.7) rotate(180)",d:"M1322.1 963.1h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2632.8 1954.7) rotate(180)",d:"M1293.7 963.1h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2689.6 2011.6) rotate(180)",d:"M1322.1 991.6h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-12",transform:"translate(2632.8 2011.6) rotate(180)",d:"M1293.7 991.6h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-4",transform:"translate(2575.9 1954.7) rotate(180)",d:"M1265.2 963.1h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2519 1954.7) rotate(180)",d:"M1236.8 963.1h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2575.9 2011.6) rotate(180)",d:"M1265.2 991.6h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-12",transform:"translate(2519 2011.6) rotate(180)",d:"M1236.8 991.6h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-4",transform:"translate(2462.2 1954.7) rotate(180)",d:"M1208.4 963.1h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-11",d:"M1208.4 963.1v28.5h-25.8a107.6 107.6 0 0110.8-28.5z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-11",transform:"translate(2462.2 2011.6) rotate(180)",d:"M1208.4 991.6h28.4v28.43h-28.4z"}),Object(s["e"])("path",{class:"cls-12",d:"M1208.4 991.6v28.4h-28.5v-4.4a111.7 111.7 0 012.7-24z",transform:"translate(17)"})],-1),z=Object(s["e"])("path",{class:"cls-13",d:"M1322.1 867.5a71 71 0 00-71.1 71v53.1l71.1-28.5 71.1 28.5v-53.1a71.1 71.1 0 00-71.1-71z",transform:"translate(17)"},null,-1),M=Object(s["e"])("path",{class:"cls-14",d:"M1454.1 677.2l-9.9 63.3-121.8 8-121.9-8-9.8-63.3c-10.4-66.3 40.9-126.2 108-126.2h47.3c67.1 0 118.4 59.9 108.1 126.2z",transform:"translate(17)"},null,-1),g=Object(s["e"])("g",null,[Object(s["e"])("path",{class:"cls-15",d:"M1215.1 722.7h78.6v56.8h-78.6a28.5 28.5 0 01-28.5-28.4 28.5 28.5 0 0128.5-28.4zM1429.7 722.7h-79.2v56.8h79.2a28.4 28.4 0 0028.4-28.4 28.4 28.4 0 00-28.4-28.4z",transform:"translate(17)"})],-1),y=Object(s["e"])("path",{class:"cls-15",d:"M1295.3 862.8h87.5v43.3a43.6 43.6 0 01-43.6 43.6h-.1a43.8 43.8 0 01-43.8-43.8v-43.1z"},null,-1),k=Object(s["e"])("path",{class:"cls-16",d:"M1229.7 658.2h218.7v122.4a109.2 109.2 0 01-109.2 109.2h-.1a109.4 109.4 0 01-109.4-109.4V658.2z"},null,-1),w=Object(s["e"])("path",{class:"cls-17",d:"M1339 718.9a21.9 21.9 0 0121.9 21.9V762h-43.7v-21.3a21.8 21.8 0 0121.8-21.8z"},null,-1),x=Object(s["e"])("path",{class:"cls-18",d:"M1279.4 735.4a13.1 13.1 0 11-13.1-13.1 13.1 13.1 0 0113.1 13.1zM1391 735.4a13.2 13.2 0 11-13.2-13.1 13.2 13.2 0 0113.2 13.1z",transform:"translate(17)"},null,-1),S=Object(s["e"])("path",{class:"cls-14",d:"M1323 908.3h-1.8a108.5 108.5 0 01-108.5-108.4 37.9 37.9 0 0137.8-37.9h143.1a37.9 37.9 0 0137.8 37.9A108.4 108.4 0 011323 908.3z",transform:"translate(17)"},null,-1),q=Object(s["e"])("path",{class:"cls-19",d:"M1373.6 795.5a50.9 50.9 0 01-2.9 17.2 50.4 50.4 0 01-24.7 28.5l-2 1a52.4 52.4 0 01-43.8 0 13.4 13.4 0 01-2.4-1.2 50.5 50.5 0 01-24.4-28.3 53.5 53.5 0 01-2.8-17.2z",transform:"translate(17)"},null,-1),I=Object(s["e"])("path",{class:"cls-20",d:"M1373.6 795.5a50.9 50.9 0 01-2.9 17.2h-97.3a53.5 53.5 0 01-2.8-17.2z",transform:"translate(17)"},null,-1),C=Object(s["e"])("path",{class:"cls-21",d:"M1344 842.2a52.4 52.4 0 01-43.8 0 21.9 21.9 0 0143.8 0z",transform:"translate(17)"},null,-1),V=Object(s["e"])("path",{class:"cls-14",d:"M1258.2 692.6h50.3v13.12h-50.3zM1369.7 692.6h50.3v13.12h-50.3z"},null,-1),H=Object(s["e"])("circle",{class:"cls-20",cx:"1339.1",cy:"991.6",r:"8.9"},null,-1);function P(t,a,e,c,l,r){return Object(s["g"])(),Object(s["d"])("g",v,[m,z,M,g,y,k,w,x,S,q,I,C,V,H])}const A={};A.render=P;var Y=A,L={id:"baker"},_=Object(s["e"])("path",{class:"cls-32",d:"M1470.5 1020h-296.7v-.3a142.3 142.3 0 012.7-27.1 134.3 134.3 0 018.6-27.4 138.4 138.4 0 0143.3-54.8 145 145 0 0120.9-12.9 136.5 136.5 0 0161.2-14.4h23.1a135.8 135.8 0 0161.4 14.5 146.9 146.9 0 0120.8 12.8 139 139 0 0127.3 27.4 136.4 136.4 0 0116 27.4 141.1 141.1 0 018.7 27.4 137.6 137.6 0 012.7 27.4z",transform:"translate(17)"},null,-1),G=Object(s["e"])("path",{class:"cls-4",d:"M1487.5 1020h-296.7v-.3l2.7-27.1h291.3l2.7 27.4z"},null,-1),W=Object(s["e"])("path",{class:"cls-4",d:"M1459.1 965.2h-274a141.3 141.3 0 0116-27.4h242a136.4 136.4 0 0116 27.4zM1415.8 910.4h-187.4a136.1 136.1 0 0182.1-27.3h23.1a137.1 137.1 0 0182.2 27.3z",transform:"translate(17)"},null,-1),F=Object(s["e"])("g",null,[Object(s["e"])("path",{class:"cls-13",d:"M1209.4 828.6h69.9V676.3h-69.9a76.1 76.1 0 00-74.9 62.7 76.2 76.2 0 0074.9 89.6zM1434.9 828.6h-69.8V676.3h69.8a76.2 76.2 0 0175 62.7c8.4 46.6-27.5 89.6-75 89.6z",transform:"translate(17)"})],-1),$=Object(s["e"])("path",{class:"cls-13",d:"M1339.2 551a142 142 0 01142 142A114.1 114.1 0 011367 807.1h-55.7A114.1 114.1 0 011197.2 693a142 142 0 01142-142z"},null,-1),B=Object(s["e"])("path",{class:"cls-33",d:"M1208.2 700.8h82v59.3h-82a29.7 29.7 0 01-29.7-29.7 29.6 29.6 0 0129.7-29.6zM1436.7 700.8h-82.6v59.3h82.6a29.7 29.7 0 0029.7-29.7 29.6 29.6 0 00-29.7-29.6z",transform:"translate(17)"},null,-1),Q=Object(s["e"])("path",{class:"cls-16",d:"M1395 897.6a73.1 73.1 0 01-72.7 67.6h-.1a73.2 73.2 0 01-72.9-67.7 136.5 136.5 0 0161.2-14.4h23.1a135.8 135.8 0 0161.4 14.5z",transform:"translate(17)"},null,-1),J=Object(s["e"])("path",{class:"cls-33",d:"M1293.5 847.1h91.3v45.2a45.5 45.5 0 01-45.5 45.5h-.1a45.7 45.7 0 01-45.7-45.7v-45z"},null,-1),T=Object(s["e"])("rect",{class:"cls-16",x:"1225.1",y:"588.9",width:"228.2",height:"285.29",rx:"114.1"},null,-1),U=Object(s["e"])("circle",{class:"cls-18",cx:"1281",cy:"714",r:"13.7"},null,-1),E=Object(s["e"])("circle",{class:"cls-18",cx:"1397.4",cy:"714",r:"13.7"},null,-1),D=Object(s["e"])("path",{class:"cls-34",d:"M1339.1 696.9a22.9 22.9 0 0122.9 22.9v22.1h-45.6v-22.3a22.7 22.7 0 0122.7-22.7z"},null,-1),R=Object(s["e"])("path",{class:"cls-19",d:"M1390.6 760.1a70.8 70.8 0 01-3.7 22.8 67.5 67.5 0 01-32.9 38 69.4 69.4 0 01-64.1-.3 67.1 67.1 0 01-32.4-37.7 68.2 68.2 0 01-3.8-22.8z",transform:"translate(17)"},null,-1),Z=Object(s["e"])("path",{class:"cls-20",d:"M1390.6 760.1a70.8 70.8 0 01-3.7 22.8h-129.4a68.2 68.2 0 01-3.8-22.8z",transform:"translate(17)"},null,-1),K=Object(s["e"])("path",{class:"cls-21",d:"M1354 820.9a69.4 69.4 0 01-64.1-.3 34.4 34.4 0 0164.1.3z",transform:"translate(17)"},null,-1),N=Object(s["e"])("g",null,[Object(s["e"])("path",{class:"cls-13",d:"M1371.3 581.6h-73.1a90.2 90.2 0 00-90.1 90.2v29a125.2 125.2 0 0093.1-41.5z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-13",d:"M1273 581.6h72.9a90.3 90.3 0 0190.3 90.3v28.9a125.3 125.3 0 01-93.1-41.5z",transform:"translate(17)"})],-1);function X(t,a,e,c,l,r){return Object(s["g"])(),Object(s["d"])("g",L,[_,G,W,F,$,B,Q,J,T,U,E,D,R,Z,K,N])}const tt={};tt.render=X;var at=tt,et={id:"friend"},st=Object(s["e"])("path",{class:"cls-3",d:"M303.8 517.5h34.5a34.5 34.5 0 01-34.5 34.5H131.4a69 69 0 0169-69h137.9a34.5 34.5 0 01-34.5 34.5z",transform:"translate(17)"},null,-1),ct=Object(s["e"])("path",{class:"cls-4",d:"M226 738.2h17.5a103.5 103.5 0 01103.4 103.5H122.8v-.2A103.3 103.3 0 01226 738.2z"},null,-1),lt=Object(s["e"])("path",{class:"cls-35",d:"M269.6 789.3H166.1a43.1 43.1 0 01-43.1-43.1 43.1 43.1 0 0143.1-43.1h103.5a43.1 43.1 0 0143.1 43.1 43.1 43.1 0 01-43.1 43.1z",transform:"translate(17)"},null,-1),rt=Object(s["e"])("path",{class:"cls-36",d:"M289.5 734.6a17.4 17.4 0 01-10.7 16.1L252.3 762l-34.6 14.7-34.3-14.6-26.5-11.3a17.7 17.7 0 01-10.7-16.2 17.6 17.6 0 0117.6-17.6h108.1a17.6 17.6 0 0117.6 17.6z",transform:"translate(17)"},null,-1),nt=Object(s["e"])("path",{class:"cls-6",d:"M269.3 701.5V762l-34.6 14.7-34.3-14.6v-60.6h68.9z"},null,-1),ht=Object(s["e"])("path",{class:"cls-20",d:"M193.4 841.7h-10v-59.9a5 5 0 015-5.1 5 5 0 015 5.1zM252.3 841.7h-10.1v-59.9a5.1 5.1 0 015.1-5.1 5 5 0 015 5.1z",transform:"translate(17)"},null,-1),ot=Object(s["e"])("g",null,[Object(s["e"])("path",{class:"cls-6",d:"M133.2 593.4h62v44.8h-62a22.4 22.4 0 01-22.4-22.5 22.4 22.4 0 0122.4-22.3zM302.4 593.4H240v44.8h62.4a22.5 22.5 0 0022.5-22.5 22.4 22.4 0 00-22.5-22.3z",transform:"translate(17)"})],-1),bt=Object(s["e"])("path",{class:"cls-5",d:"M148.4 552h172.4v86.9a86.2 86.2 0 01-86.2 86.2 86.2 86.2 0 01-86.2-86.2V552z"},null,-1),ut=Object(s["e"])("path",{class:"cls-19",d:"M269.3 638.2a53.5 53.5 0 01-2.8 17.2 50.6 50.6 0 01-24.8 28.7 52.8 52.8 0 01-48.5-.2 50.8 50.8 0 01-24.5-28.5 53.5 53.5 0 01-2.8-17.2z",transform:"translate(17)"},null,-1),it=Object(s["e"])("path",{class:"cls-20",d:"M269.3 638.2a53.5 53.5 0 01-2.8 17.2h-97.8a53.5 53.5 0 01-2.8-17.2z",transform:"translate(17)"},null,-1),dt=Object(s["e"])("path",{class:"cls-21",d:"M241.7 684.1a52.8 52.8 0 01-48.5-.2 26 26 0 0148.5.2z",transform:"translate(17)"},null,-1),Ot=Object(s["e"])("path",{class:"cls-6",d:"M234.6 590.4a17.2 17.2 0 0117.2 17.2v16.7h-34.4v-16.6a17.2 17.2 0 0117.2-17.3z"},null,-1),jt=Object(s["e"])("path",{class:"cls-10",d:"M184 603.4a10.4 10.4 0 11-10.4-10.4 10.3 10.3 0 0110.4 10.4zM271.9 603.4a10.4 10.4 0 01-20.7 0 10.4 10.4 0 1120.7 0z",transform:"translate(17)"},null,-1);function pt(t,a,e,c,l,r){return Object(s["g"])(),Object(s["d"])("g",et,[st,ct,lt,rt,nt,ht,ot,bt,ut,it,dt,Ot,jt])}const ft={};ft.render=pt;var vt=ft,mt={class:"modal"},zt=Object(s["e"])("h1",{id:"header"},"You're an alienzombie.",-1),Mt=Object(s["e"])("p",null," In order to survive on Earth, you have to pretend to be a human on this planet. You took over the body of a nearby hooman, but the trouble is, their best friend showed up! ",-1),gt=Object(s["e"])("p",null," They look suspicious. Answer the questions right to make sure identity is kept secret! ",-1);function yt(t,a,e,c,l,r){return Object(s["g"])(),Object(s["d"])("div",mt,[zt,Mt,gt,Object(s["j"])(t.$slots,"default")])}var kt={};kt.render=yt;var wt=kt,xt={id:"mechanic"},St=Object(s["e"])("path",{class:"cls-3",d:"M1358.4 916.5h-72.5c-68.6 0-121.8-60-113.6-128.1l14.2-117.1A136.6 136.6 0 011322.2 551a136.8 136.8 0 01135.7 120.3l14.1 117.1c8.2 68.1-45 128.1-113.6 128.1z",transform:"translate(17)"},null,-1),qt=Object(s["e"])("path",{class:"cls-4",d:"M1465.7 1020h-286.5v-.3a131.9 131.9 0 0162.5-112.2l4.8-2.8a131.1 131.1 0 0164.7-16.9h22.3a131.9 131.9 0 0164.9 17l4.8 2.8a132.4 132.4 0 0162.5 112.4z",transform:"translate(17)"},null,-1),It=Object(s["e"])("path",{class:"cls-5",d:"M1403.2 907.6v3.4a80.8 80.8 0 01-161.5 0v-3.5l4.8-2.8a131.1 131.1 0 0164.7-16.9h22.3a131.9 131.9 0 0164.9 17z",transform:"translate(17)"},null,-1),Ct=Object(s["e"])("path",{class:"cls-6",d:"M1295.4 855h88.1v43.7a43.9 43.9 0 01-43.9 43.9h-.1a44.1 44.1 0 01-44.1-44.1V855z"},null,-1),Vt=Object(s["e"])("path",{class:"cls-5",d:"M1432.4 707v60.6a110.2 110.2 0 01-220.4 0V707z",transform:"translate(17)"},null,-1),Ht=Object(s["e"])("path",{class:"cls-7",d:"M1388.3 766.8a66.4 66.4 0 01-3.7 22 64.5 64.5 0 01-31.7 36.6 66.8 66.8 0 01-61.9-.2 65.1 65.1 0 01-31.3-36.4 66.3 66.3 0 01-3.6-22z",transform:"translate(17)"},null,-1),Pt=Object(s["e"])("path",{class:"cls-8",d:"M1388.3 766.8a66.4 66.4 0 01-3.7 22h-124.9a66.3 66.3 0 01-3.6-22z",transform:"translate(17)"},null,-1),At=Object(s["e"])("path",{class:"cls-9",d:"M1352.9 825.4a66.8 66.8 0 01-61.9-.2 33.2 33.2 0 0161.9.2z",transform:"translate(17)"},null,-1),Yt=Object(s["e"])("path",{class:"cls-6",d:"M1320.1 709.2h38.2v20a19.1 19.1 0 01-19.1 19.1 19.1 19.1 0 01-19.1-19.1v-20z"},null,-1),Lt=Object(s["e"])("path",{class:"cls-7",d:"M1310.5 707h-8.8c.1 1.4.3 2.9.3 4.4s-.2 3-.3 4.4a32.7 32.7 0 01-64.8 0 32.4 32.4 0 010-8.8h-8.9a32.5 32.5 0 00-.3 4.4 31.5 31.5 0 00.3 4.4 41.5 41.5 0 0082.5 0 31.5 31.5 0 00.3-4.4 32.5 32.5 0 00-.3-4.4zM1416.3 707h-8.9a32.4 32.4 0 010 8.8 32.7 32.7 0 01-64.8 0 32.4 32.4 0 010-8.8h-8.8a32.5 32.5 0 00-.3 4.4 31.5 31.5 0 00.3 4.4 41.5 41.5 0 0082.5 0 31.5 31.5 0 00.3-4.4 32.5 32.5 0 00-.3-4.4z",transform:"translate(17)"},null,-1),_t=Object(s["e"])("path",{class:"cls-5",d:"M1275.3 653.5H1403a46.3 46.3 0 0146.3 46.3v7.2H1229v-7.1a46.3 46.3 0 0146.3-46.4z"},null,-1),Gt=Object(s["e"])("path",{class:"cls-10",d:"M1282.5 712.5a13.2 13.2 0 11-13.2-13.2 13.2 13.2 0 0113.2 13.2z",transform:"translate(17)"},null,-1),Wt=Object(s["e"])("circle",{class:"cls-10",cx:"1392.1",cy:"712.5",r:"13.2"},null,-1),Ft=Object(s["e"])("path",{class:"cls-7",d:"M1229 707h220.4v8.81H1229z"},null,-1);function $t(t,a,e,c,l,r){return Object(s["g"])(),Object(s["d"])("g",xt,[St,qt,It,Ct,Vt,Ht,Pt,At,Yt,Lt,_t,Gt,Wt,Ft])}const Bt={};Bt.render=$t;var Qt=Bt,Jt={id:"zombie"},Tt=Object(s["e"])("path",{class:"cls-22",d:"M1480.5 995.1v24.9h-316.6v-24.9a121.1 121.1 0 0174.5-111.7 130.5 130.5 0 0119.5-6.3l2-.4a117.9 117.9 0 0126.1-2.8h73a117.4 117.4 0 0127.4 3.1l1.9.4a121.2 121.2 0 0192.2 117.7z",transform:"translate(17)"},null,-1),Ut=Object(s["e"])("path",{class:"cls-23",d:"M1405.9 883.2v23.5a83.8 83.8 0 11-167.5 0v-23.3a130.5 130.5 0 0119.5-6.3l2-.4a117.9 117.9 0 0126.1-2.8h73a117.4 117.4 0 0127.4 3.1l1.9.4a120.8 120.8 0 0117.6 5.8z",transform:"translate(17)"},null,-1),Et=Object(s["e"])("path",{class:"cls-24",d:"M1386.4 877v29.7a64.3 64.3 0 11-128.5 0v-29.6l2-.4a117.9 117.9 0 0126.1-2.8h73.1a117.2 117.2 0 0127.3 3.1z",transform:"translate(17)"},null,-1),Dt=Object(s["e"])("path",{class:"cls-24",d:"M1312.4 1000.6v-48.3h17.1v48.3a8.5 8.5 0 01-8.5 8.5 8.6 8.6 0 01-8.6-8.5zM1344.1 982.5v-41.8h17v41.8a8.5 8.5 0 01-8.5 8.5 8.5 8.5 0 01-8.5-8.5z",transform:"translate(17)"},null,-1),Rt=Object(s["e"])("path",{class:"cls-25",d:"M1290.5 843.3h97.4v48.5a48.3 48.3 0 01-48.3 48.3h-.4a48.7 48.7 0 01-48.7-48.7v-48.1z"},null,-1),Zt=Object(s["e"])("path",{class:"cls-26",d:"M1501.8 794.9v52.4h-324.1v-33.7l-17.6 33.7h-17.5v-52.4c0-99.2 80.5-179.6 179.6-179.6a179.6 179.6 0 01179.6 179.6z",transform:"translate(17)"},null,-1),Kt=Object(s["e"])("path",{class:"cls-27",d:"M1322.2 875.7a109.7 109.7 0 01-109.6-109.6v-93.3c0-60.5 49.3-109.6 109.8-109.6a109.6 109.6 0 01109.4 109.6v93.3a109.7 109.7 0 01-109.6 109.6z",transform:"translate(17)"},null,-1),Nt=Object(s["e"])("path",{class:"cls-24",d:"M1200.6 715.7h87.5v63.4h-87.5a32 32 0 01-31.7-32v.2a31.6 31.6 0 0131.7-31.6zM1476.1 747.1a30.8 30.8 0 01-1 8 7.4 7.4 0 00-4.4-1.3 8.2 8.2 0 00-8.2 8.2 8.4 8.4 0 004.6 7.4 31.8 31.8 0 01-22.7 9.7h-88.1v-63.4h88.1a31.5 31.5 0 0131.7 31.4z",transform:"translate(17)"},null,-1),Xt=Object(s["e"])("path",{class:"cls-28",d:"M1443.9 672.8v93.3c0 4.4-.2 8.7-.6 13a121.8 121.8 0 01-72.4 98.6c-2.1 1-4.3 1.8-6.4 2.6a121.5 121.5 0 01-84.6 0c-2.2-.8-4.3-1.6-6.4-2.6a121.6 121.6 0 01-72.4-98.6 112 112 0 01-.7-13v-93.3c0-6.8.9-13.1 2-20.4h34.2c19.8 0 38.2-9.7 48.6-25.9 18-3.5 32.1-19.2 32.1-38.2v-37.1c0-.2 3.6-.2 5.7-.2a120.4 120.4 0 0185.7 35.7c22 22 35.2 52.4 35.2 86.1z",transform:"translate(17)"},null,-1),ta=Object(s["e"])("path",{class:"cls-18",d:"M1278 716.9a14.7 14.7 0 11-14.6-14.6 14.6 14.6 0 0114.6 14.6z",transform:"translate(17)"},null,-1),aa=Object(s["e"])("circle",{class:"cls-29",cx:"1408.2",cy:"715.1",r:"39.8"},null,-1),ea=Object(s["e"])("circle",{class:"cls-18",cx:"1395.7",cy:"733.8",r:"7.8"},null,-1),sa=Object(s["e"])("path",{class:"cls-24",d:"M1299.4 715.7c0 19.5-16.2 36.1-36 36.1a36.4 36.4 0 01-36.1-36.1z",transform:"translate(17)"},null,-1),ca=Object(s["e"])("path",{class:"cls-30",d:"M1306.5 873.9a6.3 6.3 0 01-6.2-6.3v-35h12.1V868a5.9 5.9 0 01-5.9 5.9zM1317.3 551.2v37.1c0 19-14.1 34.7-32.1 38.2-10.4 16.2-28.8 25.9-48.6 25.9h-34.2l16.8-17h17.4c17 0 31.5-9.8 37.5-24.4h3.1c12.3 0 23.1-10.5 23.1-22.7v-22.9z",transform:"translate(17)"},null,-1),la=Object(s["e"])("path",{class:"cls-24",d:"M1403.4 766.9h-52v-28.4h80.4a28.4 28.4 0 01-28.4 28.4z",transform:"translate(17)"},null,-1),ra=Object(s["e"])("path",{class:"cls-24",d:"M1329.4 786.4h19.5v34.09h-19.5z"},null,-1),na=Object(s["e"])("path",{class:"cls-30",d:"M1344.1 834.6v74.3a7.6 7.6 0 01-7.3 7.9c-4.3-.1-7.3-3.6-7.3-7.9v-74.3z",transform:"translate(17)"},null,-1),ha=Object(s["e"])("path",{class:"cls-30",d:"M1344.1 847.2v8.4a25.5 25.5 0 01-13.4 3.8h-18.3a25 25 0 01-12.1-3.8v-8.4z",transform:"translate(17)"},null,-1),oa=Object(s["e"])("path",{class:"cls-18",d:"M1344.1 833.9a13.4 13.4 0 01-13.4 13.3h-17a13.4 13.4 0 01-13.4-13.3 13.4 13.4 0 0113.4-13.4h17a13.4 13.4 0 0113.4 13.4z",transform:"translate(17)"},null,-1),ba=Object(s["e"])("path",{class:"cls-24",d:"M1273.5 851.4v26.3a121.6 121.6 0 01-72.4-98.6 72.4 72.4 0 0172.4 72.3zM1443.3 779.1a121.8 121.8 0 01-72.4 98.6v-26.3a72.4 72.4 0 0172.4-72.3z",transform:"translate(17)"},null,-1),ua=Object(s["e"])("path",{class:"cls-18",d:"M1329.4 738.5h19.5v28.35h-19.5z"},null,-1);function ia(t,a,e,c,l,r){return Object(s["g"])(),Object(s["d"])("g",Jt,[Tt,Ut,Et,Dt,Rt,Zt,Kt,Nt,Xt,ta,aa,ea,sa,ca,la,ra,na,ha,oa,ba,ua])}const da={};da.render=ia;var Oa=da,ja={id:"score",transform:"translate(0 -150)"},pa=Object(s["e"])("g",{id:"rainbow"},[Object(s["e"])("path",{class:"cls-37",d:"M910.9 42.9A177.1 177.1 0 00822 18v57.6h-.1v121.5l72.4-125.5z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-38",d:"M821.9 197.2L761 91.7h.1l-29.2-50.6a179.6 179.6 0 00-66.6 65.5l21.7 12.5z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-39",d:"M998.8 197.1a178.7 178.7 0 00-23.4-88.7l-48.2 27.8L822 197.1h176.8z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-40",d:"M821.9 41.1h.1V18h-2.1a178.2 178.2 0 00-88 23.1l22.5 39 67.5 117h.1z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-41",d:"M975.4 108.4a178.5 178.5 0 00-64.5-65.5l-28.2 48.8L822 197l124-71.7z",transform:"translate(17)"}),Object(s["e"])("path",{class:"cls-42",d:"M821.9 197.1l-105.4-60.9-51.2-29.6a179.1 179.1 0 00-24.5 90.5h181.1z",transform:"translate(17)"})],-1),fa=Object(s["e"])("g",{id:"bad"},[Object(s["e"])("path",{class:"cls-20",d:"M667.6 157.9h4.8c4.1 0 8.3 2.3 8.3 9.7s-4.2 9.8-8.3 9.8v12.9h-4.8zm4.8 14.6c3 0 3.5-1.1 3.5-4.7s-.5-5-3.5-5zM689.6 190.7c-6.4 0-6.4-7-6.4-7v-19.1s0-7 6.4-7 6.3 7 6.3 7v19.1s0 7-6.3 7zm0-28.5c-1.7 0-1.6 2.4-1.6 2.4v19.1s-.1 2.3 1.6 2.3 1.5-2.3 1.5-2.3v-19.1s.1-2.4-1.5-2.4zM705.1 190.7c-6.3 0-6.3-7-6.3-7v-19.1s0-7 6.3-7 6.4 7 6.4 7v19.1s0 7-6.4 7zm0-28.5c-1.6 0-1.5 2.4-1.5 2.4v19.1s-.1 2.3 1.5 2.3 1.6-2.3 1.6-2.3v-19.1s.1-2.4-1.6-2.4zM723.2 190.3l-2.5-13.7h-1.2v13.7h-4.8v-32.4h4.8c5.6 0 8.1 3.3 8.1 9.4 0 3.2-.9 6.1-2.7 7.3l3.1 15.7zm-3.7-27.7v9.6c1.3 0 3.5-.1 3.5-4.8s-2.2-4.8-3.5-4.8z",transform:"translate(17)"})],-1),va=Object(s["e"])("g",{id:"good"},[Object(s["e"])("path",{class:"cls-20",d:"M919.2 169.4v-5.2s.1-2.5-1.7-2.5-1.6 2.5-1.6 2.5v20.2s-.1 2.5 1.6 2.5 1.7-2.5 1.7-2.5v-6.1h-2v-4.1h6.9v16.7h-2.9l-.6-1.6a4.8 4.8 0 01-3.8 2c-6.3 0-5.9-7.3-5.9-7.3v-19.8s0-7.3 6.6-7.3 6.6 7.3 6.6 7.3v5.2zM934 191.3c-6.6 0-6.6-7.3-6.6-7.3v-19.8s0-7.3 6.6-7.3 6.6 7.3 6.6 7.3V184s0 7.3-6.6 7.3zm0-29.6c-1.7 0-1.6 2.5-1.6 2.5V184s-.1 2.5 1.6 2.5 1.7-2.5 1.7-2.5v-19.8s0-2.5-1.7-2.5zM950.2 191.3c-6.6 0-6.6-7.3-6.6-7.3v-19.8s0-7.3 6.6-7.3 6.6 7.3 6.6 7.3V184s0 7.3-6.6 7.3zm0-29.6c-1.7 0-1.6 2.5-1.6 2.5V184s-.1 2.5 1.6 2.5 1.7-2.5 1.7-2.5v-19.8s0-2.5-1.7-2.5zM964 190.9h-3.9v-33.6h3.9c9.2 0 9.9 3.7 9.9 16.8s-.7 16.8-9.9 16.8zm1.1-4.9c3.5 0 3.7-.9 3.6-11.9s-.1-11.9-3.6-11.9z",transform:"translate(17)"})],-1),ma=Object(s["e"])("g",{id:"needle"},[Object(s["e"])("path",{id:"point",class:"cls-43",d:"M839 188.6L824.4 70.8a1.9 1.9 0 00-3.8 0l-15.1 117.4.4-.2c9.9-6.4 23.9-5.9 33.1.6z",transform:"translate(17)"}),Object(s["e"])("circle",{class:"cls-44",cx:"821.9",cy:"196.1",r:"22",transform:"translate(-3.7 133.1) rotate(-9.1)"})],-1);function za(t,a,e,c,l,r){return Object(s["g"])(),Object(s["d"])("g",ja,[pa,fa,va,ma])}var Ma=e("cffa"),ga={computed:Object(p["a"])({},Object(f["b"])(["score"])),watch:{score:function(t){Ma["a"].to("#needle",{duration:.3,rotation:t,transformOrigin:"50% 87%"})}}};ga.render=za;var ya=ga,ka={class:"modal"},wa={key:0},xa=Object(s["e"])("h2",null,"You won!",-1),Sa={key:1},qa=Object(s["e"])("h2",null,"You lost",-1),Ia={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 131 131","aria-labelledby":"face",role:"presentation",width:"70",height:"70"},Ca=Object(s["e"])("title",{id:"face"},"Face Icon",-1),Va=Object(s["e"])("circle",{class:"cls-1",cx:"65.5",cy:"65.5",r:"64"},null,-1),Ha=Object(s["e"])("circle",{class:"cls-2",cx:"95",cy:"65.8",r:"7.5"},null,-1),Pa=Object(s["e"])("circle",{class:"cls-2",cx:"36",cy:"65.8",r:"7.5"},null,-1);function Aa(t,a,e,c,l,r){return Object(s["g"])(),Object(s["d"])("div",ka,["won"===t.uiState?(Object(s["g"])(),Object(s["d"])("div",wa,[xa])):(Object(s["g"])(),Object(s["d"])("div",Sa,[qa])),(Object(s["g"])(),Object(s["d"])("svg",Ia,[Ca,Va,Ha,Pa,Object(s["e"])("path",{class:["lost"===t.uiState?"frown":"","cls3"],d:"M51,97s6,10,23,10S95,97,95,97",transform:"translate(-8.5 -5.5)"},null,2)])),Object(s["e"])("p",null,[Object(s["e"])("button",{onClick:a[1]||(a[1]=function(){return r.restart.apply(r,arguments)})}," Let's play again! ")])])}var Ya={computed:Object(p["a"])({},Object(f["b"])(["uiState"])),methods:{restart:function(){this.$store.commit("restartGame")}}};e("c65d");Ya.render=Aa;var La=Ya,_a={components:{Friend:vt,Score:ya,GamestateStart:wt,Artist:Y,Baker:at,Mechanic:Qt,Zombie:Oa,GamestateFinish:La},data:function(){return{characterInput:""}},methods:{pickCharacter:function(){this.$store.commit("pickCharacter",this.characterInput),this.$store.commit("updateUIState","characterChosen")},pickQuestion:function(t){this.$store.commit("pickQuestion",t)},shuffle:function(t){for(var a=t.length-1;a>0;a--){var e=Math.floor(Math.random()*(a+1)),s=t[a];t[a]=t[e],t[e]=s}return t}},computed:Object(p["a"])({},Object(f["b"])(["uiState","questions","characterChoices","character","questionIdx"]))};e("9cdc");_a.render=j;var Ga=_a,Wa=(e("2af1"),Object(f["a"])({state:{uiState:"start",characterChoices:["baker","mechanic","artist"],character:"",questionIdx:0,score:0,questions:[{question:"What's your dog's name?",baker:"Woofgang Puck",mechanic:"Alf",artist:"Salvador Dogi"},{question:"What's your favorite hobby?",baker:"Extreme ironing",mechanic:"Bacon santa cosplay",artist:"Mimosas"},{question:"What's your favorite color?",baker:"turquoise",mechanic:"yellow",artist:"transparent"},{question:"Is cereal soup?",baker:"You can't be serieal",mechanic:"Yes, I am Jason Lengstorf",artist:"wut"},{question:"What’s the most imaginative insult you can come up with?",baker:"You're a substitute teacher with no lesson plan",mechanic:"Yer face is a melted welly",artist:"You eat buttons off the remote"},{question:"If peanut butter wasn’t called peanut butter, what would it be called?",baker:"legoome",mechanic:"brown paste",artist:"groundnut smoosh"}]},mutations:{pickCharacter:function(t,a){t.character=a},updateUIState:function(t,a){t.uiState=a},pickQuestion:function(t,a){a===t.character?t.score+=13:t.score-=13,t.questionIdx<t.questions.length-1?t.questionIdx++:Math.sign(t.score)>0?t.uiState="won":t.uiState="lost"},restartGame:function(t){t.uiState="start",t.score=0,t.questionIdx=0}},actions:{},modules:{}}));Object(s["c"])(Ga).use(Wa).mount("#app")},"9cdc":function(t,a,e){"use strict";e("c701")},c65d:function(t,a,e){"use strict";e("1d83")},c701:function(t,a,e){}});
//# sourceMappingURL=app.e529a6ec.js.map
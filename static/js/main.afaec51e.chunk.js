(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{75:function(e,a,n){e.exports=n(89)},83:function(e,a,n){},84:function(e,a,n){},89:function(e,a,n){"use strict";n.r(a);var t,r,i,l,c,m,o,s=n(0),d=n.n(s),u=n(60),g=n.n(u),p=(n(83),n(11)),h=n(16),f=(n(84),n(15)),b=function(){var e=localStorage.getItem("bite2eat:pantry");if(!e)return[];try{return JSON.parse(e)}catch(a){return[]}},E=function(){var e=Object(s.useState)(b()),a=Object(p.a)(e,2),n=a[0],t=a[1];return Object(s.useEffect)(function(){var e;e=n,localStorage.setItem("bite2eat:pantry",JSON.stringify(e))},[n]),{items:n,addItem:function(e){t(Object(f.a)(n).concat([e]))},removeItem:function(e){t(n.filter(function(a){return a!==e}))}}},P=n(9),O=n(110),y=n(116),j=n(117),k=n(64),v=n.n(k),C=n(65),S=n.n(C),I=[{categoryName:"Vegetables",ingredients:[{name:"Potato",selected:!1},{name:"Sweet Potato",selected:!1},{name:"Cauliflower",selected:!1},{name:"Squash",selected:!1},{name:"Cabbage",selected:!1},{name:"Spinach",selected:!1},{name:"Brocolli",selected:!1},{name:"Peas",selected:!1},{name:"Green Capsicum",selected:!1},{name:"Mushroom",selected:!1},{name:"Carrot",selected:!1},{name:"Bottle Gourd",selected:!1},{name:"Spring Onion",selected:!1}]},{categoryName:"Legumes",ingredients:[{name:"Besan",selected:!1},{name:"Chickpea",selected:!1},{name:"Black Chana",selected:!1},{name:"Black Eyed Peas",selected:!1},{name:"Tur Dal",selected:!1},{name:"Chana Dal",selected:!1},{name:"Masoor Dal",selected:!1},{name:"Urad Dal",selected:!1},{name:"Kidney Beans",selected:!1},{name:"Moong Dal",selected:!1}]},{categoryName:"Essentials",ingredients:[{name:"Tomato",selected:!1},{name:"Onion",selected:!1},{name:"Bread",selected:!1},{name:"Garlic",selected:!1},{name:"Ginger",selected:!1},{name:"Pasta",selected:!1},{name:"Flour",selected:!1},{name:"Rice",selected:!1}]},{categoryName:"Herbs / Spices",ingredients:[{name:"Cilantro",selected:!1},{name:"Basil",selected:!1},{name:"Parsley",selected:!1}]},{categoryName:"Meats",ingredients:[{name:"Mutton",selected:!1},{name:"Chicken",selected:!1},{name:"Fish",selected:!1},{name:"Shrimp",selected:!1}]},{categoryName:"Dairy & Eggs",ingredients:[{name:"Milk",selected:!1},{name:"Egg",selected:!1},{name:"Paneer",selected:!1},{name:"Yoghurt",selected:!1},{name:"Cheese",selected:!1}]}],w=n(112),M=n(113),B=n(107),D=n(114),x=n(63),G=n.n(x),N=n(111),A=Object(P.a)(O.a)(t||(t=Object(h.a)(["\n  padding: 10px;\n"]))),F=function(e){var a=e.name,n=e.selected,t=e.onClick;return d.a.createElement(A,{onClick:t},d.a.createElement(N.a,{variant:n?"filled":"outlined",label:a}))},R=function(e){var a=b(),n=Object(s.useState)(e.map(function(e){return{name:e.name,selected:a.includes(e.name)}})),t=Object(p.a)(n,2),r=t[0],i=t[1];return{items:r,toggleItem:function(e){var a=Object(f.a)(r),n=a.findIndex(function(a){return a.name===e});-1!==n&&(a[n].selected=!a[n].selected,i(a))}}},T=Object(P.a)(w.a)(r||(r=Object(h.a)(["\n  background-color: lightblue;\n"]))),L=Object(P.a)(M.a)(i||(i=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),J=Object(P.a)(D.a)(l||(l=Object(h.a)(["\n  margin-bottom: 1rem;\n"]))),K=function(e){var a=e.categoryName,n=e.ingredients,t=e.addItem,r=e.removeItem,i=R(n),l=i.items,c=i.toggleItem;return d.a.createElement(J,null,d.a.createElement(B.a,{defaultExpanded:!0},d.a.createElement(T,{expandIcon:d.a.createElement(G.a,null)},a),d.a.createElement(L,null,l.map(function(e){return d.a.createElement(F,Object.assign({key:e.name},e,{onClick:function(){c(e.name),e.selected?t(e.name):r(e.name)}}))}))))},U=function(e){var a=e.addItem,n=e.removeItem;return d.a.createElement(O.a,{sx:{width:500}},I.map(function(e){return d.a.createElement(K,Object.assign({key:e.categoryName},e,{addItem:a,removeItem:n}))}))},q=[{name:"Aloo Paratha",ingredients:["Potato","Flour"]},{name:"Palak Paratha",ingredients:["Spinach","Flour"]},{name:"Gobi Paratha",ingredients:["Cauliflower","Flour"]},{name:"Aloo Gobi",ingredients:["Potato","Cauliflower"]},{name:"Aloo Palak",ingredients:["Potato","Spinach"]},{name:"Aloo Matar",ingredients:["Potato","Peas"]},{name:"Aloo Jeera",ingredients:["Potato"]},{name:"Dum Aloo",ingredients:["Potato"]},{name:"Matar Paneer",ingredients:["Paneer","Peas"]},{name:"Paneer Do Pyaaza",ingredients:["Paneer","Onion","Green Capsicum"]},{name:"Palak Paneer",ingredients:["Spinach","Paneer"]},{name:"Potato Gnocchi",ingredients:["Potato","Flour"]},{name:"Sweet Potato Gnocchi",ingredients:["Sweet Potato","Flour"]},{name:"Spaghetti Aglio Olio",ingredients:["Pasta","Garlic"]},{name:"Red Pasta",ingredients:["Pasta","Tomato"]},{name:"Shrimp Masala",ingredients:["Shrimp"]},{name:"Mushroom Masala",ingredients:["Mushroom"]},{name:"Pav Bhaji",ingredients:["Carrot","Potato","Tomato","Onion","Green Capsicum","Peas"]},{name:"Egg Bhurji",ingredients:["Egg"]},{name:"Egg Fried Rice",ingredients:["Egg","Rice"]},{name:"Lauki Sabji",ingredients:["Bottle Gourd"]},{name:"Lauki Thalipeeth",ingredients:["Bottle Gourd"]},{name:"Aite",ingredients:["Spring Onion","Rice"]},{name:"Pithla",ingredients:["Besan"]},{name:"Masoor Dal",ingredients:["Masoor Dal"]},{name:"Tur Dal",ingredients:["Tur Dal"]},{name:"Dal Makhni",ingredients:["Urad Dal","Kidney Beans"]},{name:"Chavli chi bhaji",ingredients:["Black Eyed Peas"]},{name:"Moong Dal",ingredients:["Moong Dal"]},{name:"Chole",ingredients:["Chickpea"]},{name:"Chane",ingredients:["Black Chana"]}],z=Object(P.a)(D.a)(c||(c=Object(h.a)(["\n  padding: 1rem;\n"]))),H=Object(P.a)(O.a)(m||(m=Object(h.a)(["\n  display: flex;\n"]))),V=function(e){var a=e.recipe,n=a.name,t=a.ingredients;return d.a.createElement(z,null,d.a.createElement("p",null,n),d.a.createElement(H,null,t.map(function(e){return d.a.createElement(F,{key:e,name:e,selected:!1})})))},Y=function(e){var a=e.pantryList,n=q.filter(function(e){for(var n=0;n<e.ingredients.length;n++)if(-1===a.indexOf(e.ingredients[n]))return!1;return!0});return d.a.createElement(O.a,{sx:{width:500}},n.map(function(e){return d.a.createElement(V,{key:e.name,recipe:e})}))},Q=Object(P.a)(O.a)(o||(o=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));var W=function(){var e=E(),a=e.items,n=e.addItem,t=e.removeItem,r=d.a.useState(0),i=Object(p.a)(r,2),l=i[0],c=i[1];return d.a.createElement(Q,{className:"App"},d.a.createElement("header",{className:"App-header"},d.a.createElement(O.a,{sx:{width:500}},d.a.createElement(y.a,{showLabels:!0,value:l,onChange:function(e,a){c(a)}},d.a.createElement(j.a,{label:"Pantry",icon:d.a.createElement(v.a,null)}),d.a.createElement(j.a,{label:"Recipes",icon:d.a.createElement(S.a,null)})))),0===l?d.a.createElement(U,{addItem:n,removeItem:t}):d.a.createElement(d.a.Fragment,null),1===l?d.a.createElement(Y,{pantryList:a}):d.a.createElement(d.a.Fragment,null))};g.a.createRoot(document.getElementById("root")).render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(W,null)))}},[[75,1,2]]]);
//# sourceMappingURL=main.afaec51e.chunk.js.map
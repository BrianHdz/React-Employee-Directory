(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","occupation":"Fry Cook","location":"A Pineapple Under the Sea","age":21},{"id":2,"name":"Mr. Krabs","occupation":"Owner","location":"A Giant Anchor","age":52},{"id":3,"name":"Squidward","occupation":"Cashier","location":"An Easter Island Head","age":33},{"id":4,"name":"Dexter","occupation":"Supervisor","location":"A Secret Laboratory","age":11},{"id":5,"name":"Courage","occupation":"Supervisor","location":"Nowhere, Kansas","age":3},{"id":6,"name":"Doug Funnie","occupation":"Attorney","location":"Bluffington","age":16},{"id":7,"name":"Bugs Bunny","occupation":"Software Dev","location":"A Rabbit Burrow","age":27},{"id":8,"name":"Johnny Bravo","occupation":"Software Dev","location":"Aron City","age":25},{"id":9,"name":"Tommy Pickles","occupation":"Software Dev","location":"California","age":1},{"id":10,"name":"Rocko","occupation":"Software Dev","location":"O-Town, California","age":30},{"id":11,"name":"Captain Planet","occupation":"Janitor","location":"Earth","age":1000000},{"id":12,"name":"Ickis","occupation":"Manager","location":"Under a City Dump","age":14}]')},,,function(e,a,n){e.exports=n(15)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(2),c=n.n(r),i=n(3),l=n(4),u=n(7),s=n(6);var m=function(e){return o.a.createElement("button",{onClick:e.cb,className:"btn btn-success"},"Sort by Age")};var g=function(e){return o.a.createElement("div",{className:"container"},e.children)};var d=function(e){return o.a.createElement("button",{onClick:e.cb,className:"btn btn-danger"},"Sort by Name")};var p=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand",href:"/"},o.a.createElement("h1",null,"Employee Directory")))};n(13);var f=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Name:")," ",e.name),o.a.createElement("li",null,o.a.createElement("strong",null,"Age:")," ",e.age),o.a.createElement("li",null,o.a.createElement("strong",null,"Occupation:")," ",e.occupation),o.a.createElement("li",null,o.a.createElement("strong",null,"Location:")," ",e.location))))},b=n(5),E=function(e){Object(u.a)(n,e);var a=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={friends:b},e.sortNames=function(){var a=e.state.friends.sort((function(e,a){return e.name>a.name?1:-1}));e.setState({friends:a}),console.log("hello")},e.sortAges=function(){console.log("HELLLO");var a=e.state.friends.sort((function(e,a){return e.age>a.age?1:-1}));e.setState({friends:a})},e}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(g,null,o.a.createElement(p,null,"Friends List"),o.a.createElement(d,{cb:this.sortNames})," ",o.a.createElement(m,{cb:this.sortAges}),this.state.friends.map((function(e){return o.a.createElement(f,{name:e.name,age:e.age,occupation:e.occupation,location:e.location})})))}}]),n}(t.Component);n(14);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.bffd83cc.chunk.js.map
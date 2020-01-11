(this.webpackJsonpreact_quiz=this.webpackJsonpreact_quiz||[]).push([[0],[,function(e){e.exports=JSON.parse('{"questions":[{"question":"What is the scientific name of a butterfly?","answers":["Apis","Coleoptera","Formicidae","Rhopalocera"],"correctIndex":3},{"question":"How hot is the surface of the sun?","answers":["1,233 K","5,778 K","12,130 K","101,300 K"],"correctIndex":1},{"question":"Who are the actors in The Internship?","answers":["Ben Stiller, Jonah Hill","Courteney Cox, Matt LeBlanc","Kaley Cuoco, Jim Parsons","Vince Vaughn, Owen Wilson"],"correctIndex":3},{"question":"What is the capital of Spain?","answers":["Berlin","Buenos Aires","Madrid","San Juan"],"correctIndex":2},{"question":"What are the school colors of the University of Texas at Austin?","answers":["Black, Red","Blue, Orange","White, Burnt Orange","White, Old gold, Gold"],"correctIndex":2},{"question":"What is 70 degrees Fahrenheit in Celsius?","answers":["18.8889","20","21.1111","158"],"correctIndex":2},{"question":"When was Mahatma Gandhi born?","answers":["October 2, 1869","December 15, 1872","July 18, 1918","January 15, 1929"],"correctIndex":0},{"question":"How far is the moon from Earth?","answers":["7,918 miles (12,742 km)","86,881 miles (139,822 km)","238,400 miles (384,400 km)","35,980,000 miles (57,910,000 km)"],"correctIndex":2},{"question":"What is 65 times 52?","answers":["117","3120","3380","3520"],"correctIndex":2},{"question":"How tall is Mount Everest?","answers":["6,683 ft (2,037 m)","7,918 ft (2,413 m)","19,341 ft (5,895 m)","29,029 ft (8,847 m)"],"correctIndex":3},{"question":"When did The Avengers come out?","answers":["May 2, 2008","May 4, 2012","May 3, 2013","April 4, 2014"],"correctIndex":1},{"question":"What is 48,879 in hexidecimal?","answers":["0x18C1","0xBEEF","0xDEAD","0x12D591"],"correctIndex":1}]}')},,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),o=n.n(s),l=(n(11),n(5)),c=n(2),i=function(e){var t=e.percentage;return r.a.createElement("div",{style:{width:"100%",height:"30px"},className:"bg-gray-800 mt-4 rounded"},r.a.createElement("div",{style:{width:"100%"},className:"text-center z-50 text-white font-bold absolute mt-1"},t),r.a.createElement("div",{style:{width:t,height:"100%"},className:"bg-green-600 rounded-l"}))},m=function(e){var t=e.questions,n=e.questionNumber,a=e.selectOption,s=e.answerValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-xl md:text-4xl bg-gray-900 text-white w-3/4 mx-auto p-4 text-center font-bold uppercase rounded-lg"},"Question ",n+1),r.a.createElement(i,{percentage:(n/t.length*100).toFixed(0)+"%"}),r.a.createElement("div",{className:"bg-gray-300 p-8 mt-4 mx-auto shadow-md"},r.a.createElement("p",{className:"text-center lg:text-left text-lg sm:text-xl lg:text-2xl font-bold"},t[n].question),r.a.createElement("br",null),t[n].answers.map((function(e,t){var o=s[n]===e;return r.a.createElement(r.a.Fragment,{key:t},!0===o?r.a.createElement("button",{value:e,onClick:a,className:"w-full focus:outline-none text-left text-sm md:text-xl my-2 bg-green-200 p-3 cursor-pointer"},e):r.a.createElement("button",{value:e,onClick:a,className:"w-full focus:outline-none text-left text-sm md:text-xl my-2 bg-gray-100 hover:bg-gray-200 p-3 cursor-pointer"},e))}))))},u=n(1),d=function(e){var t=e.answers,n=e.questions,a=e.tryAgain,s=0;return t.map((function(e,t){return n.questions[t].answers[n.questions[t].correctIndex]===e&&s++,s})),r.a.createElement("div",{className:"text-center w-full"},r.a.createElement("h1",{className:"text-2xl md:text-4xl bg-gray-900 text-white w-3/4 md:w-1/2 mx-auto p-4 text-center font-bold uppercase rounded-lg"},"Answers"),r.a.createElement("div",{className:"bg-gray-200 p-4 mt-4 mx-auto w-11/12 md:w-3/4 shadow-md"},r.a.createElement("h1",{className:"text-2xl sm:text-4xl"},"You scored ",r.a.createElement("strong",null,s,"/",n.questions.length,"!")),r.a.createElement("div",{className:"md:flex md:flex-wrap md:justify-center mt-4 mb-4"},t.map((function(e,t){var a=n.questions[t].answers[n.questions[t].correctIndex];return r.a.createElement("div",{key:t,className:"md:w-5/12 lg:w-1/3 xl:w-1/4 m-4 bg-gray-300 py-6 rounded-lg shadow-inner"},r.a.createElement("h1",{className:"font-bold text-xl"},"Q",t+1,":"),r.a.createElement("h1",{className:"text-lg mx-4"},n.questions[t].question),e===a?r.a.createElement("h2",{className:"mx-4 mt-2 text-green-600"},r.a.createElement("strong",null,"Correct!"),' Answer: "',a,'"'):r.a.createElement("h2",{className:"mx-4 mt-2 text-red-600"},r.a.createElement("strong",null,"Wrong!"),' Answer: "',a,'"'))})))),r.a.createElement("button",{className:"bg-orange-500 focus:outline-none hover:bg-orange-400 text-lg text-white mx-2 mt-8 py-5 px-10 font-bold rounded w-3/4 md:w-1/4",onClick:a},"Try Again"))},x=function(e){var t=e.nextStep;return r.a.createElement("div",{className:"h-screen flex flex-col justify-center items-center"},r.a.createElement("div",{className:"bg-gray-300 w-11/12 md:w-1/2 py-16 text-center shadow-md"},r.a.createElement("h1",{className:"text-5xl font-bold"},"QUIZ"),r.a.createElement("p",{className:"italic mb-10"},"Created using React"),r.a.createElement("button",{onClick:t,className:"bg-green-500 hover:bg-green-400 focus:outline-none text-white text-xl py-4 px-10 rounded-lg"},"Click To Start")))},g=function(){var e=Object(a.useState)(1),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(0),i=Object(c.a)(o,2),g=i[0],h=i[1],f=Object(a.useState)(new Array(u.questions.length).fill("")),w=Object(c.a)(f,2),b=w[0],p=w[1],E=function(){s(n+1)};return 1===n?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{nextStep:E})):2===n?r.a.createElement("div",{className:"h-full sm:h-screen flex flex-col justify-center items-center"},r.a.createElement("div",{className:"relative mt-4 md:mt-0 w-3/4 md:w-1/2"},r.a.createElement(m,{questionNumber:g,questions:u.questions,selectOption:function(e){b[g]=e.target.value,p(Object(l.a)(b))},answerValue:b})),r.a.createElement("div",{className:"flex md:static mb-6"},g>0&&r.a.createElement("button",{className:"bg-red-500 focus:outline-none hover:bg-red-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-3 rounded",onClick:function(){h(g-1)}},"Previous Question"),g+1<u.questions.length&&r.a.createElement("button",{className:"bg-blue-500 focus:outline-none hover:bg-blue-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-3 rounded",onClick:function(){h(g+1)}},"Next Question"),g+1===u.questions.length&&r.a.createElement("button",{className:"bg-green-500 focus:outline-none hover:bg-green-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-8 rounded",onClick:E},"Submit"))):3===n?r.a.createElement("div",{className:"flex justify-center items-center my-6"},r.a.createElement(d,{answers:b,questions:u,tryAgain:function(){s(2),h(0),p(new Array(u.questions.length).fill(""))}})):void 0};var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.8833aaed.chunk.js.map
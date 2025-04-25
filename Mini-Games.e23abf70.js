!function(){let e=document.querySelector(".js-games"),t=[{id:1,name:"Перевір в який рік ти народився",class:"standart"},{id:2,name:"Name-2",class:"standart"},{id:3,name:"Name-3",class:"standart"},{id:4,name:"Калькулятор",class:"standart"}].map(e=>`<li class="reset-li ${e.class}" id=${e.id}>
    <h2 class="flexcenter">${e.name}</h2>
    </li>
    <div class="flexcenter"><div class="line flexcenter"></div></div>`);e.insertAdjacentHTML("afterend",t),document.getElementById("3");let n=document.body,u=document.createElement("div");u.className="game-container";let c=document.createElement("h2");c.textContent="Камінь-Ножиці-Папір";let l=document.createElement("div");l.className="choices";let a=document.createElement("div"),s=document.createElement("button");s.className="choice computer-choice",s.textContent="Комп'ютер вибір";let d=["rock","paper","scissors"];d.forEach(e=>{let t=document.createElement("button");t.className="choice",t.id=e,l.appendChild(t)});let i=document.createElement("div");i.id="result";let o=document.createElement("div");o.id="score";let p=document.createElement("p");p.innerHTML='Ваш рахунок: <span id="player-score">0</span>';let r=document.createElement("p");r.innerHTML="Рахунок комп'ютера: <span id='computer-score'>0</span>",o.appendChild(p),o.appendChild(r),a.appendChild(s),a.appendChild(l),a.appendChild(o),u.appendChild(a),u.appendChild(c),u.appendChild(l),u.appendChild(i),u.appendChild(o),n.appendChild(u);let m=0,b=0;document.querySelectorAll(".choice").forEach(e=>{e.addEventListener("click",()=>{var t,n,u;let c=e.id,l=d[Math.floor(3*Math.random())],a=(t=c)===(n=l)?"draw":"rock"===t&&"scissors"===n||"scissors"===t&&"paper"===n||"paper"===t&&"rock"===n?"win":"lose";"win"===(u=a)&&m++,"lose"===u&&b++,document.getElementById("player-score").textContent=m,document.getElementById("computer-score").textContent=b,function(e,t){let n={win:`\u{412}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{43C}\u{43E}\u{433}\u{43B}\u{438}!`,lose:`\u{412}\u{438} \u{43F}\u{440}\u{43E}\u{433}\u{440}\u{430}\u{43B}\u{438}!`,draw:`\u{41D}\u{456}\u{447}\u{438}\u{44F}!`};document.getElementById("result").textContent=n[e],s.textContent=`\u{412}\u{430}\u{440}\u{456}\u{430}\u{43D}\u{442} \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440}\u{430}: ${({rock:"STONE",paper:"PAPER",scissors:"SCISSORS"})[t]}`}(a,l)})});let E=document.getElementById("1"),v=[{class:"inp flexcenter"}].map(e=>`<h2></h2>
        <div class="${e.class}">
        <input type="number" name="Year born" class="ybc" id="ybc" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}" class="ybc">
        
        <button id="ybck" class="ybck" type="button"><img src="./images/Group104.svg" alt="search"></button>
        <p class="p-answer">...</p>
        </div>`);E.insertAdjacentHTML("beforeend",v),document.getElementById("ybck").addEventListener("click",()=>{let e=document.querySelector(".p-answer"),t=document.getElementById("ybc").value;console.log(t%4==0&&t%100!=0||t%400==0),t%4==0&&t%100!=0||t%400==0?(e.classList.toggle("green"),e.textContent="Ви народилися у високосний рік!",console.log("Ви народилися у високосний рік!")):(e.classList.toggle("red"),e.textContent="Ви народилися у звичайний рік!")});let y=document.getElementById("4"),h=[{class:"calc flexcenter"}].map(e=>`<div class="${e.class}">
    <input type="number" name="inp" id="input1" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" class="input1 input">
    <div class="type">
        <div class="part1">
            <button class="btn-calc" id="plusb"><p class="btn-col-p">+</p></button>
            <button class="btn-calc" id="multiplicationb"><p class="btn-col-p">*</p></button>
        </div>
        <div class="par2">
            <button class="btn-calc" id="minusb"><p class="btn-col-p">-</p></button>
            <button class="btn-calc" id="divisionb"><p class="btn-col-p">/</p></button>
        </div>
    </div>
    <input type="number" name="inp2" id="input2" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" class="input2 input">
    <p class="jsfp">=</p>
    <p id='output' class='input inpp'>\u{420}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442}</p>
    
</div>`);y.insertAdjacentHTML("beforeend",h);let C=document.getElementById("output"),g=document.getElementById("input1"),B=document.getElementById("input2"),x=document.getElementById("plusb"),I=document.getElementById("minusb"),f=document.getElementById("multiplicationb"),k=document.getElementById("divisionb"),L=(e,t,n)=>{switch(e=parseFloat(e),t=parseFloat(t),n){case"+":return e+t;case"-":return e-t;case"*":return e*t;case"/":return e/t;default:return null}};x.addEventListener("click",()=>{C.textContent=L(g.value,B.value,"+")}),I.addEventListener("click",()=>{C.textContent=L(g.value,B.value,"-")}),f.addEventListener("click",()=>{C.textContent=L(g.value,B.value,"*")}),k.addEventListener("click",()=>{C.textContent=L(g.value,B.value,"/")})}();
//# sourceMappingURL=Mini-Games.e23abf70.js.map

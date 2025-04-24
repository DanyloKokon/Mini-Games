!function(){let e=document.querySelector(".js-games"),t=[{id:1,name:"Name-1"},{id:2,name:"Name-2"},{id:3,name:"Name-3"}].map(e=>`<li class="reset-li" id=${e.id}>
    <h2>${e.name}</h2>
    </li>
    <hr>`);e.insertAdjacentHTML("afterend",t),document.getElementById("3");let n=document.createElement("h2");n.textContent="Камінь - ножиці - папір",document.body.appendChild(n);let u=document.createElement("div");document.body.appendChild(u),["Камінь","ножиці","папір"].forEach(e=>{let t=document.createElement("button");t.textContent=e,t.addEventListener("click",()=>play(e)),u.appendChild(t)});let d=document.createElement("div");d.className="result",document.body.appendChild(d);let c=document.createElement("div");c.className="score";let l=document.createElement("span"),a=document.createElement("span");l.id="computerScore",a.id="playerScore",l.textContent="0",a.textContent="0",c.innerHTML=`\u{420}\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}: <br> \u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440}: `,c.appendChild(l),c.innerHTML+=" | Ви: ",c.appendChild(a),document.body.appendChild(c);let o=document.getElementById("1"),m=[{class:"inp"}].map(e=>`<h2></h2>
        <div class="${e.class}">
        <input type="number" name="Year born" id="ybc" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}" class="ybc">
        
        <button id="ybck" type="button">Button click</button>
        <p class="p-answer">...</p>
        </div>`);o.insertAdjacentHTML("beforeend",m);let i=document.querySelector(".p-answer");document.getElementById("ybck").addEventListener("click",()=>{let e=document.getElementById("ybc").value;console.log(e%4==0&&e%100!=0||e%400==0),e%4==0&&e%100!=0||e%400==0?(i.textContent="Ви народилися у високосний рік!",console.log("Ви народилися у високосний рік!")):i.textContent="Ви народилися у звичайний рік!"})}();
//# sourceMappingURL=Mini-Games.7db07b67.js.map

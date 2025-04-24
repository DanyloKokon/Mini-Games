const e=document.querySelector(".js-games"),t=[{id:1,name:"Name-1"},{id:2,name:"Name-2"},{id:3,name:"Name-3"}].map(e=>`<li class="reset-li" id=${e.id}>
    <h2>${e.name}</h2>
    </li>
    <hr>`);e.insertAdjacentHTML("afterend",t),document.getElementById("3");const n=document.createElement("h2");n.textContent="Камінь - ножиці - папір",document.body.appendChild(n);const u=document.createElement("div");document.body.appendChild(u),["Камінь","ножиці","папір"].forEach(e=>{let t=document.createElement("button");t.textContent=e,t.addEventListener("click",()=>play(e)),u.appendChild(t)});const c=document.createElement("div");c.className="result",document.body.appendChild(c);const d=document.createElement("div");d.className="score";const o=document.createElement("span"),a=document.createElement("span");o.id="computerScore",a.id="playerScore",o.textContent="0",a.textContent="0",d.innerHTML=`\u{420}\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}: <br> \u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440}: `,d.appendChild(o),d.innerHTML+=" | Ви: ",d.appendChild(a),document.body.appendChild(d);const l=document.getElementById("1"),m=[{class:"inp"}].map(e=>`<h2></h2>
        <div class="${e.class}">
        <input type="number" name="Year born" id="ybc" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}" class="ybc">
        
        <button id="ybck" type="button">Button click</button>
        <p class="p-answer">...</p>
        </div>`);l.insertAdjacentHTML("beforeend",m);const s=document.querySelector(".p-answer");document.getElementById("ybck").addEventListener("click",()=>{let e=document.getElementById("ybc").value;console.log(e%4==0&&e%100!=0||e%400==0),e%4==0&&e%100!=0||e%400==0?(s.textContent="Ви народилися у високосний рік!",console.log("Ви народилися у високосний рік!")):s.textContent="Ви народилися у звичайний рік!"});
//# sourceMappingURL=Mini-Games.766bd898.js.map

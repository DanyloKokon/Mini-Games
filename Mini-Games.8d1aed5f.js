!function(){document.querySelector(".js-games");let e=[{id:1,name:"Name-1"},{id:2,name:"Name-2"},{id:3,name:"Name-3"}].map(e=>`<li id=${e.id}>
    <h2>${e.name}</h2>
    </li>`);gameContainerEl.insertAdjacentHTML("afterend",e),document.getElementById("3");let n=document.createElement("h2");n.innerText="Камінь - ножиці - папір",document.body.appendChild(n),["stone","scissors","paper"].forEach(e=>{let n=document.createElement("button");n.innerText=e.charAt(0).toUpperCase()+e.slice(1),n.onClick=()=>play(e),document.body.appendChild(n)})}();
//# sourceMappingURL=Mini-Games.8d1aed5f.js.map

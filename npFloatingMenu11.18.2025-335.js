(function(){
    document.getElementById("npFloatingMenu")?.remove();
    document.getElementById("npFloatingMenuButtons")?.remove();

    const branches = {
        "HMA":1,"AAV":2,"BNW":3,"HMC":4,"MAC":5,"HME":6,"CTS":7,"FVT":8,"HMF":9,"GFD":10,
        "MKT":11,"ARN":12,"TOM":13,"OHD":14,"PRO":15,"PGV":16,"SGV":17,"BIC":18,"HMM":19,
        "MUN":20,"VAL":21,"WST":22
    };

    const contacts = {
        "North Park SM Hypermart Antipolo - HMA":"84251921 / 85709483 / 85709483 / 09199146896 / 09156141510",
        "North Park Banawe - BNW":"82440919 / 87117648 / 09199142203 / 09156136104",
        "North Park G. Araneta (QI) - AAV":"87111338 / 87111338 / 09285021173 / 09156123830",
        "North Park SM Hypermart Cainta - HMC":"85713311 / No landline / 09199146891 / 09156141520",
        "North Park Jetti Macapagal - MAC":"09688548561",
        "North Park Hypermarket EDSA - HME":"84414356 / 09199134578 / 09156136198",
        "North Park Fairview Terraces - FVT":"73681268 / 73681268 / 09199142201 / 09156141517",
        "North Park Eton Centris - CTS":"09199138759 / 09567149997",
        "North Park Hypermarket FTI - HMF":"88693203 / 09199134577 / 09771397119",
        "North Park Greenfield - GFD":"86613868 / 86613868 / 09199142457 / 09156136143",
        "North Park Makati Ave. - ARN":"8900264 / 8905952 / 88963482 / 88905674 / 76250314 / 88905952 / 09199138757 / 09166714701",
        "North Park Market Market - MKT":"88561498 / 88561499 / 88479464 / 88561499 / 09199146897 / 09156136187",
        "North Park Tomas Morato - TOM":"87094152 / 87094152 / 09199142239 / 09156136078",
        "North Park Ortigas Home Depot - OHD":"86378057 / 86377365 / 85701712 / 86378163 / 85701712 / 09199134571 / 09156123848",
        "North Park Paseo De Roces - PRO":"89958378 / 89970351 / 89958378 / 09199142458 / 09952314692",
        "North Park P. Guevarra - PGV":"87212759 / 87213413 / 872459439 / 79544957 / 83710824 / 87212759 / 09190750274 / 09156136120",
        "North Park Bicutan - BIC":"87430232 / 88225539 / 88243187 / 87430232 / 09199142208 / 09156136092",
        "North Park Santana Grove - SGV":"02-70011180 / 270011180 / 09285056982",
        "North Park Hypermarket Makati - HMM":"88693206 / 88693206 / 09199134579 / 09156136205",
        "North Park Muntinlupa - MUN":"88225532 / 8225539 / 82919141 / 88561166 / 88561323 / 09199142219 / 09267082306",
        "North Park Westgate - WST":"87712318 / 87712319 / 87712318 / 09199148207 / 09156136117",
        "North Park Valenzuela - VAL":"88644744 / 83644744 / 09285057068 / 09267082387"
    };

    const menu = document.createElement("div");
    menu.id = "npFloatingMenuButtons";
    menu.style = `
        position:fixed;
        top:20px;
        right:20px;
        width:120px;
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        gap:6px;
        z-index:999999;
    `;

    for(let code in branches){
        const btn = document.createElement("button");
        btn.innerText = code;
        btn.style = `
            width:55px;height:55px;
            border-radius:12px;
            border:1px solid gold;
            background:black;
            color:white;
            font-weight:700;
            cursor:pointer;
        `;
        btn.onmouseover = ()=>{btn.style.background="gold";btn.style.color="black";};
        btn.onmouseout = ()=>{btn.style.background="black";btn.style.color="white";};
        btn.onclick = ()=>window.open(
            "https://npdelivery2024-staging.pti.ph/monitoring?store_id="+branches[code],
            "_blank"
        );
        menu.appendChild(btn);
    }
    document.body.appendChild(menu);

    const branchEl = document.querySelector("h3.text-gray-800");
    const branchNameText = branchEl ? branchEl.innerText.trim() : "Branch Not Found";

    const infoBox = document.createElement("div");
    infoBox.id = "npFloatingMenu";
    infoBox.style = `
        position:fixed;
        top:20px;
        left:20px;
        width:13%;
        background:black;
        color:gold;
        padding:16px;
        border:2px solid gold;
        border-radius:12px;
        font-weight:600;
        font-size:14px;
        z-index:999999;
        box-shadow:0 0 20px rgba(255,215,0,0.4);
    `;

    const contactStr = contacts[branchNameText] || "No contact info";
    const nums = contactStr.split(/[\/ ]+/).filter(x=>x!=="");

    let html = `<strong>${branchNameText}</strong><br><br>`;

    nums.forEach(n=>{
        html += `
            <div style="margin-bottom:4px;">
                <a href="tel:${n}" style="color:gold;text-decoration:none;">${n}</a>
                <br>
                <a href="viber://chat?number=${n}" style="color:white;background:#59267c;padding:4px 6px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:2px;">Viber Chat</a>
                <a href="viber://call?number=${n}" style="color:white;background:#8f5db7;padding:4px 6px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:2px;">Call</a>
            </div>
        `;
    });

    infoBox.innerHTML = html;
    document.body.appendChild(infoBox);

})();

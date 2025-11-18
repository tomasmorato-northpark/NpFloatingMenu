// npFloatingMenu11.18.2025-03:16PM.js
(function(){
    // Remove old menu if exists
    document.getElementById("npFloatingMenu")?.remove();
    document.getElementById("npFloatingMenuButtons")?.remove();

    // Branch links
    const branches = {
        "HMA":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=1",
        "AAV":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=2",
        "BNW":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=3",
        "HMC":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=4",
        "MAC":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=5",
        "HME":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=6",
        "CTS":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=7",
        "FVT":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=8",
        "HMF":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=9",
        "GFD":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=10",
        "MKT":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=11",
        "ARN":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=12",
        "TOM":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=13",
        "OHD":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=14",
        "PRO":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=15",
        "PGV":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=16",
        "SGV":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=17",
        "BIC":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=18",
        "HMM":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=19",
        "MUN":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=20",
        "VAL":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=21",
        "WST":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=22"
    };

    // Branch contacts
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

    // Create floating branch buttons
    const menu = document.createElement("div");
    menu.id = "npFloatingMenuButtons";
    menu.style = "position:fixed;top:20px;right:20px;display:flex;flex-direction:column;gap:6px;z-index:999999;";
    for(let b in branches){
        const btn = document.createElement("button");
        btn.innerText = b;
        btn.style = "padding:6px 10px;border-radius:8px;border:1px solid gold;background:black;color:white;font-weight:600;cursor:pointer;";
        btn.onmouseover = ()=>{btn.style.background="gold";btn.style.color="black";};
        btn.onmouseout = ()=>{btn.style.background="black";btn.style.color="white";};
        btn.onclick = ()=>window.open(branches[b],"_blank");
        menu.appendChild(btn);
    }
    document.body.appendChild(menu);

    // Create floating branch details box
    const branchEl = document.querySelector("h3.text-gray-800");
    const branchNameText = branchEl ? branchEl.innerText.trim() : "Branch Not Found";
    const box = document.createElement("div");
    box.id = "npFloatingMenu";
    box.style = "position:fixed;top:20px;left:20px;width:13%;background:black;color:gold;padding:12px 16px;border:2px solid gold;border-radius:12px;font-weight:600;z-index:999999;box-shadow:0 0 20px rgba(255,215,0,0.4);overflow-wrap:break-word;font-family:Arial,sans-serif;font-size:14px;";
    
    const contactStr = contacts[branchNameText] || "No contact info";
    const nums = contactStr.split(/[\/ ]+/).filter(n=>n.trim()!=="");

    let html = `<strong>${branchNameText}</strong><br><br>`;
    nums.forEach(n=>{
        html += `<a href="tel:${n}" style="color:gold;text-decoration:none;display:block;margin-bottom:4px;">${n}</a>`;
        html += `<a href="viber://chat?number=${n}" style="color:white;background:#59267c;padding:6px 8px;border-radius:6px;display:block;text-align:center;margin-bottom:2px;text-decoration:none;">Viber Chat</a>`;
        html += `<a href="viber://call?number=${n}" style="color:white;background:#8f5db7;padding:6px 8px;border-radius:6px;display:block;text-align:center;margin-bottom:6px;text-decoration:none;">Viber Call</a>`;
    });

    box.innerHTML = html;
    document.body.appendChild(box);
})();

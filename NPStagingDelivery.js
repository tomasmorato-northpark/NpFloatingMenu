// npFloatingMenu.js
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
        "HMM":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=19"
    };

    // Branch contacts
    const contacts = {
        "North Park SM Hypermart Antipolo":"84251921 / 85709483 / 85709483 / 9199146896 / 9156141510",
        "North Park Banawe":"82440919 / 87117648 / 9199142203 / 9156136104",
        "North Park G. Araneta (QI)":"87111338 / 87111338 / 9285021173 / 9156123830",
        "North Park SM Hypermart Cainta":"85713311 / No landline / 9199146891 / 9156141520",
        "North Park Jetti Macapagal":"9688548561",
        "North Park Hypermarket EDSA":"84414356 / 9199134578 / 9156136198",
        "North Park Fairview Terraces":"73681268 / 73681268 / 9199142201 / 9156141517",
        "North Park Eton Centris":"9199138759 / 9567149997",
        "North Park Hypermarket FTI":"88693203 / 9199134577 / 9771397119",
        "North Park Greenfield":"86613868 / 86613868 / 9199142457 / 9156136143",
        "North Park Makati Ave.":"8900264 / 8905952 / 88963482 / 88905674 / 76250314 / 88905952 / 9199138757 / 9166714701",
        "North Park Market Market":"88561498 / 88561499 / 88479464 / 88561499 / 9199146897 / 9156136187",
        "North Park Tomas Morato":"87094152 / 87094152 / 9199142239 / 9156136078",
        "North Park Ortigas Home Depot":"86378057 / 86377365 / 85701712 / 86378163 / 85701712 / 9199134571 / 9156123848",
        "North Park Paseo De Roces":"89958378 / 89970351 / 89958378 / 9199142458 / 9952314692",
        "North Park P. Guevarra":"87212759 / 87213413 / 872459439 / 79544957 / 83710824 / 87212759 / 9190750274 / 9156136120",
        "North Park Bicutan":"87430232 / 88225539 / 88243187 / 87430232 / 9199142208 / 9156136092",
        "North Park Santana Grove":"02-70011180 / 270011180 / 9285056982",
        "North Park Hypermarket Makati":"88693206 / 88693206 / 9199134579 / 9156136205",
        "North Park Muntinlupa":"88225532 / 8225539 / 82919141 / 88561166 / 88561323 / 9199142219 / 9267082306",
        "North Park Westgate":"87712318 / 87712319 / 87712318 / 9199148207 / 9156136117",
        "North Park Valenzuela":"88644744 / 83644744 / 9285057068 / 9267082387"
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

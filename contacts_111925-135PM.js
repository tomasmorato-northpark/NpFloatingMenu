javascript:(function(){
    // Remove old boxes if exist
    document.getElementById("npFloatingMenu")?.remove();
    document.getElementById("npFloatingMenuButtons")?.remove();

    // Branch contacts
    const contacts = {
        "North Park SM Hypermart Antipolo":"84251921 / 85709483 / 85709483 / 09199146896 / 09156141510",
        "North Park Banawe":"82440919 / 87117648 / 09199142203 / 09156136104",
        "North Park G. Araneta (QI)":"87111338 / 87111338 / 09285021173 / 09156123830",
        "North Park SM Hypermart Cainta":"85713311 / No landline / 09199146891 / 09156141520",
        "North Park Jetti Macapagal":"09688548561",
        "North Park Hypermarket EDSA":"84414356 / 09199134578 / 09156136198",
        "North Park Fairview Terraces":"73681268 / 73681268 / 09199142201 / 09156141517",
        "North Park Eton Centris":"09199138759 / 09567149997",
        "North Park Hypermarket FTI":"88693203 / 09199134577 / 09771397119",
        "North Park Greenfield":"86613868 / 86613868 / 09199142457 / 09156136143",
        "North Park Makati Ave.":"8900264 / 8905952 / 88963482 / 88905674 / 76250314 / 88905952 / 09199138757 / 09166714701",
        "North Park Market Market":"88561498 / 88561499 / 88479464 / 88561499 / 09199146897 / 09156136187",
        "North Park Tomas Morato":"87094152 / 87094152 / 09199142239 / 09156136078",
        "North Park Ortigas Home Depot":"86378057 / 86377365 / 85701712 / 86378163 / 85701712 / 09199134571 / 09156123848",
        "North Park Paseo De Roces":"89958378 / 89970351 / 89958378 / 09199142458 / 09952314692",
        "North Park P. Guevarra":"87212759 / 87213413 / 872459439 / 79544957 / 83710824 / 87212759 / 09190750274 / 09156136120",
        "North Park Bicutan":"87430232 / 88225539 / 88243187 / 87430232 / 09199142208 / 09156136092",
        "North Park Santana Grove":"02-70011180 / 270011180 / 09285056982",
        "North Park Hypermarket Makati":"88693206 / 88693206 / 09199134579 / 09156136205",
        "North Park Muntinlupa":"88225532 / 8225539 / 82919141 / 88561166 / 88561323 / 09199142219 / 09267082306",
        "North Park Westgate":"87712318 / 87712319 / 87712318 / 09199148207 / 09156136117",
        "North Park Valenzuela":"88644744 / 83644744 / 09285057068 / 09267082387"
    };

    // Locate branch name on page
    const branchEl = document.querySelector("h3.text-gray-800");
    const branchNameText = branchEl ? branchEl.innerText.trim() : "Branch Not Found";

    // Create contact box
    const box = document.createElement("div");
    box.id = "npFloatingMenu";
    box.style.position = "fixed";
    box.style.top = "96px"; // 1 inch from top
    box.style.left = "50%";
    box.style.transform = "translateX(-50%)";
    box.style.width = "350px"; 
    box.style.background = "black";
    box.style.color = "gold";
    box.style.padding = "16px";
    box.style.border = "2px solid gold";
    box.style.borderRadius = "10px";
    box.style.fontWeight = "600";
    box.style.zIndex = "999999";
    box.style.boxShadow = "0 0 20px rgba(255,215,0,0.4)";
    box.style.fontFamily = "Arial, sans-serif";
    box.style.fontSize = "14px";
    box.style.textAlign = "center";

    // Prepare contacts
    const contactStr = contacts[branchNameText] || "No contact info";
    const nums = contactStr.split(/[\/ ]+/).filter(n=>n.trim()!=="");

    let html = `<strong style="font-size:16px;">${branchNameText}</strong><br><br>`;
    nums.forEach(n=>{
        html += `
            <a href="viber://chat?number=${n}"
                style="
                    color: white;
                    background:#59267c;
                    padding:8px;
                    border-radius:6px;
                    display:block;
                    margin-bottom:8px;
                    text-decoration:none;
                ">
                Viber Chat ${n}
            </a>
        `;
    });

    box.innerHTML = html;
    document.body.appendChild(box);
})();

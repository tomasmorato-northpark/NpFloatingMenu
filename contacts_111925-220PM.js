javascript:(function(){
    // Remove old menu if exists
    document.getElementById("npFloatingMenu")?.remove();

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

    // Function to format numbers
    function formatNumber(n){
        if(!/^\d+$/.test(n)) return n; // skip non-numeric (like "No landline")
        if(n.length === 7 || n.length === 8){ // landline
            return n.replace(/(\d)(\d{3})(\d{3,4})/, "$1-$2-$3");
        } else if(n.length === 10 && n.startsWith("9")){ // mobile without leading 0
            return n.replace(/(\d{4})(\d{3})(\d{3})/, "$1-$2-$3");
        } else if(n.length === 11 && n.startsWith("09")){ // mobile
            return n.replace(/(\d{4})(\d{3})(\d{4})/, "$1-$2-$3");
        } else { // fallback
            return n;
        }
    }

    // Get branch name
    const branchEl = document.querySelector("h3.text-gray-800");
    const branchNameText = branchEl ? branchEl.innerText.trim() : "Branch Not Found";

    // Create contact box
    const box = document.createElement("div");
    box.id = "npFloatingMenu";
    box.style.position = "fixed";
    box.style.bottom = "20px";
    box.style.left = "50%";
    box.style.transform = "translateX(-50%)";
    box.style.maxWidth = "90%";
    box.style.background = "black";
    box.style.color = "gold";
    box.style.padding = "12px 16px";
    box.style.border = "2px solid gold";
    box.style.borderRadius = "12px";
    box.style.fontWeight = "600";
    box.style.zIndex = "999999";
    box.style.boxShadow = "0 0 20px rgba(255,215,0,0.4)";
    box.style.overflowWrap = "break-word";
    box.style.fontFamily = "Arial,sans-serif";
    box.style.fontSize = "14px";
    box.style.textAlign = "center";
    box.style.cursor = "grab";

    const contactStr = contacts[branchNameText] || "No contact info";
    const nums = contactStr.split(/[\/ ]+/).filter(n=>n.trim()!=="");

    let html = `<strong>${branchNameText}</strong><br><br>`;
    nums.forEach(n=>{
        const formatted = formatNumber(n);
        html += `<a href="viber://chat?number=${n}" style="color:white;background:#59267c;padding:6px 8px;border-radius:6px;display:inline-block;margin:2px 4px;text-decoration:none;">${formatted}</a>`;
    });

    box.innerHTML = html;
    document.body.appendChild(box);

    // Make box draggable
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    box.addEventListener("mousedown", (e)=>{
        isDragging = true;
        offsetX = e.clientX - box.getBoundingClientRect().left;
        offsetY = e.clientY - box.getBoundingClientRect().top;
        box.style.cursor = "grabbing";
        box.style.transition = "none";
    });

    window.addEventListener("mousemove", (e)=>{
        if(!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        x = Math.max(0, Math.min(window.innerWidth - box.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - box.offsetHeight, y));

        box.style.left = x + "px";
        box.style.top = y + "px";
        box.style.bottom = "auto";
        box.style.transform = "none";
    });

    window.addEventListener("mouseup", ()=>{
        if(isDragging){
            isDragging = false;
            box.style.cursor = "grab";
        }
    });

})();

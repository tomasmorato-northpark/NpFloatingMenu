/* ================================
   REMOVE OLD FLOATING UI
================================ */
document.getElementById("npMenu")?.remove();
document.getElementById("npContactsBar")?.remove();

/* ================================
   FLOATING BUTTON MENU (2 COLUMNS)
================================ */
const menu = document.createElement("div");
menu.id = "npMenu";
menu.style.position = "fixed";
menu.style.bottom = "80px";
menu.style.right = "10px";
menu.style.display = "grid";
menu.style.gridTemplateColumns = "1fr 1fr";
menu.style.gap = "6px";
menu.style.zIndex = "999999";
menu.style.background = "transparent";
menu.style.padding = "5px";

const branches = {
    HMA:"Antipolo", BNW:"Banawe", AAV:"G. Araneta", HMC:"Cainta", 
    MAC:"Jetti", HME:"EDSA", FVT:"Fairview", CTS:"Centris",
    HMF:"FTI", GFD:"Greenfield", ARN:"Makati Ave", MKT:"MarketMarket",
    TOM:"TomasMorato", OHD:"OHD", PRO:"PaseoRoces", PGV:"PGuevarra",
    BIC:"Bicutan", SGV:"Santana", HMM:"MakatiHyp", MUN:"Muntinlupa",
    WST:"Westgate", VAL:"Valenzuela"
};

// Track active button index for Next
let branchKeys = Object.keys(branches);
let currentIndex = -1;

// Create each menu button
const branchButtons = {};
Object.entries(branches).forEach(([code, label]) => {
    const btn = document.createElement("button");
    btn.innerText = code;
    btn.style.border = "1px solid #444";
    btn.style.borderRadius = "6px";
    btn.style.padding = "6px 4px";
    btn.style.background = "white";
    btn.style.fontSize = "12px";
    btn.style.cursor = "pointer";

    btn.onclick = () => selectStoreByCode(code);

    menu.appendChild(btn);
    branchButtons[code] = btn;
});

// Add NEXT button
const nextBtn = document.createElement("button");
nextBtn.innerText = "NEXT";
nextBtn.style.gridColumn = "span 2";
nextBtn.style.border = "1px solid #444";
nextBtn.style.borderRadius = "6px";
nextBtn.style.padding = "6px 4px";
nextBtn.style.background = "#ccc";
nextBtn.style.fontSize = "12px";
nextBtn.style.cursor = "pointer";

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % branchKeys.length;
    selectStoreByCode(branchKeys[currentIndex]);
};

menu.appendChild(nextBtn);

document.body.appendChild(menu);

/* ================================
   CONTACT BAR (BOTTOM, NO SCROLL)
================================ */
const contactBar = document.createElement("div");
contactBar.id = "npContactsBar";
contactBar.style.position = "fixed";
contactBar.style.bottom = "0px";
contactBar.style.left = "0";
contactBar.style.width = "100%";
contactBar.style.padding = "8px 12px";
contactBar.style.background = "rgba(255,255,255,0.0)";
contactBar.style.borderTop = "1px solid #444";
contactBar.style.color = "black";
contactBar.style.fontSize = "14px";
contactBar.style.whiteSpace = "nowrap";
contactBar.style.overflow = "hidden";
contactBar.style.textOverflow = "ellipsis";
contactBar.style.zIndex = "999999";
contactBar.textContent = "Select a branch to display contacts…";

document.body.appendChild(contactBar);

/* ================================
   CONTACT LIST
================================ */
const contacts = {
    "North Park SM Hypermart Antipolo":"84251921 / 85709483 / 09199146896 / 09156141510",
    "North Park Banawe":"82440919 / 87117648 / 09199142203 / 09156136104",
    "North Park G. Araneta (QI)":"87111338 / 09285021173 / 09156123830",
    "North Park SM Hypermart Cainta":"85713311 / 09199146891 / 09156141520",
    "North Park Jetti Macapagal":"09688548561",
    "North Park Hypermarket EDSA":"84414356 / 09199134578 / 09156136198",
    "North Park Fairview Terraces":"73681268 / 09199142201 / 09156141517",
    "North Park Eton Centris":"09199138759 / 09567149997",
    "North Park Hypermarket FTI":"88693203 / 09199134577 / 09771397119",
    "North Park Greenfield":"86613868 / 09199142457 / 09156136143",
    "North Park Makati Ave.":"8900264 / 88963482 / 09199138757 / 09166714701",
    "North Park Market Market":"88561498 / 09199146897 / 09156136187",
    "North Park Tomas Morato":"87094152 / 09199142239 / 09156136078",
    "North Park Ortigas Home Depot":"86378057 / 09199134571 / 09156123848",
    "North Park Paseo De Roces":"89958378 / 09199142458 / 09952314692",
    "North Park P. Guevarra":"87212759 / 09190750274 / 09156136120",
    "North Park Bicutan":"87430232 / 09199142208 / 09156136092",
    "North Park Santana Grove":"02-70011180 / 09285056982",
    "North Park Hypermarket Makati":"88693206 / 09199134579 / 09156136205",
    "North Park Muntinlupa":"88225532 / 09199142219 / 09267082306",
    "North Park Westgate":"87712318 / 09199148207 / 09156136117",
    "North Park Valenzuela":"88644744 / 09285057068 / 09267082387"
};

/* ================================
   BRANCH CODE → NAME MAP
================================ */
const storeMap = {
    HMA: "Antipolo", BNW: "Banawe", AAV: "G. Araneta",
    HMC: "Cainta", MAC: "Jetti", HME: "EDSA",
    FVT: "Fairview", CTS: "Eton", HMF: "FTI",
    GFD: "Greenfield", ARN: "Makati Ave", MKT: "Market Market",
    TOM: "Tomas Morato", OHD: "Ortigas Home Depot",
    PRO: "Paseo", PGV: "P. Guevarra", BIC: "Bicutan",
    SGV: "Santana", HMM: "Hypermarket Makati",
    MUN: "Muntinlupa", WST: "Westgate", VAL: "Valenzuela"
};

/* ================================
   REAL CLICK HELPER
================================ */
function realClick(el) {
    ["mouseover","mousedown","mouseup","click"].forEach(evtType => {
        el.dispatchEvent(new MouseEvent(evtType, {
            bubbles: true, cancelable: true, view: window
        }));
    });
}




/* ================================
   SELECT STORE BY CODE
================================ */
function selectStoreByCode(code) {
    code = code.trim().toUpperCase();
    const keyword = storeMap[code];
    if (!keyword) return alert("Unknown branch code " + code);

    // Highlight active button
    Object.values(branchButtons).forEach(btn => btn.style.background = "white");
    branchButtons[code].style.background = "red";

    // 1. Click Switch Store
    const switchBtn = [...document.querySelectorAll("button")].find(el =>
        el.textContent.trim().toLowerCase() === "switch store"
    );
    if (!switchBtn) return alert("Switch Store button not found");
    realClick(switchBtn);

    // 2. Poll until store button exists
    let attempts = 0;
    const interval = setInterval(() => {
        attempts++;
        const storeBtn = [...document.querySelectorAll("button")].find(el =>
            el.textContent.includes("North Park") &&
            el.textContent.includes(keyword)
        );

        if (storeBtn) {
            storeBtn.scrollIntoView({behavior: "smooth", block: "center"});
            realClick(storeBtn);

            // Update contact bar
            const fullName = storeBtn.textContent.trim();
            contactBar.textContent = contacts[fullName] || "No contact info";

            clearInterval(interval);
        } else if (attempts > 20) { // ~2 seconds max
            clearInterval(interval);
            alert("Store not found or dropdown too slow: " + keyword);
        }
    }, 100); // check every 100ms
}

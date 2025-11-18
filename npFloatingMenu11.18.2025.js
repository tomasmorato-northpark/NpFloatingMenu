javascript:(function(){
  // remove old
  document.getElementById("npFloatingMenu")?.remove();
  document.getElementById("npFloatingMenuButtons")?.remove();

  // base size (medium) and compute zoom
  const BASE = 55; // px
  const getZoom = ()=> (window.visualViewport && window.visualViewport.scale) ? window.visualViewport.scale : (window.outerWidth / window.innerWidth || 1);
  const zoom = getZoom();
  const invScale = 1 / (zoom || 1);

  // branch monitoring links (open in new tab)
  const branches = {"HMA":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=1","AAV":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=2","BNW":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=3","HMC":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=4","MAC":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=5","HME":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=6","CTS":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=7","FVT":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=8","HMF":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=9","GFD":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=10","MKT":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=11","ARN":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=12","TOM":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=13","OHD":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=14","PRO":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=15","PGV":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=16","SGV":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=17","BIC":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=18","HMM":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=19","MUN":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=20","VAL":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=21","WST":"https://npdelivery2024-staging.pti.ph/monitoring?store_id=22"};

  // branch name -> contact numbers (clean keys should match page <h3>)
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

  // mapping branch name -> code
  const branchCodes = {
    "North Park SM Hypermart Antipolo":"HMA","North Park Banawe":"BNW","North Park G. Araneta (QI)":"AAV",
    "North Park SM Hypermart Cainta":"HMC","North Park Jetti Macapagal":"MAC","North Park Hypermarket EDSA":"HME",
    "North Park Fairview Terraces":"FVT","North Park Eton Centris":"CTS","North Park Hypermarket FTI":"HMF",
    "North Park Greenfield":"GFD","North Park Makati Ave.":"ARN","North Park Market Market":"MKT",
    "North Park Tomas Morato":"TOM","North Park Ortigas Home Depot":"OHD","North Park Paseo De Roces":"PRO",
    "North Park P. Guevarra":"PGV","North Park Bicutan":"BIC","North Park Santana Grove":"SGV",
    "North Park Hypermarket Makati":"HMM","North Park Muntinlupa":"MUN","North Park Westgate":"WST",
    "North Park Valenzuela":"VAL"
  };

  // helper: normalize numbers to international +63 format where reasonable
  function normalizeNumber(raw){
    const cleaned = (raw||"").replace(/[^\d+]/g,'');
    if(!cleaned) return null;
    // if already starts with +, return it
    if(cleaned.startsWith('+')) return cleaned;
    // remove leading zeros and add +63 for mobile starting 09xxxx or landline 02...
    if(cleaned.length===11 && cleaned.startsWith('09')) return '+63' + cleaned.slice(1);
    if(cleaned.length===10 && cleaned.startsWith('2')) return '+63' + cleaned; // metro manila landline like 2xxxxxxx (rare in this format)
    if(cleaned.length>0 && cleaned.startsWith('0')) return '+63' + cleaned.slice(1);
    if(cleaned.length>0) return '+' + cleaned;
    return null;
  }

  // ------- create floating buttons (bottom-right) -------
  const menu = document.createElement("div");
  menu.id = "npFloatingMenuButtons";
  menu.style.position = "fixed";
  menu.style.bottom = "20px";
  menu.style.right = "20px";
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  menu.style.gap = (8 * invScale) + "px";
  menu.style.zIndex = "999999";
  menu.style.transformOrigin = "bottom right";
  menu.style.transform = "scale(" + invScale + ")";
  // create round buttons
  Object.keys(branches).forEach(code=>{
    const btn = document.createElement("button");
    btn.innerText = code;
    btn.title = code;
    btn.style.width = BASE + "px";
    btn.style.height = BASE + "px";
    btn.style.borderRadius = "12px";
    btn.style.border = "1px solid gold";
    btn.style.background = "black";
    btn.style.color = "white";
    btn.style.fontWeight = "700";
    btn.style.cursor = "pointer";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.letterSpacing = "0.6px";
    btn.style.boxShadow = "0 6px 12px rgba(0,0,0,0.4)";
    btn.onmouseover = ()=>{ btn.style.background="gold"; btn.style.color="black"; btn.style.transform="scale(1.03)"; };
    btn.onmouseout = ()=>{ btn.style.background="black"; btn.style.color="white"; btn.style.transform="scale(1)"; };
    btn.onclick = ()=> window.open(branches[code], "_blank");
    menu.appendChild(btn);
  });
  document.body.appendChild(menu);

  // ------- create details box (top-left) -------
  const branchEl = document.querySelector("h3.text-gray-800.leading-tight, h3.text-gray-800");
  const branchName = branchEl ? branchEl.textContent.trim() : "Branch Not Found";
  const code = branchCodes[branchName] || "CODE N/A";
  const contactStr = contacts[branchName] || "";

  const box = document.createElement("div");
  box.id = "npFloatingMenu";
  box.style.position = "fixed";
  box.style.top = "20px";
  box.style.left = "20px";
  box.style.width = "13%";
  box.style.minWidth = "180px";
  box.style.maxWidth = "300px";
  box.style.background = "black";
  box.style.color = "gold";
  box.style.padding = "12px 16px";
  box.style.border = "2px solid gold";
  box.style.borderRadius = "12px";
  box.style.fontWeight = "600";
  box.style.zIndex = "999999";
  box.style.boxShadow = "0 0 20px rgba(255,215,0,0.4)";
  box.style.overflowWrap = "break-word";
  box.style.fontFamily = "Arial, sans-serif";
  box.style.fontSize = "14px";

  // parse numbers and build HTML
  const parts = contactStr.split('/').map(p=>p.trim()).filter(Boolean);
  let html = `<div style="font-size:15px;font-weight:800;margin-bottom:6px;">${branchName}</div>`;
  html += `<div style="font-size:12px;color:#fff;margin-bottom:8px;">Branch Code: <span style="color:gold;font-weight:800">${code}</span></div>`;

  if(parts.length===0){
    html += `<div style="color:#fff">No contact info</div>`;
  } else {
    parts.forEach(raw=>{
      if(/no landline/i.test(raw)){ html += `<div style="color:#bbb;margin-bottom:6px;">No landline</div>`; return; }
      const norm = normalizeNumber(raw);
      const display = raw.trim();
      if(norm){
        html += `<a href="tel:${norm}" style="color:gold;text-decoration:none;display:block;margin-bottom:4px;">${display}</a>`;
        html += `<a href="viber://chat?number=${norm}" style="color:white;background:#59267c;padding:6px 8px;border-radius:6px;display:block;text-align:center;margin-bottom:2px;text-decoration:none;">Viber Chat</a>`;
        html += `<a href="viber://call?number=${norm}" style="color:white;background:#8f5db7;padding:6px 8px;border-radius:6px;display:block;text-align:center;margin-bottom:8px;text-decoration:none;">Viber Call</a>`;
      } else {
        html += `<div style="color:#bbb;margin-bottom:6px;">${display}</div>`;
      }
    });
  }

  box.innerHTML = html;
  document.body.appendChild(box);

  // observe zoom changes and adjust scale live
  if(window.visualViewport){
    window.visualViewport.addEventListener('resize', ()=> {
      const z = window.visualViewport.scale || 1;
      const s = 1 / z;
      menu.style.transform = "scale(" + s + ")";
      menu.style.gap = (8 * s) + "px";
    });
  } else {
    // fallback: adjust when window resized
    window.addEventListener('resize', ()=> {
      const z = (window.outerWidth / window.innerWidth) || 1;
      const s = 1 / z;
      menu.style.transform = "scale(" + s + ")";
      menu.style.gap = (8 * s) + "px";
    });
  }
})();

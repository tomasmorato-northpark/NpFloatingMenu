javascript:(function(){
    // Load your GitHub script
    var s = document.createElement('script');
    s.onload = function () {
        setTimeout(function(){

            const box = document.getElementById("npFloatingMenu");
            if (!box) return;

            /* Main bar position */
            box.style.position = "fixed";
            box.style.left = "10px";
            box.style.bottom = "10px";   // default bottom
            box.style.top = "";
            box.style.width = "auto";
            box.style.background = "transparent";
            box.style.border = "none";
            box.style.boxShadow = "none";
            box.style.padding = "0";
            box.style.zIndex = "999999";

            /* Horizontal layout */
            box.style.display = "flex";
            box.style.flexWrap = "nowrap";
            box.style.whiteSpace = "nowrap";
            box.style.gap = "10px";

            const links = box.querySelectorAll("a");
            links.forEach(a => {
                const num = a.innerText.replace("Viber Chat","").trim();
                a.innerText = num;

                a.style.display = "inline-block";
                a.style.padding = "6px 10px";
                a.style.margin = "0";
                a.style.background = "transparent";
                a.style.color = "black"; 
                a.style.border = "2px solid black";
                a.style.borderRadius = "6px";
                a.style.whiteSpace = "nowrap";
                a.style.textDecoration = "none";
                a.style.fontWeight = "600";
                a.style.fontSize = "14px";

                /* Hover */
                a.onmouseover = ()=>{ 
                    a.style.background = "black"; 
                    a.style.color = "white";
                };
                a.onmouseout = ()=>{
                    a.style.background = "transparent";
                    a.style.color = "black";
                };
            });

            /* Automatic repositioning if overflowing */
            setTimeout(function(){
                const barRight = box.getBoundingClientRect().right;
                const screenRight = window.innerWidth - 10;

                if (barRight > screenRight) {
                    box.style.bottom = "40px"; // move up if needed
                }
            }, 100);

        }, 300);
    };

    s.src = "https://cdn.jsdelivr.net/gh/tomasmorato-northpark/NpFloatingMenu@main/contacts_111925-135PM.js";
    document.body.appendChild(s);
})();

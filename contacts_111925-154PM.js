javascript:(function(){
    // Load your GitHub JS
    var s = document.createElement('script');
    s.onload = function () {
        setTimeout(function(){
            const box = document.getElementById("npFloatingMenu");
            if (!box) return;

            /* Position at bottom edge */
            box.style.position = "fixed";
            box.style.bottom = "10px";
            box.style.left = "10px";
            box.style.top = "";
            box.style.width = "auto";
            box.style.background = "transparent";
            box.style.border = "none";
            box.style.boxShadow = "none";
            box.style.padding = "0";
            box.style.zIndex = "999999";

            /* Horizontal layout */
            box.style.whiteSpace = "nowrap";
            box.style.display = "flex";
            box.style.flexWrap = "nowrap";
            box.style.overflow = "visible";
            box.style.alignItems = "center";
            box.style.gap = "10px";

            /* Style each contact button */
            const links = box.querySelectorAll("a");
            links.forEach(a=>{
                a.style.display = "inline-block";
                a.style.padding = "6px 10px";
                a.style.margin = "0";
                a.style.background = "transparent";
                a.style.color = "gold"; 
                a.style.border = "2px solid gold";
                a.style.borderRadius = "6px";
                a.style.whiteSpace = "nowrap";
                a.style.textDecoration = "none";
                a.style.fontWeight = "600";

                /* Hover effect */
                a.onmouseover = ()=>{ 
                    a.style.background = "gold"; 
                    a.style.color = "black";
                };
                a.onmouseout = ()=>{
                    a.style.background = "transparent";
                    a.style.color = "gold";
                };
            });

        }, 300);
    };

    s.src = 'https://cdn.jsdelivr.net/gh/tomasmorato-northpark/NpFloatingMenu@main/contacts_111925-135PM.js';
    document.body.appendChild(s);
})();

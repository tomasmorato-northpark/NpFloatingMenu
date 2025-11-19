javascript:(function(){
    // Load your GitHub JS
    var s = document.createElement('script');
    s.onload = function () {
        setTimeout(function(){
            const box = document.getElementById("npFloatingMenu");
            if (!box) return;

            // One-line layout, NO scroll
            box.style.whiteSpace = "nowrap";
            box.style.display = "flex";
            box.style.flexWrap = "nowrap";   // no wrapping
            box.style.overflow = "visible";  // NO scrollbars
            box.style.gap = "10px";
            box.style.padding = "12px 16px";

            // Make each contact rectangular and inline
            const links = box.querySelectorAll("a");
            links.forEach(a=>{
                a.style.display = "inline-block";
                a.style.marginBottom = "0px";
                a.style.whiteSpace = "nowrap";
            });
        }, 300);
    };

    s.src = 'https://cdn.jsdelivr.net/gh/tomasmorato-northpark/NpFloatingMenu@main/contacts_111925-135PM.js';
    document.body.appendChild(s);
})();

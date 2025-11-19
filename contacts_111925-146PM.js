javascript:(function(){
    // Load your GitHub JS
    var s = document.createElement('script');
    s.onload = function () {
        // Wait a moment for your script to finish creating the contact box
        setTimeout(function(){
            const box = document.getElementById("npFloatingMenu");
            if (!box) return;

            // Make contact numbers appear on ONE LINE
            box.style.whiteSpace = "nowrap";
            box.style.display = "flex";
            box.style.flexWrap = "nowrap";
            box.style.gap = "10px";
            box.style.overflowX = "auto";
            box.style.padding = "12px 16px";

            // Style each contact button horizontally
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

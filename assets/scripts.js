document.querySelectorAll("ul.utilist li").forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.target.classList.toggle('done');
    })
});
function updateProgress() {
    const totalItems = document.querySelectorAll('ul.utilist li').length;
    const doneItems = document.querySelectorAll('ul.utilist li.done').length;
    const progress = (doneItems / totalItems) * 100;
    
    const progressBar = document.querySelector('.progress-bar');
    const progressElement = document.querySelector('.progress');
    
    progressBar.style.width = `${progress}%`;
    progressElement.setAttribute('aria-valuenow', progress);
}

document.querySelectorAll("ul.utilist li").forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.target.classList.toggle('done');
        updateProgress();
    })
});

// Initialize progress on page load
updateProgress();
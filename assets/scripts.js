function updateProgress() {
    const totalItems = document.querySelectorAll('ul.utilist li').length;
    const doneItems = document.querySelectorAll('ul.utilist li.done').length;
    const progress = (doneItems / totalItems) * 100;
    
    const progressBar = document.querySelector('.progress-bar');
    const progressElement = document.querySelector('.progress');
    
    progressBar.style.width = `${progress}%`;
    progressElement.setAttribute('aria-valuenow', progress);
}

document.querySelectorAll('ul.utilist .form-check-input').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const listItem = this.closest('li');
        listItem.classList.toggle('done', this.checked);
        updateProgress();
    });
});

// Initialize progress on page load
updateProgress();
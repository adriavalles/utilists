// State management
let showCheckedItems = true;

// DOM Elements
const elements = {
    progressBar: document.querySelector('.progress-bar'),
    progressElement: document.querySelector('.progress'),
    clearButton: document.getElementById('clear-checked-items'),
    toggleButton: document.getElementById('toggle-checked-items-visibility'),
    listItems: document.querySelectorAll('ul.utilist li'),
    checkboxes: document.querySelectorAll('ul.utilist .form-check-input')
};

// Progress bar functions
function updateProgress() {
    const totalItems = elements.listItems.length;
    const doneItems = document.querySelectorAll('ul.utilist li.done').length;
    const progress = (doneItems / totalItems) * 100;

    elements.progressBar.style.width = `${progress}%`;
    elements.progressElement.setAttribute('aria-valuenow', progress);
}

// Visibility functions
function updateToggleButtonState() {
    const icon = elements.toggleButton.querySelector('i');
    if (showCheckedItems) {
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
        elements.toggleButton.innerHTML = '<i class="bi bi-eye-slash"></i> Hide checked items';
    } else {
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
        elements.toggleButton.innerHTML = '<i class="bi bi-eye"></i> Show checked items';
    }
}

function toggleItemVisibility(item, shouldShow) {
    if (shouldShow) {
        item.style.display = '';
    } else {
        item.style.display = 'none';
    }
}

function toggleAllCheckedItemsVisibility() {
    showCheckedItems = !showCheckedItems;
    updateToggleButtonState();

    document.querySelectorAll('ul.utilist li.done').forEach(item => {
        toggleItemVisibility(item, showCheckedItems);
    });
}

// Checkbox handlers
function handleCheckboxChange(checkbox) {
    const listItem = checkbox.closest('li');
    listItem.classList.toggle('done', checkbox.checked);
    
    if (checkbox.checked && !showCheckedItems) {
        listItem.style.display = 'none';
    }
    
    updateProgress();
}

function resetListProgress() {
    elements.listItems.forEach(item => {
        item.classList.remove('done');
        const checkbox = item.querySelector('.form-check-input');
        if (checkbox) checkbox.checked = false;
        toggleItemVisibility(item, true);
    });

    showCheckedItems = true;
    updateToggleButtonState();
    updateProgress();
}

// Event Listeners
function initializeEventListeners() {
    elements.checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => handleCheckboxChange(checkbox));
    });

    elements.clearButton.addEventListener('click', resetListProgress);
    elements.toggleButton.addEventListener('click', toggleAllCheckedItemsVisibility);
}

initializeEventListeners();
updateProgress();
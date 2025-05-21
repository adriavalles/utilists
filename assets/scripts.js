// State management
let showCheckedItems = true;

// DOM Elements
const elements = typeof document !== 'undefined' ? {
    progressBar: document.querySelector('.progress-bar'),
    progressElement: document.querySelector('.progress'),
    clearButton: document.getElementById('clear-checked-items'),
    toggleButton: document.getElementById('toggle-checked-items-visibility'),
    listItems: document.querySelectorAll('ul.utilist li'),
    checkboxes: document.querySelectorAll('ul.utilist .form-check-input')
} : {
    progressBar: null,
    progressElement: { setAttribute() {} },
    clearButton: null,
    toggleButton: null,
    listItems: [],
    checkboxes: []
};

// Progress bar functions
function calculateProgress(totalItems, doneItems) {
    if (totalItems === 0) return 0;
    return (doneItems / totalItems) * 100;
}

function updateProgress() {
    if (!elements.progressBar) return;

    const totalItems = elements.listItems.length;
    const doneItems = document.querySelectorAll('ul.utilist li.done').length;
    const progress = calculateProgress(totalItems, doneItems);

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
    if (elements.checkboxes) {
        elements.checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => handleCheckboxChange(checkbox));
        });
    }

    if (elements.clearButton) {
        elements.clearButton.addEventListener('click', resetListProgress);
    }

    if (elements.toggleButton) {
        elements.toggleButton.addEventListener('click', toggleAllCheckedItemsVisibility);
    }
}

initializeEventListeners();
updateProgress();

// Export functions for testing in Node environment
if (typeof module !== 'undefined') {
    module.exports = {
        calculateProgress,
        toggleItemVisibility
    };
}

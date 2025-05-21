const assert = require('assert');
const { calculateProgress, toggleItemVisibility } = require('../assets/scripts.js');

function testCalculateProgress() {
    assert.strictEqual(calculateProgress(4, 2), 50);
    assert.strictEqual(calculateProgress(3, 0), 0);
    assert.strictEqual(calculateProgress(5, 5), 100);
}

function testToggleItemVisibility() {
    const item = { style: { display: '' } };
    toggleItemVisibility(item, false);
    assert.strictEqual(item.style.display, 'none');
    toggleItemVisibility(item, true);
    assert.strictEqual(item.style.display, '');
}

function run() {
    testCalculateProgress();
    testToggleItemVisibility();
    console.log('All tests passed!');
}

run();

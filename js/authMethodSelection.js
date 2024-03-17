let selectedMethods = {};

function toggleMethod(method) {
    selectedMethods[method] = !selectedMethods[method];
    updateUI();
}

function updateUI() {
    const summary = [];
    document.querySelectorAll('.method-card').forEach(card => {
        const method = card.dataset.method; // Use data-method for identification
        if (selectedMethods[method]) {
            card.classList.add('selected-method');
            summary.push(card.querySelector('.card-title').textContent);
        } else {
            card.classList.remove('selected-method');
        }
    });

    const confirmButton = document.getElementById('confirmButton');
    confirmButton.disabled = summary.length < 2;

    const selectedSummary = document.getElementById('selectedSummary');
    selectedSummary.innerHTML = summary.length > 0 ? `<strong>Selected Methods:</strong> ${summary.join(', ')}` : '';
    selectedSummary.classList.toggle('visually-hidden', summary.length === 0);
}

function verifySelection() {
    const selectedCount = Object.keys(selectedMethods).length;
    if (selectedCount >= 2) {
        alert("Thank you for selecting your authentication methods.");
    } else {
        alert("Please select at least two authentication methods.");
    }
}


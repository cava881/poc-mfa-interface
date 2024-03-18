let selectedMethods = {};

function toggleMethod(method) {
    selectedMethods[method] = !selectedMethods[method];
    updateUI();
}

function updateUI() {
    const summary = [];
    document.querySelectorAll('.method-card').forEach(card => {
        const method = card.dataset.method;
        if (selectedMethods[method]) {
            card.classList.add('selected-method');
            summary.push(card.querySelector('.card-title').textContent);
        } else {
            card.classList.remove('selected-method');
        }
    });

    const confirmButton = document.getElementById('confirmButton');
    confirmButton.disabled = !(selectedMethods['passkey'] || summary.length >= 2);

    const selectedSummary = document.getElementById('selectedSummary');
    selectedSummary.innerHTML = summary.length > 0 ? `<strong>Selected Methods:</strong> ${summary.join(', ')}` : '';
    selectedSummary.classList.toggle('visually-hidden', summary.length === 0);
}


function verifySelection() {
    const selectedCount = Object.values(selectedMethods).filter(isSelected => isSelected).length;

    if (selectedCount === 1 && selectedMethods['passkey']) {
        alert("Proceed with initiating the WebAuthn authentication.");
    } else if (selectedCount >= 2) {
        alert("Thank you for selecting your authentication methods.");
    } else {
        alert("Please select at least two authentication methods.");
    }
}

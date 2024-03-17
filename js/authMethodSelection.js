let selectedMethods = {};

function toggleMethod(method) {
    // Toggle the selection status of an authentication method
    if (selectedMethods[method]) {
        // If method is already selected, deselect it
        delete selectedMethods[method];
        document.getElementById(method).classList.add('visually-hidden');
    } else {
        // If method is not selected, select it
        selectedMethods[method] = true;
        document.getElementById(method).classList.remove('visually-hidden');
    }
    // Optional: Update UI to reflect the current selection state
    updateUI();
}

function verifySelection() {
    // Count how many methods have been selected
    const selectedCount = Object.keys(selectedMethods).length;
    // Require at least two methods to be selected for proceeding
    if (selectedCount >= 2) {
        alert("Thank you for selecting your authentication methods.");
        // Proceed with the authentication flow
    } else {
        alert("Please select at least two authentication methods.");
    }
}

// Optional: Function to update the UI based on the current state of selections
function updateUI() {
    // This could include changing button styles, enabling/disabling the submit button,
    // or providing visual feedback on the number of selected methods.
    // For simplicity, this example does not include specific UI update logic.
}

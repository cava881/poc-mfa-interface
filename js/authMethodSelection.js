let selectedMethods = {};

function toggleMethod(method) {
    if (selectedMethods[method]) {
        delete selectedMethods[method];
        document.getElementById(method).classList.add('visually-hidden');
    } else {
        selectedMethods[method] = true;
        document.getElementById(method).classList.remove('visually-hidden');
    }
}

function verifySelection() {
    const selectedCount = Object.keys(selectedMethods).length;
    if (selectedCount >= 2) {
        alert("Thank you for selecting your authentication methods.");
        // Here you would proceed with the authentication flow
    } else {
        alert("Please select at least two authentication methods.");
    }
}
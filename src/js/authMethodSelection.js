const selectedMethods = {};

function toggleMethod(method) {
  selectedMethods[method] = !selectedMethods[method];
  updateUI();
}

function updateUI() {
  let summary = [];
  document.querySelectorAll('.method-card').forEach(card => {
    let method = card.dataset.method;
    if (selectedMethods[method]) {
      card.classList.add('selected-method');
      summary.push(card.querySelector('.card-title').textContent);
    } else {
      card.classList.remove('selected-method');
    }
  });

  let passkeySelected = selectedMethods['passkey'];
  let selectedCount = Object.values(selectedMethods).filter(isSelected => isSelected).length;
  let confirmButton = document.getElementById('confirmButton');
  confirmButton.disabled = !(passkeySelected || selectedCount >= 2);

  let selectedSummary = document.getElementById('selectedSummary');
  selectedSummary.innerHTML = summary.length > 0 ? `<strong>Selected Methods:</strong> ${summary.join(', ')}` : '';
  selectedSummary.classList.toggle('visually-hidden', summary.length === 0);
}


function verifySelection() {
  let {length: selectedCount} = Object.values(selectedMethods).filter(isSelected => isSelected);
  if (selectedCount === 1 && selectedMethods['passkey']) {
    alert('Proceed with initiating the WebAuthn authentication.');
  } else if (selectedCount >= 2) {
    alert("Thank you for selecting your authentication methods.");
  } else {
    alert("Please select at least two authentication methods.");
  }
}

function handleKeyPress(event, methodName) {
  if (event.key === "Enter" || event.keyCode === 13) {
    toggleMethod(methodName);
  }
}

// Ensure the document is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.method-card').forEach(card => {
    // Add tabindex to make cards focusable
    card.setAttribute('tabindex', '0');
    // Attach the keypress event to handle Enter key
    card.addEventListener('keypress', function (event) {
      let methodName = this.dataset.method;
      handleKeyPress(event, methodName);
    });
  });
});

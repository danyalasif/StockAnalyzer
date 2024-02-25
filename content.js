// content.js
function fetchDataFromPage() {
    let eps = null;
    let peRatio = null;
    let pbRatio = null;
    // Find all th elements and loop through them
    const thElements = document.querySelectorAll('tr th');
    for (let i = 0; i < thElements.length; i++) {
        // Check if the th element contains the text 'Earnings per Share'
        if (thElements[i].textContent.trim() === 'Earnings per Share') {
            // The next sibling element is the value we're interested in
            const valueElement = thElements[i].nextElementSibling;
            if (valueElement) {
                eps = parseFloat(valueElement.textContent.trim());
                continue; // Exit the loop once we find the value
            }
        }

        if (thElements[i].textContent.trim() === 'Price Earnings Ratio') {
            // The next sibling element is the value we're interested in
            const valueElement = thElements[i].nextElementSibling;
            if (valueElement) {
                peRatio = parseFloat(valueElement.textContent.trim());
                continue; // Exit the loop once we find the value
            }
        }

        if (thElements[i].textContent.trim() === 'Price/Book Ratio') {
            // The next sibling element is the value we're interested in
            const valueElement = thElements[i].nextElementSibling;
            if (valueElement) {
                pbRatio = parseFloat(valueElement.textContent.trim());
                continue; // Exit the loop once we find the value
            }
        }
    }

    return {eps, peRatio, pbRatio};
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchData") {
      const data = fetchDataFromPage();
      sendResponse(data);
    }
  });
  
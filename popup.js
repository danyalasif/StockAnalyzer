document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({action: "getData"}, function(response) {
      const data = response.data;
      if (data) {
        document.getElementById('eps-value').textContent = data.eps || 'N/A';
        document.getElementById('pe-ratio-value').textContent = data.peRatio || 'N/A';
      } else {
        document.getElementById('data-display').textContent = 'Unable to fetch data.';
      }
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({action: "getData"}, function(response) {
      const data = response.data;
      if (data) {
        document.getElementById('eps-value').textContent = data.eps || 'N/A';
        document.getElementById('pe-ratio-value').textContent = data.peRatio || 'N/A';
        document.getElementById('pb-ratio-value').textContent = data.pbRatio || 'N/A';

        document.getElementById('stock-name').textContent = data.stockName || 'N/A';
        document.getElementById('stock-price').textContent = data.stockPrice || 'N/A';
        document.getElementById('stock-ticker').textContent = data.stockTicker || 'N/A';

        chrome.storage.sync.get(['epsDesired', 'peRatioDesired', 'pbRatioDesired'], function(data) {
            const epsDesiredElement = document.getElementById('eps-desired-value');
            const peRatioDesiredElement = document.getElementById('pe-ratio-desired-value');
            const pbRatioDesiredElement = document.getElementById('pb-ratio-desired-value');

            const peRatioElement = document.getElementById('pe-ratio-value');
            const pbRatioElement = document.getElementById('pb-ratio-value');
            const epsElement = document.getElementById('eps-value');
        
            if (epsDesiredElement && epsElement) {
                epsDesiredElement.textContent = data.epsDesired || 'N/A';
            }
        
            if (epsElement && data.epsDesired) {
                const actualEps = parseFloat(epsElement.textContent);
                if (!isNaN(actualEps)) {
                    if (parseFloat(actualEps) >= parseFloat(data.epsDesired)) {
                        epsElement.style.color = 'green';
                    } else {
                        epsElement.style.color = 'red';
                    }
                }
            }

            if (peRatioDesiredElement && peRatioElement) {
                peRatioDesiredElement.textContent = data.peRatioDesired || 'N/A';
            }

            if (peRatioElement && data.peRatioDesired) {
                const actualPeRatio = parseFloat(peRatioElement.textContent);
                if (!isNaN(actualPeRatio)) {
                    if (parseFloat(actualPeRatio) >= parseFloat(data.peRatioDesired)) {
                        peRatioElement.style.color = 'green';
                    } else {
                        peRatioElement.style.color = 'red';
                    }
                }
            }

            if (pbRatioDesiredElement && pbRatioElement) {
                pbRatioDesiredElement.textContent = data.pbRatioDesired || 'N/A';
            }

            if (pbRatioElement && data.pbRatioDesired) {
                const actualPbRatio = parseFloat(pbRatioElement.textContent);
                if (!isNaN(actualPbRatio)) {
                    if (parseFloat(actualPbRatio) >= parseFloat(data.pbRatioDesired)) {
                        pbRatioElement.style.color = 'green';
                    } else {
                        pbRatioElement.style.color = 'red';
                    }
                }
            }


        });
      } else {
        document.getElementById('data-display').textContent = 'Unable to fetch data.';
      }
    });


    document.getElementById('settings-btn').addEventListener('click', function () {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage(); // New way to open options pages, if supported (Chrome 42+).
        } else {
            window.open(chrome.runtime.getURL('settings.html'));
        }
    });
    
   
  });

document.addEventListener('DOMContentLoaded', function () {
    // Load the current settings
    chrome.storage.sync.get(['epsDesired', 'peRatioDesired', 'pbRatioDesired'], function (data) {
        document.getElementById('eps-desired').value = data.epsDesired || '';
        document.getElementById('pe-ratio-desired').value = data.peRatioDesired || '';
        document.getElementById('pb-ratio-desired').value = data.pbRatioDesired || '';
    });

    // Save the settings
    document.getElementById('settings-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const epsDesired = document.getElementById('eps-desired').value;
        const peRatioDesired = document.getElementById('pe-ratio-desired').value;
        const pbRatioDesired = document.getElementById('pb-ratio-desired').value;
        chrome.storage.sync.set({epsDesired, peRatioDesired, pbRatioDesired}, function () {
            console.log('Settings saved');
        });
    });
});

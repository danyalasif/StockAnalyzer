// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log('Service Worker Active');
  });
  
  // background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getData") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "fetchData"}, function(response) {
          sendResponse({data: response});
        });
      });
      return true; // Indicate async response
    }
  });
  
chrome.storage.local.set({POOF: false,
<<<<<<< HEAD
                          positionX: `1450px`,
                          positionY: `600px`
=======
                          positionX: `1405px`,
                          positionY: `540px`
>>>>>>> dev
                          }) // define POOF variable to false
  .then(() => {
    console.log("POOF is set to false");
    return chrome.storage.local.get(["POOF"])})

// Listen for messages from popup
// Note: When user reboots their digital pet, it should respawn in a set location in case they've put their pet in an inaccessible area
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'POOF_UPDATE') {
    console.log("Service worker received POOF update:", request.value);

    //Notify tabs to update POOF display
    chrome.tabs.query({currentWindow: true}, (tabs) => {
      tabs.forEach(tab => {

        if (tab.url && tab.url.startsWith('http')) {
          chrome.tabs.sendMessage(tab.id, {
            type: "POOF_UPDATE",
            value: request.value
          }).catch(error => {
            console.log('Could not send update to ' + tab.url)
          });
        }

      });
    });
  }
});

// Listen for refreshed tabs
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
    chrome.storage.local.get(["POOF"], function(result) {
      chrome.tabs.sendMessage(tabId, {
        type: "POOF_UPDATE",
        value: result.POOF
      })
    });
  }
});

// Listen for position updates
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== "local") return;

  if (changes.positionX || changes.positionY) {

    //Notify tabs to update POOF display
    chrome.tabs.query({currentWindow: true}, (tabs) => {
      tabs.forEach(tab => {

        if (tab.url && tab.url.startsWith('http')) {
          chrome.tabs.sendMessage(tab.id, {
            type: "POS_UPDATE"
          })
        }
      });
    });
  }


})
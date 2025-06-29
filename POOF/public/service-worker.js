chrome.storage.local.set({DIH: false,
                          positionX: `1450px`,
                          positionY: `600px`
                          }) // define DIH variable to false
  .then(() => {
    console.log("DIH is set to false");
    return chrome.storage.local.get(["DIH"])})

// Listen for messages from popup
// Note: When user reboots their digital pet, it should respawn in a set location in case they've put their pet in an inaccessible area
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'DIH_UPDATE') {
    console.log("Service worker received DIH update:", request.value);

    //Notify tabs to update DIH display
    chrome.tabs.query({currentWindow: true}, (tabs) => {
      tabs.forEach(tab => {

        if (tab.url && tab.url.startsWith('http')) {
          chrome.tabs.sendMessage(tab.id, {
            type: "DIH_UPDATE",
            value: request.value
          }).catch(error => {
            console.log('Could not send update to ' + tab.url)
          });
        }

      });
    });
  }
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== "local") return;

  if (changes.positionX || changes.positionY) {

    //Notify tabs to update DIH display
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
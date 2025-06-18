chrome.storage.local.set({DIH: false,
                          positionX: `5px`,
                          positionY: `5px`
                          }) // define DIH variable to false
  .then(() => {
    console.log("DIH is set to false");
    return chrome.storage.local.get(["DIH"])})
  .then((result) => { // return DIH statusAdd commentMore actions
    console.log("Value is " + result.DIH.toString());
  })
  .catch((error) => {
    console.error("Error:", error);
  });

chrome.storage.onChanged.addListener(({positionX, positionY}) => {
    console.log(positionX)
    console.log(positionY)
})

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'DIH_UPDATE') {
    console.log("Service worker received DIH update:", request.value);

    //Notify tabs to update DIH display
    chrome.tabs.query({}, (tabs) => {
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

//If DIH is ON, show on new tabs
chrome.tabs.onCreated.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['injector.js']
    })

})
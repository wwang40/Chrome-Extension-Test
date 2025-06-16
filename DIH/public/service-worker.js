chrome.storage.local.set({ DIH: false }) // define DIH variable to false
  .then(() => {
    console.log("DIH is set to false");
    return chrome.storage.local.get(["DIH"]);
  })
  .then((result) => { // return DIH status
    console.log("Value is " + result.DIH.toString());
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'DIH_UPDATE') {
    console.log("Service worker received DIH update:", request.value);
  }
});

chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            //alert('Hello World');
        }
    });
});
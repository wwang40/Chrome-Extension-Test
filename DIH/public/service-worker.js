chrome.action.onCLicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert('Hello World');
        }
    });
});
async function toggleButton() {
    let [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert('testing');
        }
    })
}
document.getElementById("toggleDIH").addEventListener("click", toggleButton);

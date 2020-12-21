chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.browserAction.setTitle({title: 'Вкл'})
        chrome.tabs.executeScript(tab.id, {file: "index-bundle.js"});
        chrome.tabs.insertCSS(null, {file: "style.css"});
    }
})
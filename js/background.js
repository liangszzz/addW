// background.js


chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
            id: 'add_word',
            title: 'add_word',
            contexts: ['selection']
        }
    );
});

chrome.contextMenus.onClicked.addListener(async (e) => {
    if (e.menuItemId === 'add_word') {
        const selection = e.selectionText;
        const language = chrome.storage.sync.get("language");
        let newVar = await translate("auto", language, selection);
        const json = {
            'selection': newVar
        }
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, json);
        });
    }
});

function translate(from, to, query) {
    if (!from) {
        from = "auto"
    }
    if (!to) {
        to = "en"
    }
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${query}`
    return fetch(url).then(res => res.json());
}
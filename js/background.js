// background.js


chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
            id: 'add_word',
            title: 'add_word',
            contexts: ['selection']
        }
    );
});

chrome.contextMenus.onClicked.addListener((e) => {
    if (e.menuItemId === 'add_word') {
        const selection = e.selectionText;
        const json = {
            'selection': selection
        }
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, json, function (response) {
                console.log(response);
            });
        });
    }
});

function translate(from, to) {
    const appid = "20170417000044996";

    const url = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&from=en&to=zh&appid=2015063000000001&salt=1435660288&sign=f89f9594663708c1605f3d736d01d2d4`;
}
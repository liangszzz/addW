let languageEle = document.getElementById("language");

chrome.storage.sync.get("language", ({language}) => {
    if (language) {
        languageEle.value = language
    }
});

languageEle.addEventListener("change", () => {
    chrome.storage.sync.set({language: languageEle.value})
})
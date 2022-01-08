let language = document.getElementById("language");

// chrome.storage.sync.get(['language'], (target) => {
//     console.log("get", target)
//     if (target) {
//         language.value = target
//     }
// })
//
//
// language.addEventListener("change", (e) => {
//     console.log("set", language.value)
//     chrome.storage.sync.set({language: language.value})
// })
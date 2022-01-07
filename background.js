// background.js


chrome.runtime.onInstalled.addListener(() => {

  chrome.contextMenus.create(
    {
      id: 'add_word',
      title: 'add_word',
      contexts:['selection']
    }

  );
  console.log('Context');
});

chrome.contextMenus.onClicked.addListener((e) => {
  if(e.menuItemId==='add_word'){
    console.log("click",e.selectionText)
  }
});
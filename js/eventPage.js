var contextMenuItem = {
    "id": "clipboard_notes",
    "title": "Save to Clipboard Notes",
    "contexts":["selection","link", "image"]
}

chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener(function (clickedData) {

    if (clickedData.menuItemId == "clipboard_notes") {
        

        chrome.storage.sync.get(["storedData"], function (data) {
        

            console.log(clickedData)
            console.log(data)
            var newData = { "key": clickedData.selectionText, "type": clickedData.mediaType, "url": clickedData.pageUrl,"imgUrl": clickedData.srcUrl,"linkUrl": clickedData.linkUrl};

            // console.log(data)
            var updateData;
            if (data && data.storedData) {
                console.log(typeof data.storedData)
                updateData = data.storedData;
                updateData.unshift(newData);
            } else {
                updateData = [newData];
            }
            
            chrome.storage.sync.set({"storedData": updateData})
        });

   } 
});
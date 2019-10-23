$(function () {

    
    $("#fullContent").click(function () {

        chrome.tabs.create({ 'url': "/popup.html" })        
    })

    chrome.storage.sync.get(["storedData"], function (value) {
        console.log(value.storedData)
        $("#data-div").text("Hello " + value.storedData.length);

        // if (value.key == "akash") {
        //     var notificationOptions = {
        //         type: "basic",
        //         title: "Welcome Akash",
        //         message: " Welcome back Akash, to your notes",
        //         iconUrl:"1.jpg"
        //     };

        //     chrome.notifications.create("myNotification",notificationOptions)
        // }
    })
    // $("#name").keyup(function () {
    //     console.log("Testing")
    //     $("#data-div").text("Hello " + $("#name").val())
    //     chrome.storage.sync.set({ "key": $("#name").val() })
        
    // });
})
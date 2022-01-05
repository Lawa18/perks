'use strict';

console.log('go to running popup.js');

window.onload = load_iframe();

function load_iframe()
{
    console.log('creation of bubble extension iframe');
    var iframe = document.createElement('iframe');
    iframe.id = "WPartners";
    iframe.src = "https://perks.so/chrome_extension";
    iframe.frameBorder= 0; 
    iframe.scrolling= "no";
    iframe.style.cssText = 'width:300px;height:600px;';
    document.body.appendChild(iframe);
}
// With "addEventListener" we register the current page window as listener for the
// postMessage's events. This means that when we call it from the Bubble app 
// (see Step 5 of this lesson) we'll execute the javascript function defined below
//window.addEventListener('message', (event) => {
    //console.log("WPartners-iFrame: postMessage called");

    // We retrieve the active and lastFocusedWindow list of Chrome tabs
    //chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {


      // We get the iFrame's window that loads the Bubble app and we send our message to Bubble
      //var iframe = document.getElementById("WPartners-iFrame");
      //var iframeWindow = iframe && (iframe.contentWindow || iframe.contentDocument);
      

      // We prepare our JSON message with the "stringify" function https://mzl.la/2LzeFng
      // We then send the message to Bubble (see Step 7 of this lesson to see how we 
      // receive the message in the Bubble App)
         //var msg = JSON.stringify( {"websiteSourceURL":tabs[0].websiteSourceURL});
      //iframeWindow.postMessage( {"StoreURL": msg}, "*");
    

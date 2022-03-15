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

    

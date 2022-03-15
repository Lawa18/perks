function showOffers() {
    //const hostName = window.location.host.split('.').reverse()[1]
    // make an Ajax call to the database
    // get back the offer, display on page
    //document.body.innerHTML = `<div>${hostName}</div>`;
    //document.querySelector('#app > div > div.flex.flex-column.vh-100 > header > div._4ea0e50d.bt.b--black-10 > div').innerHTML = `<div>${hostName}</div>`;


    // Get the URL of the page where we load the iFrame
    const wholeURL = window.location.href;
    const websiteSourceURL = window.location.host.split('.').reverse().slice(0, 2).reverse().join('.');

    // Create an HTML div 
    const div = document.createElement("div");


    if(wholeURL !== 'https://perks.so/chrome_extension') {
        div.innerHTML = `<iframe id="wpartners" src="https://perks.so/iframewidget?websiteSourceURL=${websiteSourceURL}" 
        frameBorder="0" scrolling="no" width="270px" height="0px" 
        style="position:fixed;top:2%;right:2%;z-index:999999999999999;"></iframe>`;
       

        // Add iframe to the page
        window.document.body.appendChild(div);

        window.addEventListener("message", (event) => {
          if(event.data === 'show me' && event.origin === 'https://perks.so') {
            document.getElementById('wpartners').height = '170px';
          }
          if(event.data === 'hide me' && event.origin === 'https://perks.so') {
            document.getElementById('wpartners').height = '0px';
          }
        }, false);
    }

}

showOffers();

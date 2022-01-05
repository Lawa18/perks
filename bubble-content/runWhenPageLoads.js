let queryParams = new URLSearchParams(window.location.search);
let websiteSourceURL = queryParams.get('websiteSourceURL');

console.log('URL in bubble', websiteSourceURL);

bubble_fn_storeURL(websiteSourceURL);

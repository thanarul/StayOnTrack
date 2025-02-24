// background script that listens for page changes and will block any distractions 

let blockedSites = ["youtube.com", "reddit.com"];

// triggers an event before a user navigates to a new webpage 
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
	// contains the url of the site the user is trying to visit 
	let url = new URL(details.url);

	// check if url is in blocked list 
	if (blockedSites.some(site => url.hostname.includes(site))) {
		// redirect user to blocked page 
		chrome.tabs.update(details.tabId, {url: "blocked.html"});
	}
}, {urls: ["<all_urls>"]});
const rewriteCookies = (settings) => {
    for (el of document.cookie.split("; ")) {document.cookie = el.split("=")[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;"}; //Not very clean, but only was to easily remove cookies
    for (el of settings.split("; ")) {document.cookie = el}
}

chrome.storage.local.get(["DDG-Settings"], (settings) => {
    settings["DDG-Settings"] != "" ? rewriteCookies(settings["DDG-Settings"]) : "";
})

window.addEventListener('beforeunload', () => {
    const setSettings = {"DDG-Settings" : document.cookie};
    chrome.storage.local.set(setSettings);
});

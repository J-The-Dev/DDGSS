const rewriteCookies = (settings) => {
    for (el of settings.split("; ")) {document.cookie = el}
}

chrome.storage.local.get(["DDG-Settings"], (settings) => {
    settings["DDG-Settings"] != "" ? rewriteCookies(settings["DDG-Settings"]) : "";
})

const onexit = () => {
    const setSettings = {"DDG-Settings" : document.cookie};
    chrome.storage.local.set(setSettings);
}

window.onbeforeunload = onexit;
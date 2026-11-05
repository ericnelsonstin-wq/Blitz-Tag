{
chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({
        url: "https://aquamarine-elf-c5065d.netlify.app"
    });
});
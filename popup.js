
document.getElementById("open").addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://aquamarine-elf-c5065d.netlify.app"
  });
});

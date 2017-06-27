let area = document.createElement("textarea");
area.contentEditable = true;
document.body.appendChild(area);

function get() {
  area.textContent = '';
  area.select();
  document.execCommand("paste");
  return area.textContent;
}

function set(text) {
  area.textContent = text
  area.select();
  document.execCommand("copy");
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({"url": "/clippy.html"});
});

browser.commands.onCommand.addListener((command) => {
  console.log('sending message');
  browser.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, command);
  });
});

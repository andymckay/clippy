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
  console.log('set current to:', text);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({"url": "/clippy.html"});
});

browser.commands.onCommand.addListener((command) => {
  browser.runtime.sendMessage(command);
});

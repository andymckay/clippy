let backgroundPage = browser.extension.getBackgroundPage();

var showContents = function() {
  document.getElementById('output').innerText = backgroundPage.get();
};

document.getElementById('get').addEventListener('click', function(e) {
  showContents()
  e.preventDefault();
});

document.getElementById('formsy').addEventListener('submit', function(e) {
  backgroundPage.set(document.getElementById('clipboard-input').value);
  showContents();
  e.preventDefault();
});

var doCommand = function(command) {
  if (command === 'paste-shruggie') {
    let current = backgroundPage.get();
    backgroundPage.set("¯\_(ツ)_/¯");
    document.execCommand("paste");  // currently returns false
    backgroundPage.set(current);
  }
};

window.addEventListener('load', function(e) {
  showContents();
});

browser.runtime.onMessage.addListener(doCommand);

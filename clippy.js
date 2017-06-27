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

window.addEventListener('load', function(e) {
  showContents();
});

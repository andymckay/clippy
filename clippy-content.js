function get() {
  let area = document.createElement("textarea");
  area.contentEditable = true;
  area.textContent = '';
  area.select();
  document.execCommand("paste");
  return area.textContent;
}

function set(text) {
  let area = document.createElement("textarea");
  area.contentEditable = true;
  area.textContent = text;
  area.select();
  document.execCommand("copy");
  console.log('set current to:', text);
}

var doCommand = function(command) {
  console.log('got message', command);
  if (command === 'paste-shruggie') {
    let current = get();
    set("¯\_(ツ)_/¯");
    console.log(document.execCommand("paste", false));
    set(current);
  }
};

browser.runtime.onMessage.addListener(doCommand);

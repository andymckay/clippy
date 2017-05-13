let area = document.createElement("textarea");
document.body.appendChild(area);
area.contentEditable = true;

function paste() {
  area.value = 'arg';
  area.select();
  console.log('Pre-paste: ' + area.value);
  console.log(document.execCommand("paste"));
  console.log('Post-paste: ' + area.value);
}

function copy(text) {
  area.value = text;
  area.select();
  console.log('Pre-copy: ' + area.value);
  console.log(document.execCommand("copy"));
  console.log('Post-copy: ' + area.value);
}

document.addEventListener("click", function(e) {
  let backgroundPage = browser.extension.getBackgroundPage();
  if (e.target.id === "paste") {
    backgroundPage.paste();
  }
  else if (e.target.id === "copy") {
    backgroundPage.copy("Testing 1,2,3");
  }
  e.preventDefault();
});

var didWait = false;
// DocRaptor polls docraptorJavaScriptFinished until it is true
docraptorJavaScriptFinished = function() {
  if (! didWait) {
    setTimeout(function(){
      didWait = true;
    }, 10000);
    return false;
  }
  // It's been 10 seconds, let's return true and make the PDF!
  return true;
}



setTimeout(function () {
    location.href = "page5.html";
}, 2000);
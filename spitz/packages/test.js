spitz = {}
spitz.print = function (x) {
  setTimeout(function(x) {
 postMessage(x)
 },100)
}
spitz.return = function (r) {
 postMessage("止")
}


onmessage = function(arg) {
 args = arg.data
 spitz.print("#")
  spitz.print("AMAZING")
  spitz.return()
};

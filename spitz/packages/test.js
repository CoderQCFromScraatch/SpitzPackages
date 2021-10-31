spitz = {}
spitz.print = function (x) {
  setTimeout(function(x) {
 postMessage(x)
 },25)
}
spitz.return = function (r) {
   setTimeout(function(r) {
 postMessage("止")
 },100)
}


onmessage = function(arg) {
 args = arg.data

};
 spitz.print("#")
  spitz.return()

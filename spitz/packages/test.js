spitz = {}
spitz.print = function (x) {
 postMessage(x)
}
spitz.return = function (r) {
   setTimeout(function(r) {
 postMessage("止")
 },100)
}


onmessage = function(arg) {
 args = arg.data

};
 spitz.print("OK")
  spitz.return()

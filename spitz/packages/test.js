spitz = {}
spitz.print = function (x) {
  setTimeout(function(x) {
 postMessage(x)
 },100)
}
spitz.return = function (r) {
 setTimeout(function() {
 postMessage("止")
 },100)
}


onmessage = function(arg) {
 args = arg.data
 spitz.print(args)

};
 spitz.print("#")
 spitz.return()

spitz = {}
spitz.print = function (x) {
 postMessage(x)
}
spitz.return = function (r) {
 setTimeout(function() {
 postMessage("止")
 },10)
}


onmessage = function(arg) {
 args = arg.data

};
 spitz.print(3)
 spitz.return()

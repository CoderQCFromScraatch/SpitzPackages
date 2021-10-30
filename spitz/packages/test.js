spitz = {}
spitz.print = function (x) {
 postMessage(x)
}
spitz.return = function (r) {
 postMessage("止")
}


onmessage = function(arg) {
 args = arg.data

};
 spitz.print("#")
 spitz.return()

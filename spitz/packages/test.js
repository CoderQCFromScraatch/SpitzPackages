spitz = {}
spitz.print = function (x) {
 postMessage("p" + x)
}
spitz.return = function (r) {
 postMessage("r")
}


onmessage = function(arg) {
 args = arg.data
 spitz.print(3)
 spitz.return()
};


spitz = {}
spitz.print = function (x) {
 postMessage(x)
}
spitz.return = async function (r) {
 await setTimeout(function() {
 postMessage("止")
 },100)
}


onmessage = function(arg) {
 args = arg.data

};
 spitz.print("#")
 spitz.return()

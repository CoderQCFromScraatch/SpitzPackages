spitz = {}
spitz.print = function (x) {
 postMessage(x)
}
spitz.return = async function () {
 await setTimeout(function() {
 postMessage("止")
 },1000)
}


onmessage = function(arg) {
 args = arg.data

};
 spitz.print("#")
 spitz.return()

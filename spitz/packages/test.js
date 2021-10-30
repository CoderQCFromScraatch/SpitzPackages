// START SPITZ LIBRARY
 var spitz = {}
 spitz.print = function(x) {
   tempvar = "p" + x
 }
 
 spitz.return = function() {
   tempvar = "r1"
 }
// END SPITZ LIBRARY



// START WORKER HANDLER
onmessage = function(arg) {
 args = arg.data
 
 
 // YOUR CODE BELOW
 spitz.print("Console")
 spitz.return()
};

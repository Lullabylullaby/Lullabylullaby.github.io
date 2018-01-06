// 始初化辅助log
var consoler = new VConsole();

var tool = document.getElementById("tool");
setInterval(function(){
  tool.innerHTML = "" + new Date();
},1000)

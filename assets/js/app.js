// 始初化辅助log
var consoler = new VConsole();

var tool = document.getElementById("tool");
setInterval(function(){
  tool.innerHtml = "" + new Date();
},1000)

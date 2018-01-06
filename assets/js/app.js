// 始初化辅助log
var consoler = new VConsole();

var body = document.getElementsByTagName("body")[0];
setInterval(function(){
  var colorStr = body.style.backgroundColor.substr(1);
  console.log( colorStr , parseInt(colorStr,16) , parseInt(colorStr,16).toString(16) );
  body.style.backgroundColor = "#" + Math.ceil( parseInt(colorStr,16) - 20 ).toString(16) ;
},300)

var body = document.getElementsByTagName("body")[0];
setInterval(function(){
  var colorStr = body.style.color.substr(1);
  console.log( colorStr , parseInt(colorStr,16) , parseInt(colorStr,16).toString(16) );
  body.style.color = "#" + parseInt(colorStr,16).toString(16);
},300)

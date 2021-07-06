window.onload = function(){
  var anchors = document.querySelectorAll('a');
  for (var i=0; i<anchors.length; i++){
    anchors[i].setAttribute('target', '_blank');
    anchors[i].setAttribute('rel', "noopener noreferrer")
  }
}

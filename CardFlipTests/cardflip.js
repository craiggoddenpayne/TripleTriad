var init = function() {
  var cards = document.getElementsByClassName('card');
  document.getElementById('flip').addEventListener( 'click', function(){
    for(var i=0; i < cards.length; i++){
      cards[i].toggleClassName('flipped');  
    }
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);

Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};

Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};

Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
}; 
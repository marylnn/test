function Game2048(wnd, pnode){
  this.wnd = wnd;
  this.doc = wnd.document;
  this.pnode = pnode;
  this.datas = [];
  this._initDom();
  this.start();
}

Game2048.prototype._initDom = function(){
  var contor = this.doc.createElement("div");
  var arr = ["<div>"];
  for(var i = 0, i<16; i++){
    arr.push("<span></span>");
  }
  arr.push("</div>");
  arr.push("<div><span>上</span><span>下</span><span>左</span><span>右</span></div>")
  arr.push("<div>得分:<span></span></div>")
  contor.innerHTML = arr.join("\n");
  this._bindEvent();
};
Game2048.prototype._bindEvent = function(){
  
};
Game2048.prototype.start = function(){
  
};

Game2048.prototype.doUp = function(){
  
};

Game2048.prototype.doDown = function(){
  
};

Game2048.prototype.doLeft = function(){
  
};

Game2048.prototype.doRight = function(){
  
};

Game2048.prototype.getRandom2or4 = function(){
  
};

function Wheel(el, cb) {
	this.elem = el;
	this.marker = true;
	this.delta;
	this.direction;
	this.interval = 100;
	this.counter1 = 0;
	this.counter2;
	this.cb = cb;
	return this;
}


Wheel.prototype.onWheel = function(e){
	this.counter1++;
	this.delta = e.deltaY;
	this.direction = this.delta > 0 ? 'down' : 'up';
	if (this.marker) this.wheelStart(e);
	console.log(this);
	return false;
}
Wheel.prototype.wheelStart = function(e){
	this.marker = false;
	this.wheelAct(e);
	console.log("hi2");
}
Wheel.prototype.wheelAct = function(e){
	this.counter2 = this.counter1;
	var obj = this;
	setTimeout(function(){
		console.log("hi3");
		if (obj.counter2 == obj.counter1) obj.wheelEnd(e);
		else obj.wheelAct(e);
	}, obj.interval);
}
Wheel.prototype.wheelEnd = function(e){
	this.cb(this.direction, e);
	this.marker = true;
	this.counter1 = 0;
	this.counter2 = false;
}
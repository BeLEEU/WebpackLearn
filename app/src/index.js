var obj = {a: 2} 
var funct = function(b, c) { console.log(this.a,b,c); return 1; }; // 定义一个函数用来执行
Function.prototype._call = function(base, ...args) {
    base = base || window;
    base.fn = this;
    let res = base.fn(...args);
    delete base.fn;
    return res;
}

Function.prototype._bind = function(base) {
    base = base || window;
    let fn = this;
    let arg = Array.prototype.slice.call(arguments,1)
    return function() {
        return fn._call(base, ...arg)
    }
}
funct._bind(obj, 1, 2);
funct();

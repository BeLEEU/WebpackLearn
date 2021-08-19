//手写实现call apply bind
Function.prototype._call = function(base, ...args) {
    base = base || window;
    base.fn = this;
    let res = base.fn(...args);
    delete base.fn;
    return res;
}

Function.prototype._bind = function(base, ...args) {
    base = base || window;
    base.fn = this
    return function() {
        let res = base.fn(...args);
        delete base.fn;
        return res;
    }
}

//手动实现ajax
export function ajax(url, method="GET", data=null, async=true) {
    
    let XHR = XMLHttpRequest;
    XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if(XHR.readyState === 4) console.log(`响应状态:${XHR.status}`);
    }

    XHR.open(method, url, async);
    XHR.send(data);
}
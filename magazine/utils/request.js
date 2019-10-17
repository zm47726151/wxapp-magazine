class Request {
baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine';
getData({url, method='GET', data={}}){
    return new Promise((res, rej) => {
    wx.request({
        url: this.baseUrl + url,
        method: method,
        data: data,
        success: data=> {
            data.data.code==0?res(data.data.data):this._showError(); 
        },
        fail: reason=> {
            rej(reason);
            this._showError();
        }
        });
    });
}
_showError(){
    wx.showToast({
        title: '请求错误',
        icon: 'none'
    });
}
}


export {Request};
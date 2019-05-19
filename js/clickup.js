let fnTextPopup = function (arr, options) {
    if (!arr || !arr.length) {
        return;    
    }
    let idx = 0;
    document.documentElement.addEventListener('click', function (event) {
        let x = event.pageX, y = event.pageY;
        let newElem = document.createElement('span');
        let newText = document.createTextNode(arr[idx]);
        newElem.appendChild(newText);
        newElem.className = 'text-popup';
        this.appendChild(newElem);

        // 删除
        newElem.addEventListener('animationend', function () {
            newElem.parentNode.removeChild(newElem);
        });
        // 位置
        newElem.style.left = (x - newElem.clientWidth / 2) + 'px';
        newElem.style.top = (y - newElem.clientHeight) + 'px';

        // 自增
        idx = (idx + 1) % arr.length;
    });    
};

fnTextPopup(['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']);
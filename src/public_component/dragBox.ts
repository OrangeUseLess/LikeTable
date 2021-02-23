/**
 * @param drag dom节点----可拖拽区域
 * @param wrap dom节点----父节点
 */
export const DragBox = (drag: any, wrap: any) => {
    function getCss(ele: any, prop: any) {
        return parseInt(window.getComputedStyle(ele)[prop]);
    }

    var initX: any,
        initY: any,
        dragable = false,
        wrapLeft = getCss(wrap, "left"),
        wrapRight = getCss(wrap, "top");

    drag.addEventListener("mousedown", function (e: any) {
        dragable = true;
        initX = e.clientX;
        initY = e.clientY;
    }, false);

    document.addEventListener("mousemove", function (e: any) {
        if (dragable === true) {
            var nowX = e.clientX,
                nowY = e.clientY,
                disX = nowX - initX,
                disY = nowY - initY;
            if (nowY < 0) {
                wrap.style.left = wrapLeft + disX + "px";
                wrap.style.top = "2px";
            } else {
                wrap.style.left = wrapLeft + disX + "px";
                wrap.style.top = wrapRight + disY + "px";
            }
        }
    });
    
    document.addEventListener("mouseup", function (e: any) {
        dragable = false;
        wrapLeft = getCss(wrap, "left");
        wrapRight = getCss(wrap, "top");
    }, false);

};
export default DragBox;


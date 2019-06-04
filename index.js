/**
 * 
 * @param {Element} canvas dom 
 * @param {String} text 
 * @param {Number} rotate 标准坐标轴角度
 * @param {String} color 
 * @param {Number} fontSize 
 * @param {Number} gap 水平间距
 * by https://github.com/intbingbing
 */
 
const drawWaterMark = (
    dom = document.getElementsByTagName('canvas')[0],
    text = '我是水印',
    rotate = -45,
    color = '#CCCDCF',
    fontSize = 17,
    gap = 20
) => {

    const ctx = dom.getContext('2d')
    ctx.font = `${fontSize}px 'PingFang SC'`
    ctx.fillStyle = color;
    let horizontalWidth = ctx.measureText(text).width
    horizontalWidth = Math.sqrt(horizontalWidth * horizontalWidth / 2) + fontSize

    const draw = (x, y) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-rotate / 180 * Math.PI);
        ctx.fillText(text, 0, 0);
        ctx.restore();
    }

    const width = dom.width
    const height = dom.height
    for (let i = 0; i < width; i += horizontalWidth + gap) {
        for (let j = 0; j < height; j += horizontalWidth + gap) {
            draw(i, j)
        }
    }

}

drawWaterMark()

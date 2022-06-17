import p5 from 'p5'

function sorting() {

    const myp5 = new p5(function (p) {

        const canvasDiv = document.querySelector('#canvasDiv')
        let canvasHeight = canvasDiv.clientHeight - 20
        let canvasWidth = canvasDiv.clientWidth
        const arrayElementWidth = canvasWidth / 50

        p.setup = function () {
            //set canvas
            p.createCanvas(canvasWidth, canvasHeight).parent('canvasDiv')
            //close canvas
            /* p.select('#canvas_close').mouseClicked(p.canvasClose) */
            /* p.button = p.createButton('click me').parent('canvasDiv');
            p.button.position(0, 0); */

            //set array
            p.values = Array.from({ length: canvasWidth / arrayElementWidth }, () => Math.floor(Math.random() * canvasHeight))

            //set framerate
            p.frameRate(60)

            p.i = 0
            p.unorderedArea = p.values.length
        }
        p.draw = function () {
            p.clear()
            //BUBBLE SORT
            if (p.unorderedArea > 0) {
                if (p.values[p.i] > p.values[p.i + 1]) {
                    let aux = p.values[p.i + 1]
                    p.values[p.i + 1] = p.values[p.i]
                    p.values[p.i] = aux
                }
                p.i++
                if (p.i == p.unorderedArea) {
                    p.i = 0
                    p.unorderedArea--
                }
            }

            //draw array
            p.values.forEach((e, index) => {
                p.stroke(0)
                if (index >= p.unorderedArea) {
                    p.fill(100, 255, 100)
                } else if (index == p.i) {
                    p.fill(150, 50, 200)
                } else {
                    p.fill(255)
                }
                p.rect(index * arrayElementWidth, canvasHeight - e, arrayElementWidth, e)
            })


        }
        p.windowResized = function () {
            canvasHeight = canvasDiv.clientHeight - 20
            canvasWidth = canvasDiv.clientWidth
            p.resizeCanvas(canvasWidth, canvasHeight);
        }

        p.canvasClose = function () {
            p.remove()
        }
    })
}
export default sorting
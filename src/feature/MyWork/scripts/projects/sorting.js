import p5 from 'p5'

function sorting() {

    const myp5 = new p5(function (p) {

        const canvasDiv = document.querySelector('#canvasDiv')
        let canvasHeight = canvasDiv.clientHeight - 20
        let canvasWidth = canvasDiv.clientWidth
        const arrayElementWidth = 10

        p.setup = function () {
            //set canvas
            p.createCanvas(canvasWidth, canvasHeight).parent('canvasDiv')
            //close canvas
            p.select('#canvas_close').mouseClicked(p.canvasClose)

            //set array
            p.values = Array.from({ length: canvasWidth / arrayElementWidth }, () => Math.floor(Math.random() * canvasHeight))

            //set framerate
            p.frameRate(5)
            p.background(4, 3, 8)


        }
        p.draw = function () {


            //draw array
            p.values.forEach((e, i) => {
                p.stroke(0)
                p.fill(255)
                p.rect(i * arrayElementWidth, canvasHeight - e, arrayElementWidth, e)
            })

            //resize
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
import p5 from 'p5'

function sorting() {


    const myp5 = new p5(function (p) {

        const height = window.innerHeight / 2
        const width = window.innerWidth / 2
        const w = 10;

        p.setup = function () {
            //set canvas
            p.createCanvas(width, height).parent('canvasDiv')

            //set array
            p.values = Array.from({ length: width / w }, () => Math.floor(Math.random() * height))
            //set framerate
            p.frameRate(5)

            p.background(4, 3, 8)
        }
        p.draw = function () {


            //draw array
            p.values.forEach((e, i) => {
                p.stroke(0)
                p.fill(255)
                p.rect(i * w, height - e, w, e)
            })
        }
    })
}
export default sorting
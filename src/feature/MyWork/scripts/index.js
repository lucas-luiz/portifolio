import sorting from './projects/sorting'

const projects = {
    sorting: () => sorting(),
    cryptografy: () => console.log('sorting'),
    ai: () => console.log('sorting'),
    search: () => console.log('sorting'),
    lorem: () => console.log('sorting'),
    api: () => console.log('sorting')
}

export default projects
/* <body>
    <div class="container">
        <h1>My Website</h1>
        <h2>It is all coming together.</h2>

        <div id="canvasDiv"></div>
    </div>
</body>
And then in your setup() function you create the canvas and put it in this div:

const myCanvas = createCanvas(400, 400);
myCanvas.parent('canvasDiv'); */
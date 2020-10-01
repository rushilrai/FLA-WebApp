function loadCanvas() {
    wd = 0.55 * parseInt(screen.width);
    ht = 600;
    console.log(wd, ht);

    // first we need to create a stage
    var stage = new Konva.Stage({
        container: 'container',   // id of container <div>
        width: 800,
        height: 600
    });

    // then create layer
    var layer = new Konva.Layer();
    var stateA = drawState('A', stage);
    var stateB = drawState('B', stage);
    var stateC = drawState('C', stage);
    layer.add(stateA);
    layer.add(stateB);
    layer.add(stateC);
    layer.add(drawTransition(stateA, stateB, stage));
    layer.add(drawTransition(stateB, stateA, stage));
    layer.add(drawTransition(stateB, stateC, stage));
    var stateA = drawState('A', stage);
    var stateB = drawState('B', stage);
    var stateC = drawState('C', stage);
    layer.add(stateA);
    layer.add(stateB);
    layer.add(stateC);
    layer.add(drawTransition(stateA, stateB, stage));
    layer.add(drawTransition(stateB, stateA, stage));
    layer.add(drawTransition(stateB, stateC, stage));
    stage.add(layer);
    layer.draw();
}

function drawState(label_text, stage) {
    var state = new Konva.Group({
        x: Math.random() * stage.width(),
        y: Math.random() * stage.height(),
        draggable: true
    });

    // create our shape
    var circle = new Konva.Circle({
        x: 0,
        y: 0,
        radius: 30,
        fill: 'whitesmoke',
        stroke: '#333333',
        strokeWidth: 4,
    });

    // create default state
    var label = new Konva.Text({
        x: -10,
        y: -12.5,
        text: label_text,
        fontSize: 30,
        fontFamily: 'Poppins',
        fill: '#333333'
    })

    state.add(circle);
    state.add(label);
    return state;
}

function getConnectorPoints(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    let angle = Math.atan2(-dy, dx);

    const radius = 50;

    return [
      from.x + -radius * Math.cos(angle + Math.PI),
      from.y + radius * Math.sin(angle + Math.PI),
      to.x + -radius * Math.cos(angle),
      to.y + radius * Math.sin(angle)
    ];
}
function drawTransition(stateA, stateB, stage) {
    var pts = getConnectorPoints(stateA.absolutePosition(), stateB.absolutePosition());

    var arrow = new Konva.Arrow({
        points: pts,
        pointerLength: 20,
        pointerWidth: 20,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 4,
    });

    stateA.on('dragmove', () => {
        var new_pts = getConnectorPoints(stateA.absolutePosition(), stateB.absolutePosition());
        arrow.points(new_pts);
    })

    stateB.on('dragmove', () => {
        var new_pts = getConnectorPoints(stateA.absolutePosition(), stateB.absolutePosition());
        arrow.points(new_pts);
    })

    return arrow;
}

loadCanvas();

function setupCamera(cameraParameters) {
    // set up an abbreviation
    var cp = cameraParameters;
    // create an initial camera with the desired shape
    var camera = new THREE.PerspectiveCamera(
        cp.fov,
        cp.aspectRatio,
        cp.near,
        cp.far
    );
    // set the camera location and orientation,
    // based on current camera angle mode:
    if ( cp.viewPoint == 1 ) {
        // change camera position:
        cp.eyeX = (deathStarParams.X / 2) * -1;
        cp.eyeY = 3;
        cp.eyeZ = (deathStarParams.Z / 2) * -1;
        // change camera target:
        cp.atX = deathStarParams.X;
        cp.atY = deathStarParams.Y / 2;
        cp.atZ = deathStarParams.Z;
    }
    else if ( cp.viewPoint == 2 ) {
         // change camera position:
         cp.eyeX = deathStarParams.X;
         cp.eyeY = deathStarParams.Y + (deathStarParams.hullRadius / 2);
         cp.eyeZ = deathStarParams.Z;
         // change camera target:
         cp.atX = 0;
         cp.atY = 0;
         cp.atZ = 0;
    }
    else {
        // Change camera position:
        cp.eyeX = 200;
        cp.eyeY = 50;
        cp.eyeZ = 150;
        // Change camera target:
        cp.atX = 0;
        cp.atY = 0;
        cp.atZ = 0;
        //upX: 0,
        //upY: 1,
        //upZ: 0,
    }
    
    camera.position.set(cp.eyeX, cp.eyeY, cp.eyeZ);
    camera.up.set(cp.upX, cp.upY, cp.upZ);
    camera.lookAt(new THREE.Vector3(cp.atX, cp.atY, cp.atZ));
    
    return camera;
}

function render() {
    // a render function; assume global variables scene, renderer, and camera
    renderer.render(scene, camera);
}

function addFaceCoordinates(as, at, bs, bt, cs, ct) {
    return [
        new THREE.Vector2(as, at),
        new THREE.Vector2(bs, bt),
        new THREE.Vector2(cs, ct),
    ];
}

function updateCamera() {

    // Remove the camera from the scene.
    scene.remove(camera);
    camera = setupCamera(cameraParams);
    scene.add(camera);

    if (enableOrbitControls) {
        cameraControls = new THREE.OrbitControls(camera, canvas);
        setupCameraControls(cameraControls);
    }
    render();
}

function setupCameraControls(cameraControls) {
    cameraControls.addEventListener("change", render);
    cameraControls.update();
}

// Used in the solution but doesn't need modification
function createPoint(P, radius, material) {
    // returns a mesh for a sphere of given radius and material at the
    // given location (a list of three coordinates), suitable for adding
    // to the scene. More for debugging than anything else.
    radius = radius || 0.1;
    material = material || new THREE.MeshNormalMaterial();
    var mesh = new THREE.Mesh(new THREE.SphereGeometry(radius), material);
    mesh.position.set(P[0], P[1], P[2]);
    return mesh;
}

// Used in the solution but doesn't need modification
function showCP(cpList, radius) {
    for (var i = 0; i < cpList.length; i++) {
        scene.add(createPoint(cpList[i], radius));
    }
}

function createBezierCurve(cpList, steps) {
    // Using the given list of control points, returns a
    // THREE.Geometry comprising 'steps' vertices, suitable for
    // combining with a material and creating a THREE.Line out of.
    var N = Math.round(steps) + 1; // number of vertices
    let path = [];

    var geometry = new THREE.Geometry();
    var curve = new THREE.CubicBezierCurve3();

    var cp = cpList[0];
    curve.v0 = new THREE.Vector3(cp[0], cp[1], cp[2]);
    cp = cpList[1];
    curve.v1 = new THREE.Vector3(cp[0], cp[1], cp[2]);
    cp = cpList[2];
    curve.v2 = new THREE.Vector3(cp[0], cp[1], cp[2]);
    cp = cpList[3];
    curve.v3 = new THREE.Vector3(cp[0], cp[1], cp[2]);

    var j,
        stepSize = 1 / (N - 1);
    for (j = 0; j < N; j++) {
        geometry.vertices.push(curve.getPoint(j * stepSize));
        // TODO 6.1: what is the previous line doing?
        // What else can we do with this information at this point in the code?
        path.push(curve.getPoint(j * stepSize)); // add the point to the path array
    }
    return [geometry, path];
}

function rotateAroundOrigin(obj, axis, angle) {
    obj.position.applyAxisAngle(axis, angle);
    obj.rotateOnAxis(axis, angle);
}

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
    // set the camera location and orientation
    camera.position.set(cp.eyeX, cp.eyeY, cp.eyeZ);
    camera.up.set(cp.upX, cp.upY, cp.upZ);
    camera.lookAt(new THREE.Vector3(cp.atX, cp.atY, cp.atZ));
    return camera;
}

function render() {
    // a render function; assume global variables scene, renderer, and camera
    renderer.render(scene, camera);
}

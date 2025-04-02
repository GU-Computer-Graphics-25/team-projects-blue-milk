function createGroundScene(params, materials) {
    let groundScene = new THREE.Object3D();

    let basePlateGeom = new THREE.PlaneGeometry(
        params.basePlateWidth,
        params.basePlateWidth
    );
    let basePlateMesh = new THREE.Mesh(basePlateGeom, materials.basePlate);
    basePlateMesh.rotateX(Math.PI / 2);
    groundScene.add(basePlateMesh);

    let centralBuilding = createCentralBuilding(
        params,
        materials.centralBuilding
    );
    groundScene.add(centralBuilding);

    return groundScene;
}

function createCentralBuilding(params, material) {
    let centralBuildingObject = new THREE.Object3D();
    let centralBuildingTopGeom = new THREE.SphereGeometry(
        params.centralBuildingTopRadius,
        32,
        16,
        0,
        2 * Math.PI,
        0,
        Math.PI / 2
    );
    let centralBuildingTopMesh = new THREE.Mesh(
        centralBuildingTopGeom,
        material
    );
    centralBuildingTopMesh.position.set(0, params.centralBuildingTopRadius, 0);

    let centralBuildingBottomGeom = new THREE.BoxGeometry(
        params.centralBuildingBottomLength,
        params.centralBuildingBottomLength / 2,
        params.centralBuildingBottomLength
    );
    let centralBuildingBottomMesh = new THREE.Mesh(
        centralBuildingBottomGeom,
        material
    );
    centralBuildingBottomMesh.position.set(
        0,
        params.centralBuildingBottomLength / 4,
        0
    );

    centralBuildingObject.add(centralBuildingTopMesh);
    centralBuildingObject.add(centralBuildingBottomMesh);

    return centralBuildingObject;
}

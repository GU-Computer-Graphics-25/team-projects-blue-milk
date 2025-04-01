function createGroundScene(params, materials) {
    let groundScene = new THREE.Object3D();
    let basePlateGeom = new THREE.PlaneGeometry(
        params.basePlateWidth,
        params.basePlateWidth
    );
    let basePlateMesh = new THREE.Mesh(basePlateGeom, materials.basePlate);
    basePlateMesh.rotateX(Math.PI / 2);

    let centralBuilding = new THREE.Object3D();
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
        materials.centralBuilding
    );
    centralBuildingTopMesh.position.set(0, params.centralBuildingTopRadius, 0);

    let centralBuildingBottomGeom = new THREE.BoxGeometry(
        params.centralBuildingBottomLength,
        params.centralBuildingBottomLength / 2,
        params.centralBuildingBottomLength
    );
    let centralBuildingBottomMesh = new THREE.Mesh(
        centralBuildingBottomGeom,
        materials.centralBuilding
    );
    centralBuildingBottomMesh.position.set(
        0,
        params.centralBuildingBottomLength / 4,
        0
    );

    centralBuilding.add(centralBuildingTopMesh);
    centralBuilding.add(centralBuildingBottomMesh);

    groundScene.add(basePlateMesh);
    groundScene.add(centralBuilding);
    return groundScene;
}

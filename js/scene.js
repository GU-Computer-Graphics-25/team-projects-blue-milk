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

    let siloMesh1 = createSiloBuilding(params, materials.siloBuilding);
    siloMesh1.position.set(50, params.siloBuildingHeight / 2, 30);
    groundScene.add(siloMesh1);

    let siloMesh2 = createSiloBuilding(params, materials.siloBuilding);
    siloMesh2.position.set(-50, params.siloBuildingHeight / 2, -50);
    groundScene.add(siloMesh2);

    let siloMesh3 = createSiloBuilding(params, materials.siloBuilding);
    siloMesh3.position.set(30, params.siloBuildingHeight / 2, 50);
    groundScene.add(siloMesh3);

    let crateBuilding1 = createCrateBuilding(params, materials.crateBuilding);
    crateBuilding1.position.set(-50, params.crateBuildingHeight / 2, 0);
    groundScene.add(crateBuilding1);

    let crateBuilding2 = createCrateBuilding(params, materials.crateBuilding);
    crateBuilding2.position.set(50, params.crateBuildingHeight / 2, -20);
    groundScene.add(crateBuilding2);

    let crateBuilding3 = createCrateBuilding(params, materials.crateBuilding);
    crateBuilding3.rotateY(Math.PI / 2);
    crateBuilding3.position.set(-20, params.crateBuildingHeight / 2, 40);
    groundScene.add(crateBuilding3);

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

function createSiloBuilding(params, material) {
    let siloBuildingObject = new THREE.Object3D();
    let siloTopGeom = new THREE.SphereGeometry(
        params.siloBuildingRadius,
        32,
        16,
        0,
        2 * Math.PI,
        0,
        Math.PI / 2
    );
    let siloBottomGeom = new THREE.CylinderGeometry(
        params.siloBuildingRadius,
        params.siloBuildingRadius,
        params.siloBuildingHeight,
        32
    );

    let siloTopMesh = new THREE.Mesh(siloTopGeom, material);
    siloTopMesh.position.set(
        0,
        params.siloBuildingHeight - params.siloBuildingRadius,
        0
    );
    let siloBottomMesh = new THREE.Mesh(siloBottomGeom, material);

    siloBuildingObject.add(siloTopMesh);
    siloBuildingObject.add(siloBottomMesh);
    return siloBuildingObject;
}

function createCrateBuilding(params, material) {
    let crateBuildingGeom = new THREE.BoxGeometry(
        params.crateBuildingWidth,
        params.crateBuildingHeight,
        params.crateBuildingLength
    );
    let crateBuildingMesh = new THREE.Mesh(crateBuildingGeom, material);
    return crateBuildingMesh;
}

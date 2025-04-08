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
    crateBuilding2.rotateY(Math.PI);
    groundScene.add(crateBuilding2);

    let crateBuilding3 = createCrateBuilding(params, materials.crateBuilding);
    crateBuilding3.rotateY(Math.PI / 2);
    crateBuilding3.position.set(-20, params.crateBuildingHeight / 2, 40);
    groundScene.add(crateBuilding3);

    let stairBuilding = createStairBuilding(params, materials.stairBuilding);
    stairBuilding.position.set(0, params.stairBuildingBaseHeight / 2, -60);
    stairBuilding.rotateY(Math.PI);

    groundScene.add(stairBuilding);

    return groundScene;
}

function createCentralBuilding(params, materials) {
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
        materials.centralBuildingTop
    );
    centralBuildingTopMesh.position.set(0, params.centralBuildingTopRadius, 0);

    let centralBuildingBottomGeom = new THREE.BoxGeometry(
        params.centralBuildingBottomLength,
        params.centralBuildingBottomLength / 2,
        params.centralBuildingBottomLength
    );
    centralBuildingBottomGeom.faceVertexUvs[0] = [
        // FRONT
        addFaceCoordinates(1 / 3, 2 / 3, 1 / 3, 1 / 2, 2 / 3, 2 / 3), // 021
        addFaceCoordinates(1 / 3, 1 / 2, 2 / 3, 1 / 2, 2 / 3, 2 / 3), // 231
        // BACK
        addFaceCoordinates(1 / 3, 1 / 6, 1 / 3, 0, 2 / 3, 1 / 6), // 465
        addFaceCoordinates(1 / 3, 0, 2 / 3, 0, 2 / 3, 1 / 6), // 675
        // TOP
        addFaceCoordinates(2 / 3, 1, 1 / 3, 1, 2 / 3, 2 / 3), // 451
        addFaceCoordinates(1 / 3, 1, 1 / 3, 2 / 3, 2 / 3, 2 / 3), // 501
        // BOTTOM
        addFaceCoordinates(1 / 3, 1 / 6, 2 / 3, 1 / 6, 1 / 3, 1 / 2), // 762
        addFaceCoordinates(2 / 3, 1 / 6, 2 / 3, 1 / 2, 1 / 3, 1 / 2), // 632
        // LEFT
        addFaceCoordinates(0, 2 / 3, 0, 1 / 2, 1 / 3, 2 / 3), // 570
        addFaceCoordinates(0, 1 / 2, 1 / 3, 1 / 2, 1 / 3, 2 / 3), // 720
        // RIGHT
        addFaceCoordinates(2 / 3, 2 / 3, 2 / 3, 1 / 2, 1, 2 / 3), // 134
        addFaceCoordinates(2 / 3, 1 / 2, 1, 1 / 2, 1, 2 / 3), // 364
    ];
    let centralBuildingBottomMesh = new THREE.Mesh(
        centralBuildingBottomGeom,
        materials.centralBuildingBase
    );
    centralBuildingBottomMesh.position.set(
        0,
        params.centralBuildingBottomLength / 4,
        0
    );
    console.log(centralBuildingBottomGeom);
    centralBuildingObject.add(centralBuildingTopMesh);
    centralBuildingObject.add(centralBuildingBottomMesh);

    return centralBuildingObject;
}

function createSiloBuilding(params, materials) {
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

    let siloTopMesh = new THREE.Mesh(siloTopGeom, materials.siloBuildingTop);
    siloTopMesh.position.set(
        0,
        params.siloBuildingHeight - params.siloBuildingRadius,
        0
    );
    let siloBottomMaterial = [
        materials.siloBuildingBaseWall,
        materials.siloBuildingBaseTopBottom,
        materials.siloBuildingBaseTopBottom,
    ];
    let siloBottomMesh = new THREE.Mesh(siloBottomGeom, siloBottomMaterial);

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
    crateBuildingGeom.faceVertexUvs[0] = [
        // FRONT
        addFaceCoordinates(1 / 4, 3 / 4, 1 / 4, 1 / 2, 3 / 4, 3 / 4), // 021
        addFaceCoordinates(1 / 4, 1 / 2, 3 / 4, 1 / 2, 3 / 4, 3 / 4), // 231
        // BACK
        addFaceCoordinates(1 / 4, 1 / 4, 1 / 4, 0, 3 / 4, 1 / 4), // 465
        addFaceCoordinates(1 / 4, 0, 3 / 4, 0, 3 / 4, 1 / 4), // 675
        // TOP
        addFaceCoordinates(3 / 4, 1, 1 / 4, 1, 3 / 4, 3 / 4), // 451
        addFaceCoordinates(1 / 4, 1, 1 / 4, 3 / 4, 3 / 4, 3 / 4), // 501
        // BOTTOM
        addFaceCoordinates(1 / 4, 1 / 4, 3 / 4, 1 / 4, 1 / 4, 1 / 2), // 762
        addFaceCoordinates(3 / 4, 1 / 4, 3 / 4, 1 / 2, 1 / 4, 1 / 2), // 632
        // LEFT
        addFaceCoordinates(0, 3 / 4, 0, 1 / 2, 1 / 4, 3 / 4), // 570
        addFaceCoordinates(0, 1 / 2, 1 / 4, 1 / 2, 1 / 4, 3 / 4), // 720
        // RIGHT
        addFaceCoordinates(3 / 4, 3 / 4, 3 / 4, 1 / 2, 1, 3 / 4), // 134
        addFaceCoordinates(3 / 4, 1 / 2, 1, 1 / 2, 1, 3 / 4), // 364
    ];
    let crateBuildingMesh = new THREE.Mesh(crateBuildingGeom, material);
    console.log(crateBuildingGeom);
    return crateBuildingMesh;
}

function createStairBuilding(params, materials) {
    let stairBuildingObject = new THREE.Object3D();
    let stairBuildingBaseGeom = new THREE.BoxGeometry(
        params.stairBuildingBaseWidth,
        params.stairBuildingBaseHeight,
        params.stairBuildingBaseWidth
    );
    stairBuildingBaseGeom.faceVertexUvs[0] = [
        // FRONT
        addFaceCoordinates(1 / 3, 2 / 3, 1 / 3, 1 / 2, 2 / 3, 2 / 3), // 021
        addFaceCoordinates(1 / 3, 1 / 2, 2 / 3, 1 / 2, 2 / 3, 2 / 3), // 231
        // BACK
        addFaceCoordinates(1 / 3, 1 / 6, 1 / 3, 0, 2 / 3, 1 / 6), // 465
        addFaceCoordinates(1 / 3, 0, 2 / 3, 0, 2 / 3, 1 / 6), // 675
        // TOP
        addFaceCoordinates(2 / 3, 1, 1 / 3, 1, 2 / 3, 2 / 3), // 451
        addFaceCoordinates(1 / 3, 1, 1 / 3, 2 / 3, 2 / 3, 2 / 3), // 501
        // BOTTOM
        addFaceCoordinates(1 / 3, 1 / 6, 2 / 3, 1 / 6, 1 / 3, 1 / 2), // 762
        addFaceCoordinates(2 / 3, 1 / 6, 2 / 3, 1 / 2, 1 / 3, 1 / 2), // 632
        // LEFT
        addFaceCoordinates(0, 2 / 3, 0, 1 / 2, 1 / 3, 2 / 3), // 570
        addFaceCoordinates(0, 1 / 2, 1 / 3, 1 / 2, 1 / 3, 2 / 3), // 720
        // RIGHT
        addFaceCoordinates(2 / 3, 2 / 3, 2 / 3, 1 / 2, 1, 2 / 3), // 134
        addFaceCoordinates(2 / 3, 1 / 2, 1, 1 / 2, 1, 2 / 3), // 364
    ];
    let stairBuildingBaseMesh = new THREE.Mesh(
        stairBuildingBaseGeom,
        materials.stairBuildingBase
    );
    stairBuildingBaseMesh.rotateY(Math.PI / 2);
    stairBuildingObject.add(stairBuildingBaseMesh);

    let stairBuildingTopGeom = new THREE.BoxGeometry(
        params.stairBuildingTopLength,
        params.stairBuildingTopHeight,
        params.stairBuildingBaseWidth
    );
    stairBuildingTopGeom.faceVertexUvs[0] = [
        // FRONT
        addFaceCoordinates(1 / 4, 3 / 4, 1 / 4, 1 / 2, 3 / 4, 3 / 4), // 021
        addFaceCoordinates(1 / 4, 1 / 2, 3 / 4, 1 / 2, 3 / 4, 3 / 4), // 231
        // BACK
        addFaceCoordinates(1 / 4, 1 / 4, 1 / 4, 0, 3 / 4, 1 / 4), // 465
        addFaceCoordinates(1 / 4, 0, 3 / 4, 0, 3 / 4, 1 / 4), // 675
        // TOP
        addFaceCoordinates(3 / 4, 1, 1 / 4, 1, 3 / 4, 3 / 4), // 451
        addFaceCoordinates(1 / 4, 1, 1 / 4, 3 / 4, 3 / 4, 3 / 4), // 501
        // BOTTOM
        addFaceCoordinates(1 / 4, 1 / 4, 3 / 4, 1 / 4, 1 / 4, 1 / 2), // 762
        addFaceCoordinates(3 / 4, 1 / 4, 3 / 4, 1 / 2, 1 / 4, 1 / 2), // 632
        // LEFT
        addFaceCoordinates(0, 3 / 4, 0, 1 / 2, 1 / 4, 3 / 4), // 570
        addFaceCoordinates(0, 1 / 2, 1 / 4, 1 / 2, 1 / 4, 3 / 4), // 720
        // RIGHT
        addFaceCoordinates(3 / 4, 3 / 4, 3 / 4, 1 / 2, 1, 3 / 4), // 134
        addFaceCoordinates(3 / 4, 1 / 2, 1, 1 / 2, 1, 3 / 4), // 364
    ];
    let stairBuildingTopMesh = new THREE.Mesh(
        stairBuildingTopGeom,
        materials.stairBuildingTop
    );

    stairBuildingTopMesh.position.set(
        0,
        (params.stairBuildingBaseHeight + params.stairBuildingTopHeight) / 2,
        (params.stairBuildingBaseWidth - params.stairBuildingTopLength) / 2
    );
    stairBuildingTopMesh.rotateY(Math.PI / 2);
    stairBuildingObject.add(stairBuildingTopMesh);
    return stairBuildingObject;
}

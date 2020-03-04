let scene, camera, renderer, light, plane;
let Add = 0.005, theta = 0;

let createPyramid = function(x, y, z, width, height) {
    // Image from ​Japanese Wikipedia user Miya.m, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=281620
    let texture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/3/3b/Tuff_ohyaishi02.jpg');
    let geometry = new THREE.CylinderGeometry(0, width, height, 4);
    let material = new THREE.MeshLambertMaterial({map: texture});
    let p = new THREE.Mesh(geometry, material);
    p.position.set(x, y, z);
    p.castShadow = true;
    p.receiveShadow = true;
    return p;
};

let createGeometry = function() {
    // Image from Ji-Elle - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=9429566
    let texture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Adrar_sands.JPG/1280px-Adrar_sands.JPG');
    let material = new THREE.MeshLambertMaterial({map: texture});
    let geometry = new THREE.BoxGeometry(1000, 1, 1000);
    plane = new THREE.Mesh(geometry, material);
    plane.position.y = -1;
    plane.receiveShadow = true;
    
    scene.add(plane);
    
    scene.add(createPyramid(0, 0, 0, 20, 25));
    scene.add(createPyramid(10, 0, -20, 30, 40));
    scene.add(createPyramid(30, 0, -30, 25, 35));
    scene.add(createPyramid(-15, 0, -15, 10, 10));
    
};

let init = function() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 10, 40);

    light = new THREE.DirectionalLight(0xffffff, 1);
    light.castShadow = true;
    light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50, 1, 10, 2500));
    light.shadow.bias = 0.0001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 1024;
    light.position.set(10, 20, 0);
    
    scene.add(light);
    
    createGeometry();
    
    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    
    document.body.appendChild(renderer.domElement);
};

let mainLoop = function() {
    light.position.x = 20 * Math.sin(theta);
    light.position.y = 20 * Math.cos(theta);
    theta += Add;
    
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();

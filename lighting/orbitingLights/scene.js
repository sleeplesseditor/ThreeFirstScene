let scene, camera, renderer, light, light2;
let cube, sphere1, sphere2;
let Add = 0.03, theta = 0;

let createGeometry = function() {
    
    let geometry = new THREE.BoxGeometry(5, 5, 5);
    let material = new THREE.MeshPhongMaterial({color: 0Xdff913, shininess: 100, side: THREE.DoubleSide});
    cube = new THREE.Mesh(geometry, material);
    cube.rotation.x = 0.6;
    cube.rotation.y = 0.6;
    
    geometry = new THREE.SphereGeometry(0.1, 30, 30);
    material = new THREE.MeshBasicMaterial({color: 0xffffff});
    sphere1 = new THREE.Mesh(geometry, material);
    
    geometry = new THREE.SphereGeometry(0.1, 30, 30);
    material = new THREE.MeshBasicMaterial({color: 0xffffff});
    sphere2 = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    scene.add(sphere1);
    scene.add(sphere2);
};

let init = function() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 20;

    light = new THREE.PointLight(0xffffff, 2, 20, 2);
    light.position.y = 5;
    light2 = new THREE.PointLight(0xffffff, 2, 20, 2);
    
    scene.add(light);
    scene.add(light2);
    
    createGeometry();
                
    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
};

let mainLoop = function() {
    
    light.position.x = 6 * Math.sin(theta);
    light.position.z = 6 * Math.cos(theta);
    sphere1.position.x = light.position.x;
    sphere1.position.z = light.position.z;
    
    light2.position.y = -10 * Math.sin(theta);
    light2.position.z = -10 * Math.cos(theta);
    sphere2.position.y = light2.position.y;
    sphere2.position.z = light2.position.z;
    
    theta += Add;
    
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();
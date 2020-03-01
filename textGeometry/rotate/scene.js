let scene, camera, renderer, text;
let Add = 0.01, theta = 0;
    
let createGeometry = function() {   
    let loader = new THREE.FontLoader();
    let font = loader.parse(fontJSON);
    let geometry = new THREE.TextGeometry("Your Mum, Though...", {font: font, size: 5, height: 2, style: 'normal'});
    let material = new THREE.MeshBasicMaterial({color: 0X034b59});
    text = new THREE.Mesh(geometry, material);
    text.position.x = -15;
    scene.add(text);
};

let init = function() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 5, 40);
    
    createGeometry();
    
    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
};

let mainLoop = function() {
    text.rotation.y += Add;
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();
let scene, camera, renderer, text;
let Add = 0.06, theta = 0;

let createGeometry = function() {
    let loader = new THREE.FontLoader();
    let font = loader.parse(fontJSON);
    let titles = "99 bottles of beer on the wall,\n99 bottles of beer.\nTake one down, pass it around,\n98 bottles of beer on the wall,\n98 bottles of beer.\nTake one down, pass it around,\n97 bottles of beer on the wall,\n97 bottles of beer.\nTake one down, pass it around,\n96 bottles of beer on the wall,\n96 bottles of beer.\nTake one down, pass it around,\n95 bottles of beer on the wall,\n95 bottles of beer...";
    let geometry = new THREE.TextGeometry(titles, {font: font, size: 3, height: 0.1});
    let material = new THREE.MeshBasicMaterial({color:0xffffff});
    text = new THREE.Mesh(geometry, material);
    
    text.position.x = -25;
    text.rotation.x = -0.9;
    scene.add(text);
    
};

let init = function() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 150);
    camera.position.set(0, 5, 40);
    
    createGeometry();
    
    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
};

let mainLoop = function() {
    text.position.z -= Add;
    text.position.y += Add / 2;
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();
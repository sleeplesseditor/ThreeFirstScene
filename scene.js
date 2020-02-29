// set up the environment - 
  // initiallize scene, camera, objects and renderer
  let scene, camera, renderer;
    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xababab);
        
        // create an locate the camera
        
        camera = new THREE.PerspectiveCamera(30, 
                        window.innerWidth / window.innerHeight, 
                        1, 1000);
        camera.position.z = 5;
        
        
        // create the renderer   
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
    };
  
    // main animation loop - calls 50-60 in a second.
    let mainLoop = function() {
        console.log("Hello");
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();
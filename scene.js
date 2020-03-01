// set up the environment - 
  // initiallize scene, camera, objects and renderer
  let scene, camera, renderer, cube, sphere;
    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let Add = 0.01;

    // let createCube = function(){
    //   let geometry = new THREE.BoxGeometry(1,1,1);
    //   let material = new THREE.MeshBasicMaterial({color: 0x00a1cb, wireframe: true});
    //   cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);
    // };

    let createSphere = function(){
      let geometry = new THREE.SphereGeometry(5, 30, 30);
      let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
    }

    let init = function() {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        
        // create an locate the camera
        
        camera = new THREE.PerspectiveCamera(75, 
                        window.innerWidth / window.innerHeight, 
                        1, 1000);
        camera.position.z = 20;

        // createCube();
        createSphere();
        
        // create the renderer   
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);        
    };
  
    // main animation loop - calls 50-60 in a second.
    let mainLoop = function() {
        // cube.position.x += Add;
        // cube.rotation.y += Add;    
        // //  cube.rotation.z -= Add;
        
        // if(cube.position.x <= -3 || cube.position.x >= 3)
        //   Add *= -1;

        sphere.position.x += Add;
        sphere.rotation.y += Add;   

        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();
let scene, camera, renderer, light1;
    let spheres = [];
    let sphere;
    let Add = 0.01, theta = 0;
    const Radius = 4, Base_X = -15, Base_Y = -15;
    let createGeometry = function() {
        let material = new THREE.MeshPhongMaterial({color: 0X0450fb, shininess: 100, side: THREE.DoubleSide});
        for(let i = 0; i < 4; i++)
            for(let j = 0; j < 4; j++) {
                let geometry = new THREE.SphereGeometry(Radius, 30, 30);
                let sphere = new THREE.Mesh(geometry, material);
                sphere.position.x = Base_X + j * 2 * (Radius+0.5);
                sphere.position.z = -2*Radius * i;
                sphere.position.y = Base_Y + i * Radius;
                scene.add(sphere);
            }
        
        geometry = new THREE.SphereGeometry(2, 30, 30);
        material = new THREE.MeshPhongMaterial({color: 0X00ff00, shininess: 100, side: THREE.DoubleSide});
        sphere = new THREE.Mesh(geometry, material);
        
        sphere.position.y = 20;
        
        scene.add(sphere);
    };

    let init = function() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000); 
        camera.position.set(0, 0, 50);
    
        light1 = new THREE.DirectionalLight(0xffffff, 1);
        
        scene.add(light1);
        
        createGeometry();
                  
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);     
    };
       
    let mainLoop = function() {
        
        camera.lookAt(sphere.position);
        
        sphere.position.y = 20 * Math.sin(theta);
        sphere.position.z = 20 * Math.cos(theta);
        
        camera.position.y = sphere.position.y;
        camera.position.z = sphere.position.z + 5;
        theta += Add;
        
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    init();
    mainLoop();
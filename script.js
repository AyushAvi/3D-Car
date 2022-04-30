
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const scene = new THREE.Scene();
const button = document.getElementById('btn');


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(4, 2, 4);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambient)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0); // x, y, z
scene.add(directionalLight);


const mesh = new THREE.Group();

    function car(){
    console.log(car)
    console.log(canva);
    const boxGeo = new THREE.BoxGeometry(5,1,3);
    const boxMaterial = new THREE.MeshLambertMaterial({color:0xfb8e00});
    const box = new THREE.Mesh(boxGeo, boxMaterial);
    // scene.add(box);

    const circleGeo = new THREE.CylinderGeometry(.6,.6,.5,32);
    const circleMaterial = new THREE.MeshLambertMaterial({color : 0x454545})

    const circle1 = new THREE.Mesh(circleGeo,circleMaterial);
    circle1.position.x = 1.5;
    circle1.position.z = 1.4;
    circle1.position.y = -.5;
    circle1.rotation.x = 1.5;
    // scene.add(circle1);

    const circle2 = new THREE.Mesh(circleGeo,circleMaterial);
    circle2.position.x = -1.5;
    circle2.position.z = 1.4;
    circle2.position.y = -.5;
    circle2.rotation.x = 1.5;
    // scene.add(circle2);

    const circle3 = new THREE.Mesh(circleGeo,circleMaterial);
    circle3.position.x = 1.5;
    circle3.position.z = -1.4;
    circle3.position.y = -.5;
    circle3.rotation.x = 1.5;
    // scene.add(circle3);

    const circle4 = new THREE.Mesh(circleGeo,circleMaterial);
    circle4.position.x = -1.5;
    circle4.position.z = -1.4;
    circle4.position.y = -.5;
    circle4.rotation.x = 1.5;
    // scene.add(circle4);

    const headLightGeo = new THREE.BoxGeometry(.1,.3,.6);
    const headLightMaterial = new THREE.MeshLambertMaterial({color:0xFFFEC7});

    const backGeo = new THREE.BoxGeometry(.1,.3,.6);
    const backMaterial = new THREE.MeshLambertMaterial({color:0xcf3535});

    const headLight1 = new THREE.Mesh(headLightGeo,headLightMaterial);
    headLight1.position.x = 2.5;
    headLight1.position.y = 0.2;
    headLight1.position.z = 1;

    const headLight2 = new THREE.Mesh(headLightGeo,headLightMaterial);
    headLight2.position.x = 2.5;
    headLight2.position.y = 0.2;
    headLight2.position.z = -1;

    const backLight1 = new THREE.Mesh(backGeo,backMaterial);
    backLight1.position.x = -2.5;
    backLight1.position.y = 0.2;
    backLight1.position.z = 1;

    const backLight2 = new THREE.Mesh(backGeo,backMaterial);
    backLight2.position.x = -2.5;
    backLight2.position.y = 0.2;
    backLight2.position.z = -1;

    const grillGeo = new THREE.BoxGeometry(.1,.3,2.9);
    const grillMaterial = new THREE.MeshLambertMaterial({color : 0x4e4e4e})
    const grill = new THREE.Mesh(grillGeo,grillMaterial);
    grill.position.x = 2.5;
    grill.position.y = -0.3;

    const topGeo = new THREE.BoxGeometry(3,1,2.9);
    const topMaterial = new THREE.MeshLambertMaterial({color:0xfb8e00})
    const top = new THREE.Mesh(topGeo,topMaterial);
    top.position.y = 1;
    top.position.x = -0.3;

    const glassGeo = new THREE.BoxGeometry(.1,.9,2.8);
    const glassMaterial = new THREE.MeshLambertMaterial({color:0x0eafe1})
    const glassFront1 = new THREE.Mesh(glassGeo,glassMaterial);
    glassFront1.position.x = 1.17
    glassFront1.position.y = 1

    const glassGeo2 = new THREE.BoxGeometry(.1,.4,2.8);
    const glassMaterialFront2 = new THREE.MeshLambertMaterial({color : 0x0eafe1});
    const glassFront2 = new THREE.Mesh(glassGeo2,glassMaterialFront2);
    glassFront2.position.x = -1.77;
    glassFront2.position.y = 1;

    const glassGeo1 = new THREE.BoxGeometry(1.4,.9,2.95);
    const glassMaterial1 = new THREE.MeshLambertMaterial({color:0x0eafe1});
    const glass1 = new THREE.Mesh(glassGeo1,glassMaterial1);
    glass1.position.y = 1;
    glass1.position.x = .4;

    const glass2 = new THREE.Mesh(glassGeo1,glassMaterial1);
    glass2.position.y = 1;
    glass2.position.x = -1.05;


    mesh.add(box);
    mesh.add(circle1);
    mesh.add(circle2);
    mesh.add(circle3);
    mesh.add(circle4);
    mesh.add(headLight1);
    mesh.add(headLight2);
    mesh.add(grill);
    mesh.add(top);
    mesh.add(glassFront1);
    mesh.add(glassFront2);
    mesh.add(glass1);
    mesh.add(glass2);
    mesh.add(backLight1);
    mesh.add(backLight2);
    scene.add(mesh);

    return mesh;
}


var value = 0;

const canva = document.getElementsByTagName('canvas')[0];

canva.addEventListener('click', handleClick)

function handleClick(){
    value == 0.005 ? value = -0.005 : value = 0.005;
}

canva.addEventListener('dblclick', ()=>{
    value = 0;
})

function animate(){
    requestAnimationFrame(animate)
    mesh.rotation.y += value;
    renderer.render(scene,camera);
}

button.addEventListener('click', car)

animate();

//controls




      var Entity = function Entity() {
          var isVisible = true;
          var geometry, material, mesh;
          var object = this;
          var position;

          object.isVisible = function () {
              return isVisible;
          }            

          object.hide = function () {
              isVisible = false;
          }

          object.show = function () {
              isVisible = true;
          }

          object.reset = function () {
              position = null;
          }

          object.update = function () {
                
          }

          object.init = function () {
              this.geometry = new THREE.BoxGeometry(200, 200, 200);
              this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true, castShadow: true });
              this.mesh = new THREE.Mesh(geometry, material);
          }

          object.getMesh = function () {
              return this.mesh;
          }

          object.getMaterial = function () {
              return this.material;
          }

          object.getGeometry = function () {
              return this.geometry;
          }
      }
        
var box;
var gameobjects = [];
this.onload = function () {
    var scene, camera, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {
        scene = new THREE.Scene();
        var box = new Entity();
        box.init();
        scene.add(box.getMesh());
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;

        gameobjects.push(box);
        renderer = new THREE.WebGLRenderer();
        console.log(box);
        renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(renderer.domElement);
        renderer.render(scene, camera, box, true);
    }

    function animate() {
        requestAnimationFrame(animate);
        gameobjects.forEach(function (obj) {
            obj.rotation.x += 0.01;
        });

        renderer.render(scene, camera);

    }
}
import * as BABYLON from '@babylonjs/core'
/*
module.exports = {
    lol: function() {

        console.log("Hello")
    
        const canvas = document.getElementById('renderCanvas');
    
        const engine = new BABYLON.Engine(canvas);
    
        const createScene = function () {
            const scene = new BABYLON.Scene(engine);
    
            return scene;
        }
    
        const scene = createScene();
    
        engine.runRenderLoop(function() {
            scene.render();
        })
    }
};
*/

export const lol = () => {

    console.log("Hello")

    const canvas = document.getElementById('renderCanvas');

    const engine = new BABYLON.Engine(canvas);

    const createScene = function () {
        const scene = new BABYLON.Scene(engine);

        scene.createDefaultCamera(true, false, true)
        const box = new BABYLON.MeshBuilder.CreateBox()

        return scene;
    }

    const scene = createScene();

    engine.runRenderLoop(function() {
        scene.render();
    })
}
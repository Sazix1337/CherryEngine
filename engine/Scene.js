export class Scene {
    static Scene_$Create(SceneID, width, height, x, y) {
        const SceneObject = document.createElement('div')
        SceneObject.setAttribute('id', SceneID)
        const SceneNode = document.getElementById(SceneID)
        document.body.insertBefore(SceneObject, SceneNode)
        SceneObject.style.width = width + 'px'
        SceneObject.style.height = height + 'px'
        SceneObject.style.position = 'absolute'
        SceneObject.style.left = x + 'px'
        SceneObject.style.top = y + 'px'
    }

    static Scene_$Delete(SceneID) {
        const SceneObject = document.getElementById(SceneID)
        if (!SceneObject) {
            console.error(`Scene id with "${SceneID}" not found in DOM tree.`)
        } else {
            SceneObject.remove()
        }
    }

    static Scene_$Layer(SceneID, SceneLayer) {
        const SceneObject = document.getElementById(SceneID)
        if (!SceneObject) {
            console.error(`Scene id with "${SceneID}" not found in DOM tree.`)
        }  else {
            SceneObject.style.zIndex = SceneLayer
        }
    }
}
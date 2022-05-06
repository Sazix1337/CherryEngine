export function Image(SceneID, GameObjectID, sourceURL, x, y) {
    const GameObject = document.createElement('img')
    GameObject.setAttribute('id', GameObjectID) 
    const appId = document.getElementById(SceneID) 
    GameObject.setAttribute('data-fixedid', btoa(GameObjectID))
    const GameObjectNode = document.getElementById(GameObjectID)
    appId.insertBefore(GameObject, GameObjectNode)
    GameObject.src = sourceURL
    GameObject.style.position = 'relative'
    GameObject.style.top = y + 'px'
    GameObject.style.left = x + 'px'
}
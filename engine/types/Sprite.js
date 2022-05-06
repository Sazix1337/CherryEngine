export function Sprite(SceneID, GameObjectID, SpriteObjectID, sourceURL, x = 0, y = 0) {
    const GameObject = document.createElement('div')
    const SpriteObject = document.createElement('img')
    GameObject.setAttribute('id', GameObjectID)
    SpriteObject.setAttribute('id', SpriteObject)
    const appId = document.getElementById(SceneID) 
    GameObject.setAttribute('data-fixedid', btoa(GameObjectID))
    SpriteObject.setAttribute('data-fixedid', btoa(SpriteObjectID))
    const GameObjectNode = document.getElementById(GameObjectID)
    const SpriteObjectNode = document.getElementById(SpriteObjectID)
    appId.insertBefore(GameObject, GameObjectNode)
    GameObjectNode.insertBefore(SpriteObject, SpriteObjectNode)
    SpriteObject.setAttribute('src', sourceURL)
    GameObject.style.position = 'relative'
    GameObject.style.top = y + 'px'
    GameObject.style.left = x + 'px'
}
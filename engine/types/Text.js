export function Text(SceneID, GameObjectID, x = 0, y = 0, textContent, color = '#000000') {
    const GameObject = document.createElement('span')
    GameObject.setAttribute('id', GameObjectID)
    const appId = document.getElementById(SceneID) 
    GameObject.setAttribute('data-fixedid', btoa(GameObjectID))
    const GameObjectNode = document.getElementById(GameObjectID)
    appId.insertBefore(GameObject, GameObjectNode)
    GameObject.innerHTML = textContent
    GameObject.color = color
    GameObject.style.position = 'relative'
    GameObject.style.top = y + 'px'
    GameObject.style.left = x + 'px'
}
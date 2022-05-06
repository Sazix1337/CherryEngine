export class Events {
    static OnObjectClick(GameObjectID, callback) {
        const GameObject = document.getElementById(GameObjectID)
        GameObject.addEventListener('click', callback)
    }

    static OnMouseObjectHover(GameObjectID, callback) {
        const GameObject = document.getElementById(GameObjectID)
        GameObject.addEventListener('mouseenter', callback)
    }

    static OnMouseObjectExit(GameObjectID, callback) {
        const GameObject = document.getElementById(GameObjectID)
        GameObject.addEventListener('mouseleave', callback)
    }
}
export function GameObjectError(GameObjectID) {
    const GameObject = document.getElementById(GameObjectID)

    if (!GameObject) {
        console.error(`CherryEngineError [*GameObjectError]: *GameObject id with "${GameObjectID}" not found in DOM tree.`)
        return
    }
}
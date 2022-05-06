export function SceneObjectError(SceneID) {
    const SceneObject = document.getElementById(SceneID)

    if (!SceneObject) {
        console.error(`CherryEngineError [*SceneObjectError]: *SceneObject id with "${SceneID}" not found in DOM tree.`)
        return
    } else {}
}
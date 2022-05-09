export function TypeObjectError(type) {
    if (type.toLowerCase() != "image" || type.toLowerCase() != "sprite" || type.toLowerCase() != "text") {
        console.error(`CherryEngineError [*TypeObjectError]: Type of object("${type}") is not defined in registered types(Image, Text, Sprite)`)
        return
    }
}
import { GameObjectError } from "./errors/GameObjectError.js"
import { SceneObjectError } from "./errors/SceneObjectError.js"
import { Image } from "./types/Picture.js"
import { Sprite } from "./types/Sprite.js"
import { Text } from "./types/Text.js"

class $CherryEngine {
    $MouseY
    $MouseX

    APPLICATION_INFO = {
        Heading: "Application 1",
        Icon: "../Resources/icon.png",
        LANG: "Russian",
        Author: "",
        Copyrights: "",
        Description: "",
        Company: "",
        Version: ""
    }

    APPLICATION_SETTINGS = {
        debugger: false,
        ResolutionWidth: 640,
        ResolutionHeight: 480,
        BorderColor: [0, 0, 255],
        Heading: true
    }

    GLOBAL_VALUES = {

    }

    GLOBAL_STRINGS = {

    }

    constructor(debug = false) {
        const applicationWindow = document.createElement('div')
        applicationWindow.style.height = this.APPLICATION_SETTINGS.ResolutionHeight
        applicationWindow.style.width = this.APPLICATION_SETTINGS.ResolutionWidth
        applicationWindow.style.border = `1px solid rgb(${this.APPLICATION_SETTINGS.BorderColor[0]}, ${this.APPLICATION_SETTINGS[1]}, ${this.APPLICATION_SETTINGS.BorderColor[2]})`
        applicationWindow.setAttribute('id', 'cherry')
        const app_node = document.getElementById('cherry')
        if (this.APPLICATION_SETTINGS.Heading) {
            document.title = this.APPLICATION_INFO.Heading
        }
        if (this.APPLICATION_SETTINGS.ResolutionHeight === window.innerHeight && this.APPLICATION_SETTINGS.ResolutionWidth === window.innerWidth) {
            
        }
        document.body.insertBefore(applicationWindow, app_node)

        window.addEventListener('mousemove', event => {
            this.$MouseX = Math.floor(event.clientX)
            this.$MouseY = Math.floor(event.clientY)
        })

        if (debug) {
            this.APPLICATION_SETTINGS.debugger = debug
            console.log(this.$MouseX, this.$MouseY, this.APPLICATION_INFO, this.APPLICATION_SETTINGS)
        }
    }

    static Create_$Object(SceneID, GameObjectID, SpriteObjectID, type, textContent, x = 0, y = 0, sourceURL, color = "#000000") {
        SceneObjectError(SceneID)
        if (type.toLowerCase() === "text") {
            Text(SceneID, GameObjectID, x, y, textContent, color)
        } else if (type.toLowerCase() === "sprite") {
            Sprite(SceneID, GameObjectID, SpriteObjectID, sourceURL, x, y)
        } else if (type.toLowerCase() === "image") {
            Image(SceneID, GameObjectID, sourceURL, x, y)
        } else {
            console.error(`Type of *GameObject(Text, Sprite, Image) does not have the "${type}" type`)
        }
    }

    static Set_$Border(GameObjectID, borderSize, borderColor, borderType, borderRadius) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.border = `${borderSize}px ${borderType} ${borderColor}`
        GameObject.style.borderRadius = borderRadius + 'px'
    }

    static Set_$BackGround(GameObjectID, bg) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.background = bg
    }

    static Set_$Color(GameObjectID, color) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.color = color
    }

    static Move(GameObjectID, x = 0, y = 0) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.left = x + 'px'
        GameObject.style.top = y + 'px'
    }

    static MoveX(GameObjectID, x = 0) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.left = x + 'px'
    }

    static MoveY(GameObjectID, y = 0) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.top = y + 'px'
    }

    static Create_$Rect(SceneID, GameObjectID, x = 0, y = 0, height = 100, width = 100, borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000') {
        SceneObjectError(SceneID)
        const SceneObject = document.getElementById(SceneID)
        if (!SceneObject) {
            console.error(`CherryEngineError: Scene id with "${SceneID}" not found in DOM tree.`)
        } else {
            const rect = document.createElement('div')
            rect.setAttribute('id', GameObjectID)
            rect.setAttribute('data-fixedid', window.btoa(GameObjectID))
            const rectID = document.getElementById(GameObjectID)
            SceneObject.insertBefore(rect, rectID)
            rect.style.height = height + 'px'
            rect.style.width = width + 'px'
            rect.style.border = `${borderSize}px ${borderType} ${borderColor}`
            rect.style.background = background
            rect.style.position = 'relative'
            rect.style.left = x + 'px'
            rect.style.top = y + 'px'
        }
    }

    static Create_$Circle(SceneID, GameObjectID, x, y, height = 100, width = 100, borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000') {
        SceneObjectError(SceneID)
        const SceneObject = document.getElementById(SceneID)
        const circle = document.createElement('div')
        circle.setAttribute('id', GameObjectID)
        const circleID = document.getElementById(GameObjectID)
        circle.setAttribute('data-fixedid', window.btoa(GameObjectID))
        SceneObject.insertBefore(circle, circleID)
        circle.style.height = height + 'px'
        circle.style.width = width + 'px'
        circle.style.border = `${borderSize}px ${borderType} ${borderColor}`
        circle.style.background = background
        circle.style.borderRadius = '50%'
        circle.style.position = 'relative'
        circle.style.left = x + 'px'
        circle.style.top = y + 'px'
    }

    static getByStaticId(staticID) {
        const GameObject = document.getElementById(atob(staticID))
        return GameObject
    }

    static Delete_$Object(GameObjectID) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            console.error(`*GameObject id with "${GameObjectID}" not found in DOM tree.`)
        } else {
            GameObject.remove()
        }
    }

    static Object_$Rotate(GameObjectID, deg) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.transform = `rotate(${deg}deg)`
    }

    static Object_$RotateY(GameObjectID, deg) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.transform = `rotateY(${deg}deg)`
    }

    static Object_$RotateX(GameObjectID, deg) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.transform = `rotateX(${deg}deg)`
    }

    static Object_$RotateZ(GameObjectID, deg) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.transform = `rotateZ(${deg}deg)`
    }

    static Object_$Scale(GameObjectID, size) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.transform = `scale(${size})`
    }

    static Object_$SetTransTime(GameObjectID, ms) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.transitionDuration = `${ms}ms`  
    }

    static Object_$Layer(GameObjectID, ObjectLayer) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            console.error(`CherryEngineError [*GameObjectError]: *GameObject id with "${GameObjectID}" not found in DOM tree.`)
        } else {
            GameObject.style.zIndex = ObjectLayer
        }
    }
}

export default $CherryEngine
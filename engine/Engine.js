import { GameObjectError } from "./errors/GameObjectError.js"
import { SceneObjectError } from "./errors/SceneObjectError.js"
import { TypeObjectError } from "./errors/TypeObjectError.js"
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
        if (this.APPLICATION_INFO.LANG.toLocaleLowerCase() === "russian") {
            document.querySelector('html').lang = 'ru'
            const charset = document.createElement('meta')
            charset.setAttribute('id', 'cherry-charset')
            charset.setAttribute('charset', 'utf-8')
            const charsetNode = document.getElementById('cherry-charset')
            document.head.insertBefore(charset, charsetNode)
        } else {
            document.querySelector('html').lang = 'en'
        }

        if (debug) {
            this.APPLICATION_SETTINGS.debugger = debug
            console.log(this.$MouseX, this.$MouseY, this.APPLICATION_INFO, this.APPLICATION_SETTINGS)
        }

        return this
    }

    Create_$Object(SceneID, GameObjectID, SpriteObjectID, type, textContent, x = 0, y = 0, sourceURL, color = "#000000") {
        const SceneObject = document.getElementById(SceneID)
        if (!SceneObject) {
            SceneObjectError(SceneID)
            return
        }
        if (type.toLowerCase() === "text") {
            Text(SceneID, GameObjectID, x, y, textContent, color)
        } else if (type.toLowerCase() === "sprite") {
            Sprite(SceneID, GameObjectID, SpriteObjectID, sourceURL, x, y)
        } else if (type.toLowerCase() === "image") {
            Image(SceneID, GameObjectID, sourceURL, x, y)
        } else {
            TypeObjectError(type)
        }
    }

    Set_$Border(GameObjectID, borderSize, borderColor, borderType, borderRadius) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.border = `${borderSize}px ${borderType} ${borderColor}`
        GameObject.style.borderRadius = borderRadius + 'px'
    }

    Set_$BackGround(GameObjectID, bg) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.background = bg
    }

    Set_$Color(GameObjectID, color) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.color = color
    }

    Move(GameObjectID, x = 0, y = 0) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.left = x + 'px'
        GameObject.style.top = y + 'px'
    }

    MoveX(GameObjectID, x = 0) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.left = x + 'px'
    }

    MoveY(GameObjectID, y = 0) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.top = y + 'px'
    }

    Create_$Rect(SceneID, GameObjectID, x = 0, y = 0, height = 100, width = 100, borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000') {
        const SceneObject = document.getElementById(SceneID)
        if (!SceneObject) {
            SceneObjectError(SceneID)
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

    Create_$Circle(SceneID, GameObjectID, x, y, height = 100, width = 100, borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000') {
        const SceneObject = document.getElementById(SceneID)
        if (!SceneObject) {
            SceneObjectError(SceneID)
            return
        }
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

    getByStaticId(staticID) {
        const GameObject = document.getElementById(atob(staticID))
        if (!GameObject) {
            GameObjectError(staticID)
            return
        }
        return GameObject
    }

    Delete_$Object(GameObjectID) {
        GameObjectError(GameObjectID)
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.remove()
    }

    Object_$Rotate(GameObjectID, deg) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.transform = `rotate(${deg}deg)`
    }

    Object_$RotateY(GameObjectID, deg) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.transform = `rotateY(${deg}deg)`
    }

    Object_$RotateX(GameObjectID, deg) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.transform = `rotateX(${deg}deg)`
    }

    Object_$RotateZ(GameObjectID, deg) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.transform = `rotateZ(${deg}deg)`
    }

    Object_$Scale(GameObjectID, size) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.transform = `scale(${size})`
    }

    Object_$SetTransTime(GameObjectID, ms) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.transitionDuration = `${ms}ms`
    }

    Object_$Layer(GameObjectID, ObjectLayer) {
        const GameObject = document.getElementById(GameObjectID)
        if (!GameObject) {
            GameObjectError(GameObjectID)
            return
        }
        GameObject.style.zIndex = ObjectLayer
    }
}

export default $CherryEngine

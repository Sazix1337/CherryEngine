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

    static Create_$Object(GameObjectID, type, textContent, x = 0, y = 0, sourceURL, color = "#000000") {
        if (type.toLowerCase() === "text") {
            const GameObject = document.createElement('span')
            GameObject.setAttribute('id', GameObjectID)
            const appId = document.getElementById('cherry') 
            GameObject.setAttribute('data-fixedid', btoa(GameObjectID))
            const GameObjectNode = document.getElementById(GameObjectID)
            appId.insertBefore(GameObject, GameObjectNode)
            GameObject.innerHTML = textContent
            GameObject.color = color
            GameObject.style.position = 'relative'
            GameObject.style.top = y
            GameObject.style.left = x
        } else if (type.toLowerCase() === "sprite") {
            const GameObject = document.createElement('div')
            GameObject.setAttribute('id', GameObjectID)
            const appId = document.getElementById('cherry') 
            GameObject.setAttribute('data-fixedid', btoa(GameObjectID))
            const GameObjectNode = document.getElementById(GameObjectID)
            appId.insertBefore(GameObject, GameObjectNode)
            GameObject.style.position = 'relative'
            GameObject.style.top = y
            GameObject.style.left = x
        } else if (type.toLowerCase() === "image") {
            const GameObject = document.createElement('img')
            GameObject.setAttribute('id', GameObjectID) 
            const appId = document.getElementById('cherry') 
            GameObject.setAttribute('data-fixedid', btoa(GameObjectID))
            const GameObjectNode = document.getElementById(GameObjectID)
            appId.insertBefore(GameObject, GameObjectNode)
            GameObject.src = sourceURL
            GameObject.style.position = 'relative'
            GameObject.style.top = y
            GameObject.style.left = x
        } else {
            console.error(`Type of *GameObject(Text, Sprite, Image) does not have the "${type}" type`)
        }
    }

    static Set_$Border(GameObjectID, borderSize, borderColor, borderType, borderRadius) {
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.border = `${borderSize}px ${borderType} ${borderColor}`
        GameObject.style.borderRadius = borderRadius + 'px'
    }

    static Set_$BackGround(GameObjectID, bg) {
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.background = bg
    }

    static Set_$Color(GameObjectID, color) {
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.color = color
    }

    static MoveX(GameObjectID, x = 0) {
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.left = x + 'px'
    }

    static MoveY(GameObjectID, y = 0) {
        const GameObject = document.getElementById(GameObjectID)
        GameObject.style.top = y + 'px'
    }

    static Create_$Rect(GameObjectID, x = 0, y = 0, height = '100px', width = '100px', borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000') {
        const rect = document.createElement('div')
        rect.setAttribute('id', GameObjectID)
        rect.setAttribute('data-fixedid', window.btoa(GameObjectID))
        const rectID = document.getElementById(GameObjectID)
        const appId = document.getElementById('cherry')
        appId.insertBefore(rect, rectID)
        rect.style.height = height
        rect.style.width = width
        rect.style.border = `${borderSize}px ${borderType} ${borderColor}`
        rect.style.background = background
        rect.style.position = 'relative'
        rect.style.left = x + 'px'
        rect.style.top = y + 'px'
    }

    static Create_$Circle(GameObjectID, x, y, height = '100px', width = '100px', borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000') {
        const circle = document.createElement('div')
        circle.setAttribute('id', GameObjectID)
        const circleID = document.getElementById(GameObjectID)
        circle.setAttribute('data-fixedid', window.btoa(GameObjectID))
        const appId = document.getElementById('cherry')
        appId.insertBefore(circle, circleID)
        circle.style.height = height
        circle.style.width = width
        circle.style.border = `${borderSize}px ${borderType} ${borderColor}`
        circle.style.background = background
        circle.style.borderRadius = '50%'
        circle.style.position = 'relative'
    }

    static getByStaticId(staticID) {
        const GameObject = document.getElementById(atob(staticID))
        return GameObject
    }
}

export default $CherryEngine
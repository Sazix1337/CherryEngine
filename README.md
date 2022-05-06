# CherryEngine
***The 2D Game Engine written on JavaScript.***

# NEW UPDATE
***Version 1.1***
**Added:** `Events.js`, `Requests.js`, `Scene.js`, `types/Picture.js`, `types/Sprite.js`, `Text.js`, `errors/GameObjectError.js`, `errors/SceneObjectError.js`

# Documentation<br>
First of all, you should import ../engine/Engine.js file.<br>
In Engine.js you should fill APPLICATION_INFORMATION array required information.<br><br>
## Constructor<br>
**constuctor** accepts only 1 parameter, thats the debug mode, value can be false or true<br><br>
## Functions <br><br>
**Create_$Object(GameObjectID, type, textContent, x = 0, y = 0, sourceURL, color = "#000000")** - Creates an object<br>

GameObjectID - id of object<br>
type - object type. Now engine has only three object types Text, Sprite and Image.<br>
textContent - this var stores text that will be diplayed in text object type.<br>
x - x position. (default 0)<br>
y - y position. (default 0)<br>
sourceURL - picture URL.<br>
color - HEX color of object.

**Set_$Border(GameObjectID, borderSize, borderColor, borderType, borderRadius)** - Sets border<br>

GameObjectID - id of object<br>
borderSize - border size<br>
borderColor - color of border<br>
borderType - border type<br>
borderRadius - border radius

**Set_$BackGround(GameObjectID, bg)** - Sets background<br>
GameObjectID - id of object<br>
bg - background color

**Set_$Color(GameObjectID, color)** - Sets text color<br>
GameObjectID - id of object<br>
color - color in hex

**MoveX(GameObjectID, x = 0)** - Move to X position<br>
GameObjectID - id of object<br>
x - x position. (default 0)

**MoveY(GameObjectID, Y = 0)** - Move to Y position<br>
GameObjectID - id of object<br>
y - y position. (default 0)

**Create_$Rect(GameObjectID, x = 0, y = 0, height = '100px', width = '100px', borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000')** - draw a rect<br>

GameObjectID - id of object<br>
x - x position. (default 0)<br>
y - y position. (default 0)<br>
height - height of rect. (default 100px)<br>
width - width of rect. (default 100px)<br>
borderSize - the size of border in px<br>
borderColor - the color of border<br>
borderType - the type of border(css)<br>
background - the color of background

**Create_$Circle(GameObjectID, x = 0, y = 0, height = '100px', width = '100px', borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000')** - draw a circle<br>

GameObjectID - id of object<br>
x - x position. (default 0)<br>
y - y position. (default 0)<br>
height - height of circle. (default 100px)<br>
width - width of circle. (default 100px)<br>
borderSize - the size of border in px<br>
borderColor - the color of border<br>
borderType - the type of border(css)<br>
background - the color of background<br><br><br>
**Co-Authored by: Kolyah35**

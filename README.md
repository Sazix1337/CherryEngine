# CherryEngine
***The 2D Game Engine written in JavaScript.***

# NEW UPDATE<br>
***Version 1.2***<br>
**Added:** `TypeObjectError.js`
**Changed:** static methods are not static now, you should call method from class object

# Documentation<br>
First of all, you should import ../engine/Engine.js file.<br>
In Engine.js you should fill APPLICATION_INFORMATION array required information.(not working yet)<br><br>
## Constructor<br>
**constuctor** accepts only 1 parameter, thats the debug mode, value can be false or true<br><br>
## Functions <br><br>
**Create_$Object(SceneID, GameObjectID, type, textContent, x = 0, y = 0, sourceURL, color = "#000000")** - Creates an object<br>
SceneID - id of scene<br>
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

**MoveY(GameObjectID, y = 0)** - Move to Y position<br>
GameObjectID - id of object<br>
y - y position. (default 0)

**Create_$Rect(SceneID, GameObjectID, x = 0, y = 0, height = '100px', width = '100px', borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000')** - draw a rect<br>

SceneID - id of scene<br>
GameObjectID - id of object<br>
x - x position. (default 0)<br>
y - y position. (default 0)<br>
height - height of rect. (default 100px)<br>
width - width of rect. (default 100px)<br>
borderSize - the size of border in px<br>
borderColor - the color of border<br>
borderType - the type of border(css)<br>
background - the color of background

**Create_$Circle(SceneID, GameObjectID, x = 0, y = 0, height = '100px', width = '100px', borderSize = 1, borderColor = "#000000", borderType = 'solid', background = '#000000')** - draw a circle<br>
SceneID - id of scene<br>
GameObjectID - id of object<br>
x - x position. (default 0)<br>
y - y position. (default 0)<br>
height - height of circle. (default 100px)<br>
width - width of circle. (default 100px)<br>
borderSize - the size of border in px<br>
borderColor - the color of border<br>
borderType - the type of border(css)<br>
background - the color of background<br><br><br>

**Move(GameObjectID, x = 0, y = 0)** - Moves \*GameObject to x, and y position<br>
GameObjectID - id of object<br>
x - x position. (default 0)<br>
y - y position. (default 0)

**getByStaticId(staticID)** - Gets \*GameObject by static id(data-fixedid attr.)<br>
staticID - The static id of \*GameObject

**Delete_$Object(GameObjectID)** - Delete the \*GameObject<br>
GameObjectID - id of object

**Object_$Rotate(GameObjectID, deg)** - Rotates object<br>
GameObjectID - id of object<br>
deg - Degrees of rotation

**Object_$RotateY(GameObjectID, deg)** - Rotates object to Y<br>
GameObjectID - id of object<br>
deg - Degrees of rotation

**Object_$RotateX(GameObjectID, deg)** - Rotates object to X<br>
GameObjectID - id of object<br>
deg - Degrees of rotation

**Object_$RotateZ(GameObjectID, deg)** - Rotates object to Z<br>
GameObjectID - id of object<br>
deg - Degrees of rotation

**Object_$Scale(GameObjectID, size)** - Scales the \*GameObject<br>
GameObjectID - id of object<br>
size - the size of scale(default: 1)

**Object_$SetTransTime(GameObjectID, ms)** - Sets the transition time to \*GameObject<br>
GameObjectID - id of object<br>
ms - the time in ms

**Object_$Layer(GameObjectID, ObjectLayer)** - Change layer position for \*GameObject<br>
GameObjectID - id of object<br>
ObjectLayer - the layer for \*GameObject(default: 0)

# Events.js
**OnObjectClick(GameObjectID, callback)** - Sets the listener for clicking the \*GameObject<br>
GameObjectID - The id of \*GameObject<br>
callback - function of event

**OnMouseObjectHover(GameObjectID, callback)** - Sets the listener for mouse hover on  \*GameObject<br>
GameObjectID - The id of \*GameObject<br>
callback - function of event

**OnMouseObjectExit(GameObjectID, callback)** - Sets the listener for mouse leave from \*GameObject<br>
GameObjectID - The id of \*GameObject<br>
callback - function of event

# Scene.js
**Scene_$Create(SceneID, width, height, x, y)** - Creates an new Scene for game<br>
SceneID - the id of scene(string)<br>
width - the width of scene<br>
height - the height of scene<br>
x - x position of scene<br>
y - y position of scene

**Scene_$Delete(SceneID)**  - Deletes the scene<br>
SceneID - the id of scene(string)

**Scene_$Layer(SceneID, SceneLayer)** - Sets the layer of scene<br>
SceneID - the id of scene(string)<br>
SceneLayer - The layer of scene(default: 0)

# Requests.js
**$Post(url, data = {})** - Making post request<br>
url - the url for request<br>
data - the data of request(default: {})

**$Get(url)** - Making get request<br>
url - the url for request<br>
<br>
**Co-Authored by: Kolyah35**

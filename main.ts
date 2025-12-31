namespace SpriteKind {
    export const rope = SpriteKind.create()
    export const connecter = SpriteKind.create()
    export const Vhook = SpriteKind.create()
    export const Hhook = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    HropeLength = 0
    HhookSprite = sprites.create(assets.image`hook0`, SpriteKind.Hhook)
    HhookSprite.setPosition(Robob.x, Robob.y)
    HhookSprite.vx = 100 * direction
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    VropeLength = 0
    VhookSprite = sprites.create(assets.image`hook`, SpriteKind.Vhook)
    VhookSprite.setPosition(Robob.x, Robob.y)
    VhookSprite.vy = -100
})
scene.onHitWall(SpriteKind.Vhook, function (sprite, location) {
    Robob.y = HhookSprite.y
    VropeLength = 0
    sprites.destroy(VropeSprite)
})
function FlingRopeHorizontal () {
    sprites.destroy(HropeSprite)
    HropeLength = Math.abs(Robob.x - HhookSprite.x)
    HropeImage = image.create(HropeLength, 4)
    HropeImage.drawLine(0, 0, HropeLength, 0, 14)
    HropeSprite = sprites.create(HropeImage, SpriteKind.rope)
    HropeSprite.setPosition(Robob.x - (Robob.x - HhookSprite.x) / 2, Robob.y)
}
function FlingRopeVertical () {
    sprites.destroy(VropeSprite)
    VropeLength = Math.abs(Robob.y - VhookSprite.y)
    VropeImage = image.create(4, VropeLength)
    VropeImage.drawLine(2, 0, 2, VropeLength, 14)
    VropeSprite = sprites.create(VropeImage, SpriteKind.rope)
    VropeSprite.setPosition(Robob.x, Robob.y - (Robob.y - VhookSprite.y) / 2)
}
scene.onHitWall(SpriteKind.Hhook, function (sprite, location) {
    Robob.x = VhookSprite.x
    HropeLength = 0
    sprites.destroy(HropeSprite)
    sprites.destroy(HhookSprite)
})
let VropeImage: Image = null
let HropeImage: Image = null
let HropeSprite: Sprite = null
let VropeSprite: Sprite = null
let VropeLength = 0
let HropeLength = 0
let direction = 0
let VhookSprite: Sprite = null
let HhookSprite: Sprite = null
let Robob: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
Robob = sprites.create(assets.image`IdleR`, SpriteKind.Player)
Robob.ay = 400
HhookSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.rope)
VhookSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.rope)
direction = 1
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        direction = 1
        Robob.setImage(assets.image`IdleR`)
    }
    if (controller.left.isPressed()) {
        direction = -1
        Robob.setImage(assets.image`IdleL`)
    }
})
game.onUpdate(function () {
    if (!(controller.A.isPressed())) {
        VropeLength = 0
        sprites.destroy(VhookSprite)
        sprites.destroy(VropeSprite)
    }
    if (!(controller.B.isPressed())) {
        HropeLength = 0
        sprites.destroy(HhookSprite)
        sprites.destroy(HropeSprite)
    }
    if (HhookSprite.vx != 0) {
        FlingRopeHorizontal()
    }
    if (VhookSprite.vy < 0) {
        FlingRopeVertical()
    }
    console.log(VhookSprite.vy)
})

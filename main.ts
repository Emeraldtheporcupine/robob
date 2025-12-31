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
    Robob.y = VhookSprite.y
    VropeLength = 0
    sprites.destroy(VhookSprite)
})
scene.onHitWall(SpriteKind.Hhook, function (sprite, location) {
    Robob.x = HhookSprite.x
    HropeLength = 0
    sprites.destroy(HhookSprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Robob.tilemapLocation().column == 1 && Robob.tilemapLocation().row == 13) {
        game.splash("Use 'B' to hook left and right!")
    } else if (Robob.tilemapLocation().column == 17 && Robob.tilemapLocation().row == 13) {
        game.splash("Use 'A' to hook up!")
    } else if (Robob.tilemapLocation().column == 9 && Robob.tilemapLocation().row == 10) {
        game.splash("Some ceilings can't be hooked onto long.")
    } else if (Robob.tilemapLocation().column == 2 && Robob.tilemapLocation().row == 10) {
        game.splash("Touch the portal to advance!")
    }
})
let VropeLength = 0
let HropeLength = 0
let direction = 0
let VhookSprite: Sprite = null
let HhookSprite: Sprite = null
let Robob: Sprite = null
scene.setBackgroundImage(assets.image`level1`)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
Robob = sprites.create(assets.image`IdleR`, SpriteKind.Player)
Robob.ay = 400
tiles.placeOnTile(Robob, tiles.getTileLocation(1, 13))
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
music.play(music.createSong(assets.song`City Harbor`), music.PlaybackMode.LoopingInBackground)
game.splash("Press down to read signs!")
game.onUpdate(function () {
    if (!(controller.A.isPressed())) {
        VropeLength = 0
        sprites.destroy(VhookSprite)
        Robob.ay = 400
    } else {
        if (Robob.tileKindAt(TileDirection.Top, assets.tile`4`)) {
            Robob.ay = 0
        } else {
            Robob.ay = 400
        }
    }
    if (!(controller.B.isPressed())) {
        HropeLength = 0
        sprites.destroy(HhookSprite)
    }
})
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

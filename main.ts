namespace SpriteKind {
    export const rope = SpriteKind.create()
    export const connecter = SpriteKind.create()
    export const Vhook = SpriteKind.create()
    export const Hhook = SpriteKind.create()
    export const Warp = SpriteKind.create()
    export const BluePortal = SpriteKind.create()
    export const RedPortal = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    HropeLength = 0
    HhookSprite = sprites.create(assets.image`hook0`, SpriteKind.Hhook)
    HhookSprite.setPosition(Robob.x, Robob.y)
    HhookSprite.vx = 100 * direction
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Warp, function (sprite, otherSprite) {
    game.splash("Level " + level + " complete")
    level += 1
    SetupLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    VropeLength = 0
    VhookSprite = sprites.create(assets.image`hook`, SpriteKind.Vhook)
    VhookSprite.setPosition(Robob.x, Robob.y)
    VhookSprite.vy = -100
})
function SetupLevel () {
    sprites.destroyAllSpritesOfKind(SpriteKind.BluePortal)
    sprites.destroyAllSpritesOfKind(SpriteKind.RedPortal)
    if (level == 1) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
        tiles.placeOnTile(Robob, tiles.getTileLocation(1, 13))
        tiles.placeOnTile(Portal, tiles.getTileLocation(0, 2))
        game.splash("Press down to read signs!", "(You're standing on a sign)")
    } else if (level == 2) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level0`))
        blue_Portal = sprites.create(assets.image`blank1`, SpriteKind.BluePortal)
        red_Portal = sprites.create(assets.image`blank`, SpriteKind.RedPortal)
        animation.runImageAnimation(
        blue_Portal,
        assets.animation`blue portal`,
        100,
        true
        )
        animation.runImageAnimation(
        red_Portal,
        assets.animation`red portal`,
        100,
        true
        )
        tiles.placeOnTile(Robob, tiles.getTileLocation(1, 13))
        tiles.placeOnTile(Portal, tiles.getTileLocation(0, 8))
        tiles.placeOnTile(blue_Portal, tiles.getTileLocation(11, 1))
        tiles.placeOnTile(red_Portal, tiles.getTileLocation(14, 10))
    } else if (level == 3) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level21`))
        blue_Portal = sprites.create(assets.image`blank1`, SpriteKind.BluePortal)
        red_Portal = sprites.create(assets.image`blank`, SpriteKind.RedPortal)
        animation.runImageAnimation(
        blue_Portal,
        assets.animation`blue portal`,
        100,
        true
        )
        animation.runImageAnimation(
        red_Portal,
        assets.animation`red portal`,
        100,
        true
        )
        tiles.placeOnTile(Robob, tiles.getTileLocation(19, 1))
        tiles.placeOnTile(Portal, tiles.getTileLocation(1, 13))
        tiles.placeOnTile(blue_Portal, tiles.getTileLocation(1, 11))
        tiles.placeOnTile(red_Portal, tiles.getTileLocation(19, 1))
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BluePortal, function (sprite, otherSprite) {
    sprite.setPosition(red_Portal.x, red_Portal.y)
})
scene.onHitWall(SpriteKind.Vhook, function (sprite, location) {
    Robob.x = VhookSprite.x
    Robob.y = VhookSprite.y
    VropeLength = 0
    sprites.destroy(VhookSprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 1) {
        if (Robob.tilemapLocation().column == 1 && Robob.tilemapLocation().row == 13) {
            game.splash("Use 'B' to hook left and right!")
        } else if (Robob.tilemapLocation().column == 17 && Robob.tilemapLocation().row == 13) {
            game.splash("Use 'A' to hook up!")
        } else if (Robob.tilemapLocation().column == 9 && Robob.tilemapLocation().row == 10) {
            game.splash("Some ceilings can't be hooked onto long.")
        } else if (Robob.tilemapLocation().column == 2 && Robob.tilemapLocation().row == 10) {
            game.splash("Touch the portal to advance!")
        }
    } else if (level == 2) {
        if (Robob.tilemapLocation().column == 18 && Robob.tilemapLocation().row == 13) {
            game.splash("Go on up!")
        } else if (Robob.tilemapLocation().column == 1 && Robob.tilemapLocation().row == 4) {
            game.splash("Blue Portals go to Red Portals.")
        }
    } else {
    	
    }
})
scene.onHitWall(SpriteKind.Hhook, function (sprite, location) {
    Robob.x = HhookSprite.x
    Robob.y = HhookSprite.y
    HropeLength = 0
    sprites.destroy(HhookSprite)
})
let red_Portal: Sprite = null
let blue_Portal: Sprite = null
let VropeLength = 0
let HropeLength = 0
let direction = 0
let Portal: Sprite = null
let VhookSprite: Sprite = null
let HhookSprite: Sprite = null
let Robob: Sprite = null
let level = 0
scene.setBackgroundImage(assets.image`level1`)
level = 1
Robob = sprites.create(assets.image`IdleR`, SpriteKind.Player)
Robob.ay = 400
HhookSprite = sprites.create(assets.image`blank`, SpriteKind.rope)
VhookSprite = sprites.create(assets.image`blank1`, SpriteKind.rope)
Portal = sprites.create(assets.image`blank`, SpriteKind.Warp)
animation.runImageAnimation(
Portal,
assets.animation`PORTAL`,
100,
true
)
direction = 1
music.play(music.createSong(assets.song`City Harbor`), music.PlaybackMode.LoopingInBackground)
SetupLevel()
game.onUpdate(function () {
    Robob.z = 2
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
    if (Robob.vy > 0) {
        sprites.destroy(HhookSprite)
    }
})

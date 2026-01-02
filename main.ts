namespace SpriteKind {
    export const rope = SpriteKind.create()
    export const connecter = SpriteKind.create()
    export const Vhook = SpriteKind.create()
    export const Hhook = SpriteKind.create()
    export const Warp = SpriteKind.create()
    export const BluePortal = SpriteKind.create()
    export const RedPortal = SpriteKind.create()
    export const Hazards = SpriteKind.create()
    export const Effect = SpriteKind.create()
    export const Point = SpriteKind.create()
    export const Title = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Screen == "Game") {
        HropeLength = 0
        HhookSprite = sprites.create(assets.image`hook0`, SpriteKind.Hhook)
        HhookSprite.setPosition(Robob.x, Robob.y)
        HhookSprite.vx = 100 * direction
    } else {
    	
    }
})
function Start () {
    scene.setBackgroundImage(assets.image`stage1BG`)
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
    music.play(music.createSong(assets.song`Level`), music.PlaybackMode.LoopingInBackground)
    SetupLevel()
    Screen = "Game"
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Warp, function (sprite, otherSprite) {
    game.splash("Stage " + Stage + " Level " + level + " complete")
    level += 1
    SetupLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Screen == "Game") {
        VropeLength = 0
        VhookSprite = sprites.create(assets.image`hook`, SpriteKind.Vhook)
        VhookSprite.setPosition(Robob.x, Robob.y)
        VhookSprite.vy = -100
    } else if (Screen == "Title") {
        Screen = "Loading..."
        Stage = 1
        level = 1
        sprites.destroyAllSpritesOfKind(SpriteKind.Title)
        music.stopAllSounds()
        Start()
    }
})
function SetupLevel () {
    direction = 1
    sprites.destroyAllSpritesOfKind(SpriteKind.BluePortal)
    sprites.destroyAllSpritesOfKind(SpriteKind.RedPortal)
    sprites.destroyAllSpritesOfKind(SpriteKind.Hazards)
    if (Stage == 1) {
        if (level == 1) {
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
            tiles.placeOnTile(Robob, tiles.getTileLocation(1, 13))
            tiles.placeOnTile(Portal, tiles.getTileLocation(0, 2))
            game.splash("Press down to read signs!", "(You're standing on a sign)")
        } else if (level == 2) {
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
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
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level0`))
            tiles.placeOnTile(Robob, tiles.getTileLocation(1, 3))
            tiles.placeOnTile(Portal, tiles.getTileLocation(1, 1))
        } else if (level == 4) {
            direction = -1
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level3`))
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
        } else if (level == 5) {
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level36`))
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
            tiles.placeOnTile(Robob, tiles.getTileLocation(18, 13))
            tiles.placeOnTile(Portal, tiles.getTileLocation(19, 1))
            tiles.placeOnTile(blue_Portal, tiles.getTileLocation(1, 13))
            tiles.placeOnTile(red_Portal, tiles.getTileLocation(17, 13))
        } else {
            Stage += 1
            level = 1
        }
    } else if (Stage == 2) {
    	
    } else {
    	
    }
    for (let TopLava of tiles.getTilesByType(assets.tile`myTile0`)) {
        Lava = sprites.create(assets.image`LavaTop`, SpriteKind.Hazards)
        tiles.placeOnTile(Lava, TopLava)
        tiles.setTileAt(TopLava, assets.tile`transparency8`)
        animation.runImageAnimation(
        Lava,
        assets.animation`LavaWaves`,
        100,
        true
        )
    }
    for (let MidLava of tiles.getTilesByType(assets.tile`myTile1`)) {
        MiddleLava = sprites.create(assets.image`LavaMiddle`, SpriteKind.Hazards)
        tiles.placeOnTile(MiddleLava, MidLava)
        tiles.setTileAt(MidLava, assets.tile`transparency8`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hazards, function (sprite, otherSprite) {
    KABOOM = sprites.create(assets.image`blank`, SpriteKind.Effect)
    KABOOM.setPosition(Robob.x, Robob.y)
    KABOOM.setScale(1, ScaleAnchor.Middle)
    SetupLevel()
    animation.runImageAnimation(
    KABOOM,
    assets.animation`KABOOM`,
    50,
    false
    )
    scene.cameraShake(3, 500)
    pointer = sprites.create(assets.image`Point`, SpriteKind.Point)
    pointer.setPosition(Robob.x, Robob.y - 8)
    pointer.setFlag(SpriteFlag.GhostThroughWalls, true)
    pointer.startEffect(effects.fire)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    sprites.destroy(KABOOM)
})
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
    if (Screen == "Game") {
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
    } else {
    	
    }
})
scene.onHitWall(SpriteKind.Hhook, function (sprite, location) {
    Robob.x = HhookSprite.x
    Robob.y = HhookSprite.y
    HropeLength = 0
    sprites.destroy(HhookSprite)
})
let pointer: Sprite = null
let KABOOM: Sprite = null
let MiddleLava: Sprite = null
let Lava: Sprite = null
let red_Portal: Sprite = null
let blue_Portal: Sprite = null
let VropeLength = 0
let level = 0
let Stage = 0
let Portal: Sprite = null
let VhookSprite: Sprite = null
let direction = 0
let Robob: Sprite = null
let HhookSprite: Sprite = null
let HropeLength = 0
let Screen = ""
Screen = "Title"
scene.setBackgroundImage(assets.image`TitleScreen`)
music.play(music.createSong(assets.song`City Harbor`), music.PlaybackMode.LoopingInBackground)
let Title = sprites.create(assets.image`Title`, SpriteKind.Title)
Title.setPosition(80, 25)
let Press_A = sprites.create(img`
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
    `, SpriteKind.Title)
Press_A.setPosition(15, 100)
animation.runImageAnimation(
Press_A,
assets.animation`Press A`,
100,
true
)
game.onUpdate(function () {
    if (Screen == "Game") {
        Robob.z = 2
        if (controller.right.isPressed()) {
            direction = 1
            Robob.setImage(assets.image`IdleR`)
        }
        if (controller.left.isPressed()) {
            direction = -1
            Robob.setImage(assets.image`IdleL`)
        }
    } else {
    	
    }
})
game.onUpdate(function () {
    if (Screen == "Game") {
        if (pointer) {
            pointer.vy = -25
            pointer.setFlag(SpriteFlag.AutoDestroy, true)
        }
        if (!(controller.A.isPressed())) {
            VropeLength = 0
            sprites.destroy(VhookSprite)
            Robob.ay = 400
        } else {
            if (!(Robob.tileKindAt(TileDirection.Top, assets.tile`8`)) && !(Robob.tileKindAt(TileDirection.Top, assets.tile`transparency8`))) {
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
    } else {
    	
    }
})

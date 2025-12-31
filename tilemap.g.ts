// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`14000f00010101010101010101010101010101010101010102000000000000000000000000000000000000030200000101010100000000000000000000000003020000000000000000000000000000000000000302000000000000000000000000000000000000030200000000000000000000000000000001010103020000000000000000000000000000000000000302000000000000000000000000000000000000030200000000000001010101000000000000000003020000000000000000000000000000000000000302010101000000000000000000000000000000030200000000000000000000000000000000000003020000000000000000000000000000000000000302000000000000000000000000000000000000030201010101010101010101010101010101010103`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . 2 2 2 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency8,myTiles.tile1,myTiles.tile9,myTiles.tile10], TileScale.Eight);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "transparency8":return transparency8;
            case "4":
            case "tile1":return tile1;
            case "1":
            case "tile2":return tile2;
            case "2":
            case "tile3":return tile3;
            case "0":
            case "tile4":return tile4;
            case "5":
            case "tile5":return tile5;
            case "8":
            case "tile8":return tile8;
            case "6":
            case "tile6":return tile6;
            case "7":
            case "tile7":return tile7;
            case "3":
            case "tile9":return tile9;
            case "9":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

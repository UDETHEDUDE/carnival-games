controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(img`
        ..fff.......fff..
        .fbbbf.....fbbbf.
        fbb3bbf...fbb3bbf
        fb333bf...fb333bf
        fb333fffffff333bf
        fb33fbbbbbbbf33bf
        .fffbbbbbbbbbfff.
        ..fbbbbbbbbbbbf..
        ..fbbbbbbbbbbbf..
        ..fbbbfbbbfbbbf..
        ..fbbbfbbbfbbbf..
        ..fbbbbbfbbbbbf..
        ...fbbbfffbbbf...
        ....fbbbbbbbf....
        ...fbfffffffbf...
        ...fbbbbbbbbbf...
        ..ffbbbbbbbbbff..
        .fbbfffffffffbbf.
        .fbbf4444444fbbf.
        ..fffffffffffff..
        .f1ddddddddddd4f.
        .fd444444444442f.
        .fd444444444442f.
        .fd44fff44f4442f.
        .fd44f4f4ff4442f.
        .fd44fff44f4442f.
        .fd44f4444f4442f.
        .fd44f444fff442f.
        .fd444444444442f.
        .fd444444444442f.
        .f4222222222222f.
        ..fffffffffffff..
        `)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(img`
        ..fff.......fff..
        .fbbbf.....fbbbf.
        fbb3bbf...fbb3bbf
        fb333bf...fb333bf
        fb333fffffff333bf
        fb33fbbbbbbbf33bf
        .fffbbbbbbbbbfff.
        ..fbbbbbbbbbbbf..
        ..fbbbbbbbbbbbf..
        ..fbbbfbbbfbbbf..
        ..fbbbfbbbfbbbf..
        ..fbbbbbfbbbbbf..
        ...fbbbfffbbbf...
        ..fffbbbbbbbfff..
        .fbbfffffffffbbf.
        .fbbf4444444fbbf.
        ..ffffffffffffff.
        ...fbbbbfbbbbf...
        ...fbbbbfbbbbf...
        ..fffffffffffff..
        .f1ddddddddddd4f.
        .fd444444444442f.
        .fd444444444442f.
        .fd44fff44f4442f.
        .fd44f4f4ff4442f.
        .fd44fff44f4442f.
        .fd44f4444f4442f.
        .fd44f444fff442f.
        .fd444444444442f.
        .fd444444444442f.
        .f4222222222222f.
        ..fffffffffffff..
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.addLabelTo("Carnival games", carnival.Areas.Top)
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(9)
myBalloon = sprites.create(img`
    ....................
    .........fff........
    .......ff222ff......
    ......ff21222ff.....
    .....ff2112222ff....
    .....f211222222f....
    ....f21122222222f...
    ....f21122222222f...
    ....f21122222222f...
    ....f22222222222f...
    ....f21122222222f...
    ....f22122222222f...
    .....f222222222f....
    .....f222222222f....
    ......f2222222f.....
    .......f22222f......
    ........f222f.......
    .........f2f........
    ..........f.........
    .........f2f........
    `, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(img`
    1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444442
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd222
    111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22
    111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22
    111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22
    1111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d222
    11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222
    11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222
    1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f
    111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f
    f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f2
    2fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f22
    22fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    222f........................................................................................................................................................f222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222
    `, SpriteKind.Booth)
myMouse = sprites.create(img`
    ..fff.......fff..
    .fbbbf.....fbbbf.
    fbb3bbf...fbb3bbf
    fb333bf...fb333bf
    fb333fffffff333bf
    fb33fbbbbbbbf33bf
    .fffbbbbbbbbbfff.
    ..fbbbbbbbbbbbf..
    ..fbbbbbbbbbbbf..
    ..fbbbfbbbfbbbf..
    ..fbbbfbbbfbbbf..
    ..fbbbbbfbbbbbf..
    ...fbbbfffbbbf...
    ..fffbbbbbbbfff..
    .fbbfffffffffbbf.
    .fbbf4444444fbbf.
    ..ffffffffffffff.
    ...fbbbbfbbbbf...
    ...fbbbbfbbbbf...
    ..fffffffffffff..
    .f1ddddddddddd4f.
    .fd444444444442f.
    .fd444444444442f.
    .fd44fff44f4442f.
    .fd44f4f4ff4442f.
    .fd44fff44f4442f.
    .fd44f4444f4442f.
    .fd44f444fff442f.
    .fd444444444442f.
    .fd444444444442f.
    .f4222222222222f.
    ..fffffffffffff..
    `, SpriteKind.Mouse)
myMouse.setPosition(80, 93)
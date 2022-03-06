window.onload = function() {
    map = document.getElementById('gmap');
    ctx = map.getContext("2d");
    document.addEventListener('keydown', kontrol);
    setInterval(game, 1000 / 15);
}
ular_x = ular_y = 10;
game_setmap = ujung_map = 20;
buah_x = buah_y = 15;
x_kepala = y_kepala = 0;
jejak = [];
ekor = 2;

function kontrol(tmb) {
    switch (tmb.keyCode) {
        case 37:
            x_kepala = -1;
            y_kepala = 0;
            break;
        case 38:
            x_kepala = 0;
            y_kepala = -1;
            break;
        case 39:
            x_kepala = 1;
            y_kepala = 0;
            break;
        case 40:
            x_kepala = 0;
            y_kepala = 1;
            break;
    }
}

function game() {
    ular_x += x_kepala;
    ular_y += y_kepala;
    if (ular_x < 0) {
        ular_x = ujung_map - 1;
    }
    if (ular_x > ujung_map) {
        ular_x = 0;
    }
    if (ular_y < 0) {
        ular_y = ujung_map - 1;
    }
    if (ular_y > ujung_map) {
        ular_y = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, map.width, map.height);

    ctx.fillStyle = "lime";
    for (let i = 0; i < jejak.length; i++) {
        ctx.fillRect(jejak[i].x * game_setmap, jejak[i].y * game_setmap, game_setmap - 2, game_setmap - 2)
        if (jejak[i].x == ular_x && jejak[i].y == ular_y) {
            ekor = 2;
        }
    }
    jejak.push({ x: ular_x, y: ular_y });
    while (jejak.length > ekor) {
        jejak.shift();
    }
    if (buah_x == ular_x && buah_y == ular_y) {
        ekor++;
        buah_x = Math.floor(Math.random() * ujung_map);
        buah_y = Math.floor(Math.random() * ujung_map);
    }
    ctx.fillStyle = 'red';
    ctx.fillRect(buah_x * game_setmap, buah_y * game_setmap, game_setmap - 2, game_setmap - 2);
}
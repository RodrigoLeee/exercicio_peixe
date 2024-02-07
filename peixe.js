var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    //carrega fundo
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carrega o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carrega o tubarao
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
}

function create() {
    //adiciona fundo
    this.add.image(400, 300, 'mar');

    //adiciona o logo
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adiciona o tubarao
    this.add.image(400, 300, 'tubarao').setOrigin(0.5, 0.5).setFlip(true, false);
}

function update() {
    
}

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

var peixinho;

function preload() {
    //carrega fundo
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carrega o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carrega o tubarao
    this.load.image('tubarao', 'assets/peixes/tubarao.png');

    //carrega a concha
    this.load.image('concha', 'assets/peixes/concha.png');
}

function create() {
    //adiciona fundo
    this.add.image(400, 300, 'mar');

    //adiciona o logo
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adiciona o tubarao
    peixinho = this.add.image(400, 300, 'tubarao').setOrigin(0.5, 0.5).setFlip(true, false);

    //transforma a variável
    peixinho.setFlip(true,false);

    this.add.image(550, 750, 'concha');
}

function update() {
    
    //controles do peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y
}

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
    this.load.image('code_your_bb', '../../assets/img/code_your_bb.png');
}

function create() {
    this.add.image(400, 300, 'code_your_bb');
    this.add.text(5, 580, 'Alassan 2020');
}

function update() {
}

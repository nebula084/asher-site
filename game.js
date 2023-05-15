import * as Phaser from 'phaser';

const config = {
  parent: 'game',
  type: Phaser.WEBGL,
  backgroundColor: 0xffc836,
  width: 440,
  height: 550,
  scene: {
    create,
  },
};

const game = new Phaser.Game(config);

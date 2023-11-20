/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("тло1", "./Stage/costumes/тло1.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("поп", "./Stage/sounds/поп.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.player2 = 4;
    this.vars.player1 = 2;

    this.watchers.player2 = new Watcher({
      label: "player 2",
      style: "normal",
      visible: true,
      value: () => this.vars.player2,
      x: 243,
      y: 145
    });
    this.watchers.player1 = new Watcher({
      label: "player 1",
      style: "normal",
      visible: true,
      value: () => this.vars.player1,
      x: 243,
      y: 175
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.toNumber(this.vars.player1) === 100) {
        this.broadcast("player 1 comment");
      }
      if (this.toNumber(this.vars.player2) === 100) {
        this.broadcast("player 2 comment");
      }
      yield;
    }
  }
}

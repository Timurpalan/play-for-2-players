/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 })
    ];

    this.sounds = [new Sound("Chomp", "./Apple/sounds/Chomp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.moveAppleToBegin = () => {
      console.log("moveAppleToBegin");
      this.goto(this.random(-(window.innerWidth-18)/2, (window.innerWidth-18)/2), (window.innerHeight-39)/2);
    };
  }

  *whenGreenFlagClicked() {
    this.moveAppleToBegin();
    while (true) {
      this.y -= 10;
      if (this.touching(this.sprites["Line"].andClones())) {
        this.moveAppleToBegin();
      }
      if (this.touching(this.sprites["Bowl"].andClones())) {
        this.moveAppleToBegin();
        this.stage.vars.player1++;
        this.broadcast("apple_in_bowl");
      }
      if (this.touching(this.sprites["Bowl2"].andClones())) {
        this.moveAppleToBegin();
        this.stage.vars.player2++;
        this.broadcast("apple_in_bowl2");
      }
      yield;
    }
  }
}

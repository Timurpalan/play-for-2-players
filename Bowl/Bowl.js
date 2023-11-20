/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bowl extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bowl-a", "./Bowl/costumes/bowl-a.svg", { x: 30, y: 37 })
    ];

    this.sounds = [new Sound("pop", "./Bowl/sounds/pop.wav")];


    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "player 1 comment" },
        this.whenIReceivePlayer1Comment
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "apple_in_bowl" },
        this.whenIReceiveAppleInBowl
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.player1 = 0;
    this.x = this.random(-(window.innerWidth-18)/2, (window.innerWidth-18)/2);
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.move(10);
      }
      if (this.keyPressed("left arrow")) {
        this.move(-10);
      }
      yield;
    }
  }

  *whenIReceivePlayer1Comment() {
    yield* this.sayAndWait("you win", 2);
  }

  *whenIReceiveAppleInBowl() {
    this.size += 10;
  }
}

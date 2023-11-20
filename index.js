import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bowl from "./Bowl/Bowl.js";
import Bowl2 from "./Bowl2/Bowl2.js";
import Apple from "./Apple/Apple.js";
import Line from "./Line/Line.js";

const stage = new Stage({
  costumeNumber: 1 ,
  width: window.innerWidth-18,
  height: window.innerHeight-39
});

const sprites = {
  Bowl: new Bowl({
    x: 60,
    y: -(window.innerHeight-39)/2 + 10,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Bowl2: new Bowl2({
    x: -112,
    y: -(window.innerHeight-39)/2 + 10,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Apple: new Apple({
    x: -158,
    y: -18,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Line: new Line({
    x: 0,
    y: -(window.innerHeight-39)/2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

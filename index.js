const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundry {
  constructor({ position }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
  }

  draw() {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const map = [
    //todo next... brainstorming
    // rows and columns
    //check to see if looping through the rows and symbol associated can create boundry at once,
    //make switch case for the symbol and define positions using index used to loop...
    //may be push each Boudndy into boundaries

]

// const boundaries =[]



const boundaries = [
  new Boundry({
    position: {
      x: 0,
      y: 0,
    },
  }),
  new Boundry({
    position: {
      x: 41,
      y: 0,
    },
  }),
];

boundaries.forEach((boundry) => {
  boundry.draw();
});

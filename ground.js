class Ground {
    constructor() {
        var g = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400, 392, 800, 20, g);
        this.width = 800;
        this.height = 20;
        World.add(world, this.body);
    }

    display() {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
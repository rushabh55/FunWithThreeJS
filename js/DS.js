var Vector2 = function (x, y) {
    var x, y;
    this.x = x;
    this.y = y;
    this.getX = function () {
        return this.x;
    }
    this.getY = function () {
        return this.y;
    }
    this.setX = function (x) {
        this.x = x;
    }
    this.setY = function (y) {
        this.y = y;
    }
}

var Vector3 = function (x, y, z) {
    var x, y, z;
    this.x = x;
    this.y = y;
    this.z = z;

    this.getX = function () {
        return this.x;
    }
    this.getY = function () {
        return this.y;
    }
    this.setX = function (x) {
        this.x = x;
    }
    this.setY = function (y) {
        this.y = y;
    }
    this.setZ = function (z) {
        this.z = z;
    }
    this.getZ = function (z) {
        return this.z;
    }
}
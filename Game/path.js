<script>

    // In the grid 0 means walkable
    //1 is an obstacle where you can cross or stay if you are a flying unit
    //2 means wood where it costs 2 actions to enter if you are infantry or you can't enter if you are cavalry 
    //3 means nothing can stay in the place and no one can cross it
    var map = 0;
switch (map) {
    case 0:
        var grid = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        break;
    case 1:
        var grid = [
            [0, 1, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0],
            [0, 1, 1, 0, 1, 1],
            [0, 0, 0, 0, 2, 0],
            [0, 2, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2]
        ]

        break;
    case 2:
        //Enemy starting points from [0][1] to [0][5] 
        //Ally starting point from [6][0] to [6][3]
        var grid = [
            [0, 0, 0, 0, 0, 0],
            [3, 0, 3, 0, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [3, 0, 3, 0, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [3, 0, 3, 0, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [3, 0, 3, 0, 3, 0]
        ]

        break;
    case 3:
        //Enemy starting point [0][1],[0][2],[7][1],[7][2]
        //Ally starting points [0][5],[1][4],[2]5],[3][5]
        var grid = [
            [0, 0, 2, 0, 2, 0],
            [0, 0, 2, 2, 0, 0],
            [0, 0, 0, 1, 2, 0],
            [1, 0, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 2, 0, 0, 0],
            [0, 1, 1, 0, 2, 2],
            [0, 0, 0, 0, 0, 0]
        ]

        break;


    case 4:
        //Enemy starting points [2][0],[2][4],[2][5],[7][5]
        //Ally Starting points [5][1],[5][2],[6][1],[6][2]
        var grid = [
            [3, 3, 0, 2, 3, 0],
            [0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [3, 3, 0, 0, 3, 0],
            [3, 3, 0, 0, 3, 0],
            [0, 0, 0, 0, 3, 3],
            [2, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 2, 0]
        ]

        break;

    case 5:
        var grid = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        break;
}
var x = 6;
var y = 8;
var a = 0;
var xx = 0;
var yy = 0;
while (a < y) {

    var b = 0;
    while (b < x) {
        document.write(grid[a][b])
        b++;
    }
    document.write("<br>");
    a++;

}


document.write("<br>");

function enemy1() {

    var xx = 0;
    var yy = 1;
    var enemy1 = grid[xx][yy];
    grid[xx][yy] = 4;
}

function enemy2() {
    var xx = 0;
    var yy = 2;
    var enemy2 = grid[xx][yy];
    grid[xx][yy] = 4;

}

function enemy3() {

    var xx = 0;
    var yy = 3;
    var enemy3 = grid[xx][yy];
    grid[xx][yy] = 4;

}

function enemy4() {


    var enemy4 = grid[xx][yy];
    grid[xx][yy] = 4;

}

enemy4(xx = xx + 1, yy = yy + 4);

document.write("<br>");
var a = 0;
while (a < y) {

    var b = 0;
    while (b < x) {
        document.write(grid[a][b])
        b++;
    }
    document.write("<br>");
    a++;

}

</script>

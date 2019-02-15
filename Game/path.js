
<script>
	// Order: movement unit without skill (killing someone) >
	// Unit with posibility of killing another unit > 
	// Rally Skill > 
	// Assist Skill > 
	// Dance > 
	// Unit damaging another unit without counter > 
	// Unit damaging another unit and taking damage > Unit attacking another unit and dying
	
	
    // In the grid 0 means walkable
    //1 is an obstacle where you can cross or stay if you are a flying unit
    //2 means wood where it costs 2 actions to enter if you are infantry or you can't enter if you are cavalry 
    //3 means nothing can stay in the place and no one can cross it
    var map = 0;
    var x = 6;
var y = 8;
var a = 0;
var xx = 0;
var yy = 0;
var mover=0;
var mxx=0;
var myy=0;
// Enemy int
var enemy1x=0;
var enemy1y=0;
var enemy2x=0;
var enemy2y=0;
var enemy3x=0;
var enemy3y=0;
var enemy4x=0;
var enemy4y=0;

switch (map) {
    case 0:
     //Enemy starting points from [0][1] to [0][4] 
        //Ally starting point from [7][1] to [7][4]
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
    enemy1x=4;
	enemy1y=4;
	enemy2x=0;
	enemy2y=2;
	enemy3x=0;
	enemy3y=3;
	enemy4x=0;
	enemy4y=4;

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

	grid[enemy1x][enemy1y] = 0; 
	enemy1x=enemy1x+mxx;
	enemy1y=enemy1y+myy;
	
    var enemy1 =grid[enemy1x][enemy1y];
    grid[enemy1x][enemy1y] = 6;
}

function enemy2() {
	
	grid[enemy2x][enemy2y] = 0; 
	enemy2x=enemy2x+mxx;
	enemy2y=enemy2y+myy;



    var enemy2 = grid[enemy2x][enemy2y];
    grid[enemy2x][enemy2y] = 5;

}

function enemy3() {

	grid[enemy3x][enemy3y] = 0; 
	enemy3x=enemy3x+mxx;
	enemy3y=enemy3y+myy;

   
    var enemy3 = grid[enemy3x][enemy3y];
    grid[enemy3x][enemy3y] = 4;

}

function enemy4() {
	
	grid[enemy4x][enemy4y] = 0; 
	enemy4x=enemy4x+mxx;
	enemy4y=enemy4y+myy;


    var enemy4 = grid[enemy4x][enemy4y];
    grid[enemy4x][enemy4y] = 3;

}

function movimiento(){
	if (mover==1){
		mxx=-1;
		myy=0;
		
		}
	if (mover==2){
		mxx=0;
		myy=+1;
				
		}
		if (mover==3){
		mxx=+1;
		myy=;
				
		}
		if (mover==4){
		mxx=0;
		myy=-1;
				
		}
//   		
//	 	 1
//  	203
//	  	 4
//	
	}
var e1=0;
var e=0;
while (e<5){
	a=0;
	y=8;
	x=6;

while (a < y) {

    var b = 0;
    while (b < x) {
        document.write(grid[a][b])
        b++;
    }
    document.write("<br>");
    a++;

}document.write("<br>");	e1++;
enemy1(movimiento(mover=e1));
e++;

}


document.write("<br>");
var a = 0;

</script>

// In the grid 0 means walkable
//1 is an obstacle where you can cross or stay if you are a flying unit
//2 means wood where it costs 2 actions to enter if you are infantry or you can't enter if you are cavalry 
//3 means nothing can stay in the place and no one can cross it
<script>
	var map=0;
switch(map){
	case 0:
var grid = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,1],[0,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
var x=6;
var y=8;
var a=0;
while (a<=y){
	
	var b=0;
	while (b<x){
	document.write(grid[a][b])
	b++;
}
document.write("<br>");
a++;

	}
		break;
			case 1:
var grid = [[0,1,0,0,0,2],[0,0,0,0,0,1],[1,1,0,0,0,0],[0,1,1,0,1,1],[0,0,0,0,2,0],[0,2,0,0,0,0],[0,1,0,0,0,0],[0,0,0,0,0,2]]
var x=6;
var y=8;
var a=0;
while (a<=y){
	
	var b=0;
	while (b<x){
	document.write(grid[a][b])
	b++;
}
document.write("<br>");
a++;

	}
		break;
case 2:
		//Enemy starting points from [0][1] to [0][5] Ally starting point from [6][0] to [6][3]
var grid = [[0,0,0,0,0,0],[3,0,3,0,3,0],[0,0,0,0,0,0],[3,0,3,0,3,0],[0,0,0,0,0,0],[3,0,3,0,3,0],[0,0,0,0,0,0],[3,0,3,0,3,0]]
var x=6;
var y=8;
var a=0;
while (a<=y){
	
	var b=0;
	while (b<x){
	document.write(grid[a][b])
	b++;
}
document.write("<br>");
a++;

	}
		break;
case 3:
		//Enemy starting point [0][1],[0][2],[7][1],[7][2]
var grid = [[0,0,2,0,2,0],[0,0,2,2,0,0],[0,0,0,1,2,0],[1,0,0,0,1,0],[1,1,0,0,1,0],[0,1,2,0,0,0],[0,1,1,0,2,2],[0,0,0,0,0,0]]
var x=6;
var y=8;
var a=0;
while (a<=y){
	
	var b=0;
	while (b<x){
	document.write(grid[a][b])
	b++;
}
document.write("<br>");
a++;

	}


}


</script>

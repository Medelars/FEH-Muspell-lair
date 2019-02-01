<script>
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
</script>

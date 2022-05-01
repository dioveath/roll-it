#pragma strict

var target: Transform;
var offsetx: int = -7;
var offsety: int = 2;
var offsetz: int = 0;

function Update () {
	transform.position = Vector3(target.position.x + offsetx, target.position.y + offsety, target.position.z + offsetz);
	transform.LookAt(target);
}
#pragma strict

var player: GameObject;

function OnTriggerEnter(){
	player.GetComponent.<Respawn>().restartLevel();
	var enemy = transform.GetComponentInParent(Enemy);
	player.GetComponent.<Destruct>().Destruct();
}
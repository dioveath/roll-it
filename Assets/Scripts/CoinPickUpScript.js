#pragma strict

var particleEffect : Transform;
var coinValue: int = 1;

function OnTriggerEnter (collider: Collider) {
	if(collider.tag == "Player"){
		ScriptGUI.Score += coinValue;
		var particle : Transform = Instantiate(particleEffect, gameObject.transform.position, gameObject.transform.rotation);
		Destroy(particle.gameObject, 2);
		Destroy(gameObject);
	}
}
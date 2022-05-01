#pragma strict

static var currentCheckPoint: Vector3; 

function OnTriggerEnter(collider: Collider){
	if(collider.tag == "Player"){
		if(transform.position.x > currentCheckPoint.x){
			currentCheckPoint = transform.position;
		}
	}
}
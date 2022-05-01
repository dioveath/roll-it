#pragma strict

static var canControl;

var rotationSpeed: float  = 300;
var jumpPower: int = 10;

var distance: float;
var direction: Vector3;

var Hit01: AudioClip;
var Hit02: AudioClip;
var Hit03: AudioClip;

var toPlay: AudioClip;



function Start(){
	distance = GetComponent.<Collider>().bounds.extents.y;
	direction = Vector3.down;
	Checkpoint.currentCheckPoint = transform.position;
	canControl = true;
}

function Update () {
	if(canControl){
		var rotation = Input.GetAxis("Horizontal") * rotationSpeed;
		rotation *= Time.deltaTime;
		GetComponent.<Rigidbody>().AddRelativeTorque(Vector3.back * rotation);

		if(Input.GetKeyDown("w") && isOnGround()){
				GetComponent.<Rigidbody>().velocity.y += jumpPower;
		}
		if(Input.GetKeyUp("w")){
			if(GetComponent.<Rigidbody>().velocity.y > 6){
				GetComponent.<Rigidbody>().velocity.y = 6;
			}
		}
	}
}

function isOnGround(){
	return Physics.Raycast(transform.position, direction,  distance + 0.1);
}

function OnCollisionEnter(){
	var randomNumber = Random.Range(0, 4);
	switch(randomNumber){
		case 0:
			toPlay = Hit01;
		break;
		case 1:
			toPlay = Hit02;
		break;
		case 2:
			toPlay = Hit03;
		break;
	}
	GetComponent.<AudioSource>().pitch = Random.Range(0.70, 1.3);
	GetComponent.<AudioSource>().clip = toPlay;
	GetComponent.<AudioSource>().Play();
}
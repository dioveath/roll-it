#pragma strict

//These all are modified versions of Brackey's Code by Charicha
//I am happy with what it turned out 

var rotationSpeed = 1000;
var jumpPower = 8;

var Hit01: AudioClip;
var Hit02: AudioClip;
var Hit03: AudioClip;

var toPlay: AudioClip;


var direction: Vector3 = Vector3.down;
var distance: int;
var thisRigidbody: Rigidbody;


function start(){
	distance = GetComponent.<Collider>().bounds.extents.y;
	thisRigidbody = GetComponent.<Rigidbody>();
}

function Update () {
	//Handle ball rotation
	var rotation: float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	thisRigidbody.AddRelativeTorque(Vector3.back * rotation);
	if(Input.GetKeyDown("w") && isOnGround()){
		jump();
	}
}

function jump(){
	GetComponent.<Rigidbody>().velocity.y = jumpPower;
}

function OnCollisionEnter(){
	GetComponent.<AudioSource>().Play();
}

function isOnGround(){
	return Physics.Raycast(transform.position, direction, distance + 0.1);
}

/*
Implementing sound on falling on the floor and Jump Version 0.1.01a by Charicha

function OnCollisionStay(){
	if(isOnAir){
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
	isOnAir = false;
	isOnGround = true;
}
function jump(){
	GetComponent.<Rigidbody>().velocity.y = jumpPower;
	//I have experimented a lot and found that collision still effect after jumping 
	//Its kinda like ball is little inside the ground and when velocity increases it'll rise up
	//but with some touching with ground and it will effect the collisionstay and changes
	//isOnGround to true
	yield WaitForSeconds(0.1);
	isOnGround = false;
	isOnAir = true;
}*/

/*
	Implementing Sound And Jump Version 0.1.21c by Charicha
	if(Input.GetKeyDown("w")){
			if(isOnGround){
			jump();
		}
	}

	if(Input.GetKeyDown("w")){
		if(isOnGround){
			jump();
		}
	}

	if(Physics.Raycast(transform.position, direction, distance)){
		isOnGround = true;
		isOnAir = false;
		if(play){
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
			play = false;
		}
	} else {
		isOnGround = false;
		isOnAir = true;
		play = true;
	}
*/
#pragma strict
import UnityEngine.SceneManagement;


var toPlay : AudioClip;
var playGameOver = true;

function Update () {
	if(transform.position.y <= -8){
		if(playGameOver){
			restartLevel();
		}
	}
}

function restartLevel(){
		playGameOver = false;
		playSound();
		loadLevel();
}

function playSound(){
		GetComponent.<AudioSource>().pitch = 1;
		GetComponent.<AudioSource>().clip = toPlay;
		GetComponent.<AudioSource>().Play();
}



function loadLevel(){
	BallControl02.canControl = false; 
	GetComponent.<Rigidbody>().velocity = Vector3.zero;
	GetComponent.<Rigidbody>().angularVelocity = Vector3.zero;
	yield WaitForSeconds(toPlay.length);
	//SceneManager.LoadScene("Level01", LoadSceneMode.Single);
	GetComponent.<Destruct>().Construct();
	transform.position = Checkpoint.currentCheckPoint;
	playGameOver = true;
	BallControl02.canControl = true;
}
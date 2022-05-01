#pragma strict

var loader : ScriptGUI;

function OnTriggerEnter(colliderInfo: Collider){
	Debug.Log("dasffdsa");
	if(colliderInfo.tag == "Player"){
		Debug.Log("PlayerEntered");
		loader.LoadNextLevel();
	}
}
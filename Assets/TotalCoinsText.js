#pragma strict

import UnityEngine.UI;


function Update(){
	GetComponent.<Text>().text = "Score: " + ScriptGUI.Score;
}
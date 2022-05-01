#pragma strict
import UnityEngine.SceneManagement;

static var Score: int = 0;
var rectX: int = Screen.width/2;
var rectY: int = 10;
var rectWidth: int = 70;
var rectHeight: int = 24;

var musicManagerPrefab: Transform;

function Start(){
	if(!GameObject.FindGameObjectWithTag("MusicManager")){
		var musicManager = Instantiate(musicManagerPrefab, transform.position, Quaternion.identity);
		musicManager.name = musicManagerPrefab.name;
		DontDestroyOnLoad(musicManager);
	}
}

function LoadNextLevel(){
	//SceneManager.LoadScene(SceneManager.LoadedScene + 1, LoadSceneMode.Single);
	Application.LoadLevel(Application.loadedLevel + 1);
}

function LoadLevel(level: String){
	SceneManager.LoadScene(level, LoadSceneMode.Single);
}
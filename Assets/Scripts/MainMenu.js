#pragma strict
import UnityEngine.SceneManagement;

var musicManagerPrefab : Transform;
static var musicManager: Transform;

function Start(){
		if(!GameObject.FindGameObjectWithTag("MusicManager")){
		musicManager = Instantiate(musicManagerPrefab, transform.position, Quaternion.identity);
		musicManager.name = musicManagerPrefab.name;
		DontDestroyOnLoad(musicManager);
		} 
}

function QuitGame(){
	Application.Quit();
}

function StartGame(level: String){
	SceneManager.LoadScene(level, LoadSceneMode.Single);
}

function setMusicVolume(volume: float){
	musicManager.GetComponent.<AudioSource>().volume = volume;
}

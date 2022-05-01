using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameStates : MonoBehaviour {

	public const int GAME_RUNNING = 1;
	public const int GAME_PAUSE = 2; 
	public static int GAME_STATE;
	public Button mainMenuButton;

	public GameObject parentCanvas;
	public GameObject yButtonObject;
	public GameObject nButtonObject;
	public GameObject qTextObject;

	// Use this for initialization
	void Start () {
		GAME_STATE = GAME_RUNNING;
		mainMenuButton.onClick.AddListener (eventHandler);
	}
	
	// Update is called once per frame
	void Update () {
		switch (GAME_STATE) {
		case GAME_RUNNING:
			Time.timeScale = 1.0f;
			break;
		case GAME_PAUSE:
			Time.timeScale = 0.0f;
			break;
		}
	}

	void eventHandler(){
		if (GAME_STATE == GAME_RUNNING) {
			GAME_STATE = GAME_PAUSE;
			showDialog ();
		} else {
			GAME_STATE = GAME_RUNNING;
		}
	}

	GameObject yButtonObjectRef;
	GameObject nButtonObjectRef;
	GameObject qTextObjectRef;

	public void showDialog(){
		yButtonObjectRef = Instantiate (yButtonObject, parentCanvas.transform, false) as GameObject;
		nButtonObjectRef = Instantiate (nButtonObject, parentCanvas.transform, false) as GameObject;
		qTextObjectRef = Instantiate (qTextObject, parentCanvas.transform, false) as GameObject;
		nButtonObjectRef.GetComponent<Button> ().onClick.AddListener (toRunningState);
		yButtonObjectRef.GetComponent<Button> ().onClick.AddListener (toMainMenu);
	}

	public void toRunningState(){
		Destroy (nButtonObjectRef);
		Destroy (yButtonObjectRef);
		Destroy (qTextObjectRef);
		GAME_STATE = GAME_RUNNING;
	}

	public void toMainMenu(){
		SceneManager.LoadScene ("MainMenu", LoadSceneMode.Single);
	}
}

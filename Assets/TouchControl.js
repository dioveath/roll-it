#pragma strict

var rotation: float;
var startPos : Vector2;
var direction2: Vector2;
var directionChoosen : boolean;
var jumpPower: int = 10;
var rotationSpeed: float = 300;
var direction: Vector3;

		function Start () {
			direction = Vector3.down;
		}

	function Update () {
			if(Input.touchCount > 0){
				if(Input.GetTouch(0).position.x > Screen.width/2 && Input.GetTouch(0).position.y < Screen.height/2 - 100){
					rotation = 1 * rotationSpeed;
				} else if(Input.GetTouch(0).position.x < Screen.width/2 && Input.GetTouch(0).position.y < Screen.height/2 - 100){
					rotation = -1 * rotationSpeed;
				}
				for(var i = 0; i < Input.touchCount; i++){
					var touch = Input.GetTouch(i); 
					switch(touch.phase){
						case TouchPhase.Began:
							startPos = touch.position;
							directionChoosen = false;
						break;
						case TouchPhase.Moved:
							direction2 = touch.position - startPos;
						break;
						case TouchPhase.Ended:
							directionChoosen = true;
						break;
					}
					if(directionChoosen){
						if(direction2.y > 0){
							Debug.Log("startPosition" + startPos);
							if(touch.position.y > startPos.y + 40){
								if(isOnGround()){
									GetComponent.<Rigidbody>().velocity.y = jumpPower;
								}
							}
						}
					}		
				}
			} else {
				rotation = 0 * rotationSpeed;
			}
			GetComponent.<Rigidbody>().AddRelativeTorque(Vector3.back * rotation);
		}

			

		function isOnGround(){
			return Physics.Raycast(transform.position, direction,  0.5+ 0.1);
		}
#pragma strict

var player: Rigidbody;
var bounceAmount: float = 8.0f;
var particles: Transform;

var enemyAnimator: Animator;
private var enemyCenterAnimator: Animator;
var colliders: GameObject;

function Awake(){
	enemyCenterAnimator = GetComponent.<Animator>();
}

function Die(){
	player.velocity.y = bounceAmount;
	var particles = Instantiate(particles, enemyAnimator.transform.position, enemyAnimator.transform.rotation);
	enemyAnimator.SetTrigger("Die");
	enemyCenterAnimator.SetTrigger("Stop");
	Destroy(colliders);
	Destroy(particles.gameObject, 3);
	Destroy(gameObject, 10);
}
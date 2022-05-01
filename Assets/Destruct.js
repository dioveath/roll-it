#pragma strict

var fracturedCells: Transform;
var wholeCell: Transform;

function Destruct(){
	GetComponent.<Rigidbody>().isKinematic = true;
	GetComponent.<SphereCollider>().enabled = false;
	wholeCell.gameObject.SetActive(false);
	var cloneCells =Instantiate(fracturedCells, transform.position, transform.rotation);
	cloneCells.gameObject.SetActive(true);
	Destroy(cloneCells.gameObject, 10.0f);
}

function Construct(){
	GetComponent.<Rigidbody>().isKinematic = false;
	GetComponent.<SphereCollider>().enabled = true;
	wholeCell.gameObject.SetActive(true);
}
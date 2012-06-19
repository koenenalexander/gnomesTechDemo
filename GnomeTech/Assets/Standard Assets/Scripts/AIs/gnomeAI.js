#pragma strict

var lookAtTarget : Transform;
var velocityVector : Vector3;
var runningSpeed = 10;
private var alerted = false;


function OnTriggerEnter(hit : Collider) {

	//the player is close enough to affect the gnome
	if(hit.tag == "playerInfluence") {
		alerted = true;
		lookAtTarget = hit.transform.parent; //target the player
	}
}

function OnTriggerExit(hit : Collider) {
	// if the gnome gets too far away, stop running
	if(hit.tag == "playerInfluence") { 
		alerted = false;
	}
}

function Start () {

}

function Update () {

	if (alerted) {
		transform.LookAt(lookAtTarget); // looks at the player
		transform.Rotate(Vector3(0,180,0)); //turns away from the player
		transform.Translate(Vector3.forward * runningSpeed * Time.deltaTime); //runs away
	}
}
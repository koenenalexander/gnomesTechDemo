#pragma strict

var lookAtTarget : Transform;
var runningSpeed = 1.5;
private var alerted = false;

function OnTriggerEnter(hit : Collider) {
	if(hit.isTrigger) {
		alerted = true;
		var rotate = Quaternion.LookRotation(lookAtTarget.position - transform.position);
		gameObject.rigidbody.AddForce(gameObject.transform.forward * runningSpeed);
	}
}

function OnTriggerExit(hit : Collider) {
	if(hit.isTrigger) {
		alerted = false;
		gameObject.rigidbody.velocity.Set(0,0,0);
	}
}

function Start () {

}

function Update () {

	if (true) {
		transform.LookAt(lookAtTarget);
		transform.rigidbody.MovePosition(lookAtTarget.position);
		gameObject.rigidbody.AddForce(gameObject.transform.forward * runningSpeed);
	}
}
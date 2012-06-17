function OnControllerColliderHit(hit : ControllerColliderHit) {

	if(hit.gameObject.tag == "Player") {
		Destroy (gameObject, 0);
	}
}


// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
}


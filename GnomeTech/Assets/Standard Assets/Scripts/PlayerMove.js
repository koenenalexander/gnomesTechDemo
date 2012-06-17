//sets the speed to move forwards and backwards
var speed = 3.0;

//sets the speed to rotate around the y-axis
var rotateSpeed = 3.0;

var score = 0;

//Projectile
var bulletPrefab : Transform;

function OnControllerColliderHit(hit : ControllerColliderHit) {

	if(hit.gameObject.tag == "gnome") {
		Destroy (hit.gameObject, 0);
		score ++;
		GameObject.Find("GUI_scoreInt").guiText.text = score.ToString();
	}
}

function Update () {
	
	var controller : CharacterController = GetComponent(CharacterController);
	
	//Rotates around y-axis
	transform.Rotate(0, Input.GetAxis("Horizontal") * rotateSpeed, 0);
	
	//Move forward or backward
	
	var forward = transform.TransformDirection(Vector3.forward);
	var currentSpeed = speed * Input.GetAxis("Vertical");
	
	controller.SimpleMove(forward * currentSpeed);
	
	if(Input.GetButtonDown("Jump")) {
		var bullet = Instantiate(bulletPrefab, 
								GameObject.Find("PlayerProjectileSpawn").transform.position, 
								Quaternion.identity);
		bullet.rigidbody.AddForce(transform.forward * 2000);
	}
}

@script RequireComponent(CharacterController)
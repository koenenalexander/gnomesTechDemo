
//Time in seconds before death
var lifeTime = 1.0;

function Awake() {
	Destroy (gameObject, lifeTime);
}
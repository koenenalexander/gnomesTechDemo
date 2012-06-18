#pragma strict
var numberOfGnomes : int = 1;
var gnomePrefab : Transform;

function Start () {
	
	var i : int;
	var xRange = GameObject.Find("gnomeSpawnFloor").transform.localScale.x;
	var zRange = GameObject.Find("gnomeSpawnFloor").transform.localScale.z;
	
	for (i = 0; i < numberOfGnomes; i++) {
		var randomX = Random.Range(0,xRange);
		var randomZ = Random.Range(0, zRange);
		var gnome = Instantiate(gnomePrefab, Vector3(randomX, 1, randomZ), Quaternion.identity);
		gnome.rigidbody.AddForce(transform.forward * 50);
	}
	
}

function Update () {

}
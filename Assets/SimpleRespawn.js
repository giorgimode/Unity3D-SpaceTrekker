#pragma strict

function Start () {

}

function Update () {
if(gameObject.transform.position.y <-5)
	if (gameObject.transform.position.x >-65)
	{
		gameObject.transform.position.x = 5;
		gameObject.transform.position.y = 7;
		gameObject.transform.position.z = 0;
	
	}
	else 
	{
		gameObject.transform.position.x = -67;
		gameObject.transform.position.y = 22;
		gameObject.transform.position.z = 0;
	
	}
}


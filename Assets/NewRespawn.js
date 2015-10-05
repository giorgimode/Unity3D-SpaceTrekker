/*#pragma strict
// sound effects.
var struckSound: AudioClip;
var deathSound: AudioClip;

function Start () {

}

function Update () 
{
	if(gameObject.transform.position.y <-5)
	Die();
}

function Die ()
{  

	// play the death sound if available.
	if (deathSound)
	{
		AudioSource.PlayClipAtPoint(deathSound, transform.position);

	}
		
	lives--;
	health = maxHealth;
	
	if(lives < 0)
		Application.LoadLevel("GameOver");	
	else 
	{ gameObject.transform.position.x=5.2;

gameObject.transform.position.y=7;
gameObject.transform.position.z=0;

};

	yield WaitForSeconds(1.6);	// give the sound time to complete. 

} */
// ThirdPersonStatus: Handles the player's state machine.

// Keeps track of inventory, health, lives, etc.


var health : int = 6;
var maxHealth : int = 6;
var lives = 4;

// sound effects.
var struckSound: AudioClip;
var deathSound: AudioClip;

private var levelStateMachine : LevelStatus;		// link to script that handles the level-complete sequence.

private var remainingItems : int;	// total number to pick up on this level. Grabbed from LevelStatus.

/*
function Awake()
{
	
	levelStateMachine = FindObjectOfType(LevelStatus);
	if (!levelStateMachine)
		Debug.Log("No link to Level Status");
	
//	remainingItems = levelStateMachine.itemsNeeded;
}

// Utility function used by HUD script:
function GetRemainingItems() : int
{
	return remainingItems;
}
*/
function ApplyDamage (damage : int)
{
	if (struckSound)
		AudioSource.PlayClipAtPoint(struckSound, transform.position);	// play the 'player was struck' sound.

	health -= damage;
	if (health <= 0)
	{
		SendMessage("Die");
	}
}


function AddLife (powerUp : int)
{
	lives += powerUp;
	health = maxHealth;
}

function AddHealth (powerUp : int)
{
	health += powerUp;
	
	if (health>maxHealth)		// We can only show six segments in our HUD.
	{
		health=maxHealth;	
	}		
}

/*
function FoundItem (numFound: int)
{
	remainingItems-= numFound;

// NOTE: We are deliberately not clamping this value to zero. 
// This allows for levels where the number of pickups is greater than the target number needed. 
// This also lets us speed up the testing process by temporarily reducing the collecatbles needed. 
// Our HUD will clamp to zero for us.

}

*/
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
	if (gameObject.transform.position.x >-65)
	{
		gameObject.transform.position.x = 5;
		gameObject.transform.position.y = 7;
		gameObject.transform.position.z = 0;
	
	}
	else 
	{
		gameObject.transform.position.x = -63;
		gameObject.transform.position.y = 22;
		gameObject.transform.position.z = 0;
	
	}

	yield WaitForSeconds(1.6);	// give the sound time to complete. 

} 
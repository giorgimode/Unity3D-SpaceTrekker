#pragma strict

function Start () {

}
function OnCollisionStay (hit : Collision) { 
    if(hit.gameObject.tag == "Crate"){
        transform.parent = hit.transform ; 
    }else{
        transform.parent = null;
}
}
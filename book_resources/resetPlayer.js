var startPosition:Vector3;
function Start () 
{
	startPosition = transform.position;
}

function Update () 
{
	if (transform.position.y < -5) transform.position = startPosition;
}
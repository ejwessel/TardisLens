// -----JS CODE-----
//@input float percentSpeed

// Bind to "Frame Updated" to rotate the object every frame
var transform = script.getTransform();
var rotation = transform.getLocalRotation();
var rotateBy = quat.angleAxis(Math.PI*getDeltaTime() * script.percentSpeed, vec3.up());
rotation = rotation.multiply(rotateBy);
transform.setLocalRotation(rotation);


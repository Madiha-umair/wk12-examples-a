/* NOTHING IN HERE YET */

/* Animation-related events are:
 * animationstart - runs when the animation first starts
 * animationiteration - runs when the animation loop
 * animationend - runs when the animation completes
 */
let ball = document.getElementById("ball");

ball.addEventListener("animationstart", function(){
    console.log("Animation has started");
});
ball.addEventListener("animationiteration", function(){
    console.log("Animation has looped");
});
ball.addEventListener("animationend", function(){
    console.log("Animation complete");
});
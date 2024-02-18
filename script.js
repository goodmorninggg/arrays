function loadscript(src,callback) {
    var script = document.createElement("script");
    console.log("script without src",script )
    script.src=src;
    console.log("script with src",script )
    console.log(src);
    script.onload = function() {
        console.log("loaded script with src: " + src);
        callback(null, src);
    }
    script.onerror = function() {
        console.log("error script with src: " + src);
        callback(new Error("src got some error"));
    }
    document.body.appendChild(script);

}
function hello(src){
    if(error) {
        console.log(error)
        return
    }
    alert("heool world" + src);
}
function goodmorning(src){
    if(error) {
        console.log(error)
        return
    }
    alert("goodmorning" + src);
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",goodmorning)
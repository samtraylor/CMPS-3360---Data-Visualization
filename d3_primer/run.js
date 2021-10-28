/**
 * Created by bsumma on 1/26/16.
 */
//<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
var button = d3.select("body").append("button");
button.text("Run!");
button.on("click", execute);
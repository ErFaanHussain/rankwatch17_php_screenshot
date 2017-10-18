
var page = require('webpage').create(),
system = require('system'); //create instances of system and webpage, webpage to create a web page
//and system for extraction of command line arguments

if(system.args.length === 1){ //if user has provided a command line arguemnt or not
  console.log("Please provide a URL as argument, Usage: phantomjs pageLoad.js <http://example.com>");
  phantom.exit();
}
else{
  var url = system.args[1]; //extract the argument (url)
  page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
  page.viewportSize = { width: 1366, height: 768 }; //set page properties - UA & ViewportSize
  page.open(url, function(status){
    console.log("Loading... " +url);
    console.log("Loading " + url + " : " + status);
    if(status === "success"){
      //using render fucntion to render thr page into a jpeg image, with name same as url
      page.render('screenshots/' + url.slice(7) + '.jpeg', {format: 'jpeg', quality: '100'});
      console.log("Screenshot taken, Please look for screenshots/" + url.slice(7) + ".jpeg");
    }else{
      console.log("Failed to load " + url);
    }
    phantom.exit(); //need to explicitly exit the phantom
  });
}

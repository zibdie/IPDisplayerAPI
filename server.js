const express = require('express')
const app = express()
const port = process.env.PORT || 3005
var path = require('path');
app.set('etag', false);

app.use((req, res, next) => {
  /* Allow anyone to access it from any page - Comment/Remove line below if you do not want this */
  res.setHeader('Access-Control-Allow-Origin', '*');
  /* Dont cache results*/
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", 0);
  next();
})

app.get('/api', (req, res, next) => {
    //Check what format client is asking
    let format = req.query.format;

    //Either get IP from x-forward-for or remoteAddress, to satisy services like Heroku that are behind a firewall
    let ipAddr = req.headers["x-forwarded-for"];
    if (ipAddr){
      let list = ipAddr.split(",");
      ipAddr = list[list.length-1];
    } else {
      ipAddr = req.connection.remoteAddress;
    }


    //Output result
    if(format == "json")
    {
      res.json({"ip": ipAddr})
    }
    else if(format == 'lxml')
    {
      res.setHeader('Content-Type', 'application/xml');
      res.send(`<root><ip>${ipAddr}</ip></root>`)
    }
    else if(format == 'html')
    {
      res.send(ipAddr)
    }
    else
    {
      res.send("No format set - Check index page")
    }
    
})

app.use("/", express.static(path.join(__dirname, 'static')))

app.listen(port, () => console.log(`IP Address Displayer server listening at ${port}`))



//start server on pm2 with the command pm2 start server.js -i max

//to stop the server use the command pm2 stop server.js and to delete the server use the command pm2 delete server.js

//pm2 start server.js -l logs.txt -i max
//pm2 show <id>
//open mac terminal and type pm2 monit

//pm2 zero downtime restart allows for the server to be restarted without any downtime.  This is done by starting a new server and then when the new server is ready, it will replace the old server.  This is done by using the command pm2 reload server.js --update-env

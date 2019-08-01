//Format of Token
// Authorization: Bearer <access_token>

module.exports = {
    verifyToken: function (req, res) {
        //get auth header value
        const bearerHeader = req.headers['authorization'];
        //check if bearer is underfined
        if(typeof bearerHeader !== 'undefined'){
            //split the bearer and the token
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            //return the jwt token
            return bearerToken;
        }else{
            res.sendStatus(403);
        }
    }

};
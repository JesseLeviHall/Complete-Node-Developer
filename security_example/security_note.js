/* 
In the real world you would not usually implement your own authenticatoin security. 

Oauth is a standard for authentication and authorization.


wireshark is a tool for network packet analysis. 

SSL is a standard for encrypting network traffic. TLS is the successor to SSL.

HTTPS is a standard for encrypting network traffic over HTTP.  the data is encrypted before it is sent over the network with TLS

Digital Certificates are used to verify the identity of a server. these are used by HTTPS to verify the identity of the server. these are free from Let's Encrypt, but it requires a domain name. Self-signed certificates are also possible, but they are not trusted by browsers. CA-signed certificates are also possible, but they are expensive.

generate a self-signed certificate with openssl (https://www.openssl.org/) command: openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365


helmet is a middleware for express that adds security headers to the response. 

authentication vs authorization: 
authentication is the process of verifying the identity of a user.
authorization is the process of verifying what a user is allowed to do.

JWT is a standard for authentication.  JWT is a token in base64 that is sent to the client and the client sends it back to the server to authenticate the user. 

bearer tokens are a type of JWT.  sub is the subject of the token.  iat is the time the token was issued.  exp is the time the token expires.  iss is the issuer of the token.  aud is the audience of the token.  nbf is the time the token is not valid before.  jti is the unique identifier of the token.  the token is signed with a secret key.

an opace token is a token that is not readable by the client.

the oauth 2.0 authorization code flow is a high standard. 

passport.js is a middleware for express that implements authentication. there are a lot of strategies for passport.js.


*/

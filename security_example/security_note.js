/* 
In the real world you would not usually implement your own authentication security. 

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
you need to set the strategy and configure it.

sessions are a way of storing data on the server about the user. Short lived, the session data is only relevant while the user is using the site. Typically tied to a temporary state of a site like a shopping cart.

store sessions is servier side sessions, or client side sessions.  but client side sessions are more performant. When using cookies for authentication, you should use the httpOnly flag to prevent XSS attacks. and these are stateful cookies. stateless cookies are not tied to a session.

we can lower the amount of data needed to be sent to the server by using a cookie but they are limited to 4kb. 

using express the cookie-session package is used to set up client side cookie sessions. express-session is used to set up server side sessions.

express sesion uses server memory that will be gone each time the server restarts. For this reason by default it is not intended to be used in a production environment. In production you need to set up your own scalable session store.

cookie-session is simpler because we dont need to set up a session store database to look up everytime the user makes a request. this helps keep our node process small and fast and stateless so we can load-balance and cluster easily, but it is not as secure as server side sessions.

*/

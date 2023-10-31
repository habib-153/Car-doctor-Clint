/**
 * --------------------
 * Make Api Secure
 * --------------------
 * The person who should have the access
 * 
 * Concept:
 * 1. assign two tokens for each person (access token and refresh token)
 * 2. access token: user identification(email, role, etc) valid for 
 * sorter duration
 * 3. refresh token: to recreate an access token that was expired
 * 4. if refresh is invalid then logout the user.
 * 
 * 
 */


/**
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expiresIn: '1h})
 * token client
 * 3. create api set to cookie. http only, secure, same site
 * 4. from client side: axios withCredentials true
 * 5. cors setup : origin, credentials:true
 * 
 */

/**
 * 1. for secure api calls
 * 2. Server Side: install cookie parser and use it as a middleware
 * 3. req.cookies
 * 4. on the client side: make api call using axios withCredentials:true
 */
/**
 * how to store token in client side
 * 1. memory --> ok type
 * 2. local storage --> ok type (XSS attack marle tata bye bye khatam)
 * 3. cookies: http only
 * 
 */


/**
 * set cookies with http only. for development secure: false
 * 2. cors 
 * 3. client side axios settings
 *  
 */

/**
 * app.use(cors({
  origin:['http://localhost:5173'],
  credentials: true
}));
 */
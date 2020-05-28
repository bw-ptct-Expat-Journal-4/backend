// const jwt = require('jsonwebtoken');
// const {jwtSecret} = require('../config/secrets.js');

// module.exports = function signToken(user) {
// 	const payload = {
// 		username: user.username,
// 		userId: user.id
// 	};

// 	const options = {
// 		expiresIn: '1hr'
// 	};

// 	return jwt.sign(payload, jwtSecret.jwtSecret, options);
// };


// const jwt = require('jsonwebtoken');
// const secrets = require('../config/secrets.js');

// module.exports = (req, res, next) => {
//     const token = req.headers.authorization;

//     if(token) {
//         jwt.verify(token, secrets.jswSecret, (err, decodedToken) => {
//             if(err) {
//                 res.status(401).json(err);
//             } else {
//                 console.log('decodedcode in auth-middleware',decodedToken)
//                 req.user = { username: decodedToken.username };
//                 next();
//             }
//         });
//     } else {
//         res.status(403).json({ message: 'User is not logged in!' });
//     }
// };
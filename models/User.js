// require Thought.js file?

/*
username
- string
- unique
- required
- trimmed
*/
/*
email
- string
- unique
- required
- must match a valid email address (mongoose validation)
*/
/*
thoughts
- Array of _id values referending the Thought model
*/
/*
friends
- Array of _id values referencing the User model (self-reference)
*/

// Schema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

// module.exports = User; ?
// thoughts in User.js file will reference this file
// require dateFormat file when I create it
// require Reaction.js file?

/*
thoughtText
- String
- Required
- Must be between 1 and 280 chars
*/
/*
createdAt
- Date
- Set default
- Use a getter method to format the timestamp on query (this will need to be required)
*/
/*
username (user that created this thought)
- String
- Required
*/
/*
reactions(these are like replies)
- Array of nested documents created with the reactionSchema
*/

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on the query.

// module.exports = Thought; ?
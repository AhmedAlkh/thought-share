// SCHEMA ONLY
// { model, Type } - include this(reference training module)
// require formatDate file after I've created it

/*
reactionId
- Use Mongoose's ObjectId data type
- Default value is set to a new ObjectId
*/
/*
reactionBody
- String
- Required
- 280 char maximum
*/
/*
username
- String
- Required
*/
/*
createdAt
- Date
- Set defualt value to the current timestamp
- Use a getter method to format the timestamp query (require formatDate at top of file)
*/

// Schema Settings
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model


// module.exports = Reaction; ?
const { User, Thought } = require('../models');

const userController = {
    // GET all users - /api/users
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // GET a single user by its _id and populated thought and friend data
    // /api/users/:id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate ({
                path: 'thoughts',
                select: '-__v'
            })
            .populate ({
                path: 'friends',
                select: '-__v'
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'User does not exist'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    /* 
    POST a new user - /api/users
    example data
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    }
    */
   createUser({ body }, res) {
       User.create(body)
       .then(dbUserData => res.json(dbUserData))
       .catch(err => res.status(400).json(err));
   },
   // PUT to update a user by its _id - /api/users/:id
   updateUser({ params, body}, res) {
       User.findByIdAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
       .then(dbUserData => {
           if (!dbUserData) {
               res.status(404).json({ message: 'User does not exist' });
               return;
           }
           res.json(dbUserData);
       })
       .catch(err => res.status(400).json(err));
   },
}

// PUT to update a user by its _id

// DELETE to remove a user by its _id

// BONUS: Remove a user's associated thoughts when deleted

// ==================
// FRIEND ROUTES

// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list
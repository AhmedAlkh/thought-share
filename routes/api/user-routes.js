const router = require("express").Router();

// Require user-controller
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Friend routes
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;

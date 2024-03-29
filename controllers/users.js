import User from '../models/user.js'
import jwt from 'jsonwebtoken'
const SECRET = process.env.SECRET;



export default {
  signup,
  login,
  update
};


async function signup(req, res) {
  console.log(req.body, '<- req.body in controller function')
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    console.log(err)
    console.log('error logged in users controller signup')
    res.status(400).json(err);
  }
}

async function login(req, res) {

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json({ err: 'bad credentials' });
    user.comparePassword(req.body.password, (err, isMatch) => {

      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function update(req, res) {
  console.log('update function firing')
  try {
    console.log(req.body, '<-- req.body')
    User.findById(req.user._id, function (err, user) {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      if (req.body.password) {
        user.password = req.body.password
      }
      user.save()
      console.log(user, '<- user')
      const token = createJWT(user);
      res.json({token})
    })
  } catch (err) {
    return console.log(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
}



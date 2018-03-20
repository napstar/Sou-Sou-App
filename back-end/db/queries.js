const db = require("./index");
// const authHelpers = require("../auth/helpers");
// const passport = require("../auth/local");

// Query to get all groups for public groups page, map in the front-end
getAllGroups = (req, res, next) => {
    db.any('select group_name, payout, total_members from groups')
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Retrieved all groups'
        });
    })
    .catch((err) => {
        return next(err);
    })
}

//Create user with resistration and login users
createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  console.log('createUser hash: ', hash);
  db.any('INSERT INTO users (first_name, last_name, username, password_digest, salt) VALUE (${firstName}, ${lastName}, ${username}, ${password})', {
    {firstName: req.body.firstName,
    lastName:req.body.lastName,
    username: req.body.username
    password: hash,
    salt: salt
  }
  .then(() => {
    //Would like to authenticate and redirect to profile or login
    res.send(`created user: ${req.body.username}`);
  })
    .catch(err => {
      console.log('Create User Error: ',err);
      res.status(500).send('error creating user')
    })
  })
}

//Login users
loginUser = (req, res, next) => {
  passport.authenticate("local", {});
  const authenticate = passport.authenticate("local", (err, user, info) => {
    if(err) {
      res.status(500).send("Error while trying to logging in, Please try again")
    } else if (!user) {
      res.status(401).send("Invalid Username or Password, Please try again");
    } else if (user) {
      req.logIn(user, (err) => {
        if (err) {
          res.status(500).send("Login Error");
        }else {
          res.status(200).send(user);
        }
      })
    }
  })
  return authenticate(req, res, next)
}

//User logout
logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("User logout")
}

// get user info for their profile page when they log in or during session
getUserInfo = (req, res, next) => {
    db.any('select first_name, last_name, amount, rating from users')
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Retrived User info'
        });
    })
    .catch((err) => {
        return next(err);
    });
}
// select one group from groups list page from front-end(list provided by getAllGroups)
getSingleGroup = (req, res, next) => {
    db.one('select group_name, rating, payout, frequency, description from groups where group_name=${group_name}',
        {
            group_name: req.body.group_name
        }
    )
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Retrieved group info'
        });
    })
    .catch((err) => {
        return next(err);
    })
}
// creates group when user submits form from group creation page
createGroup = (req, res, next) => {
    db.none('insert into groups (group_name, total_members, creator, payout, frequency, description, rating) values (${group_name}, ${total_members}, ${user_name}, ${payout}, ${frequency}, ${description}, ${rating})',{
        group_name: req.body.group_name,
        total_members: req.body.total_members,
        user_name: req.body.user_name,
        payout: req.body.payout,
        frequency: req.body.frequency,
        description: req.body.description,
        rating: req.body.rating
    })
    .then((data) => {
        res.status(200).json({
            status: success,
            data: data,
            message: 'Created group!'
        });
    })
    .catch((err) => {
        return next(err);
    })
}

createUser = (req, res, next) => {
    db.none('insert into users (email, first_name, last_name, rating, salt, password_digest) values (${email}, $first_name}, ${last_name}, ${rating}, ${salt}, ${password_digest})', {
        email: email,
        first_name: first_name,
        last_name: last_name,
        rating: rating,
        salt: salt,
        password_digest: password_digest
    })
}


module.exports = {
    getAllGroups: getAllGroups,
    getUserInfo: getUserInfo,
    getSingleGroup: getSingleGroup,
    createGroup: createGroup,
    createUser: createUser,
    loginUser: loginUser
};

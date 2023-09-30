const express = require('express');

const router = express.Router();

let user = [
    {name:'demo',age:45},{name:'john doe',age:35}
]

router.get('/showall',(req,res)=>{
    try {
        res.json(user);    
    } catch (error) {
        res.status(500).json({'message':'An error occurred while fetching user data'})
    }
});

router.post('/register',(req,res)=>{
      try {
        if((req.body.password!=null)&&(req.body.email!=null)){
              res.status(201).send({ message: 'User registered successfully' });
        }
      } catch (error) {
        console.log(error);
    res.status(500).send({ message: 'An error occurred!!' });
      }
});

module.exports = router;
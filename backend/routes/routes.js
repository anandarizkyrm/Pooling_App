const express = require('express');
const router = express.Router();

const {
    register,
    login,
    getUser,
} = require('../controller/userController');

const {
    isAuth,
} = require('../middleware/auth');

const {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getMyQuestions,
    vote,
    getQuestion,
    getAllQuestions,
    getPublicQuestion
} = require('../controller/questionController');

//user routes
router.post('/register', register);
router.post('/login', login);
router.get('/user/:id', isAuth, getUser);

//question routes
// router.get('/question', isAuth, isAdmin, getQuestion);
router.post('/question', isAuth, createQuestion);
router.put('/question/:id', isAuth,  updateQuestion);
router.delete('/question/:id', isAuth, deleteQuestion);
router.get('/myquestion/:id', isAuth, getMyQuestions);
router.get('/question/:id', isAuth, getQuestion);
router.get('/allquestion', isAuth, getAllQuestions);
router.get('/publicquestion', getPublicQuestion);
router.patch('/vote', isAuth, vote);


module.exports = router;
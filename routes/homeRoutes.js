const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
      order: [['created_at', 'DESC']]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Other home routes...

module.exports = router;

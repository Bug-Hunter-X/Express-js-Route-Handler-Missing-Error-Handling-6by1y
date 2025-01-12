const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await db.getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));
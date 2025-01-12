const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Should handle the error appropriately.  Sending a 500 with a generic message is bad practice
      res.status(500).send('Server error');
    } else if (!user) {
      // Missing error handling for non-existent user
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
module.exports = {
  handleError: (err, req, res, next) => {
    if(err.errno === 19) {
      return res.status(400)
        .json({ message: 'Supplied username field already exists' });
    }
    res.status(500)
      .json({
        error: 'Server error'
      });
  }
}
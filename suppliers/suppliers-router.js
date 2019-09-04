const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send({ message: 'endpoint is /suppliers' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/env', (req, res) => {
  res.json({
    emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailJsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
   
    
  });
});

module.exports = router;
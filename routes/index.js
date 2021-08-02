const express = require('express');
const pdfService = require('../service/pdf-service');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('It works');
});

router.get('/invoice', (req, res, next) => {
    // res.send('Hi there!!');
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename=test-invoice.pdf'
    });
    pdfService.buildPdf(
        (chunk) => stream.write(chunk),
        () => stream.end()
    );
});

module.exports = router;
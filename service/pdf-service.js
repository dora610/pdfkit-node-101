const PDFDocument = require('pdfkit');

function buildPdf(dataCallback, endCallback) {
    const doc = new PDFDocument({ size: 'A4', font: 'Courier' });
    const textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in \
    faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in \
    turpis fringilla hendrerit. Ut nec accumsan nisl. Suspendisse rhoncus nisl posuere tortor tempus et dapibus elit porta. Cras leo neque, \
    elementum a rhoncus ut, vestibulum non nibh. Phasellus pretium justo turpis. Etiam vulputate, odio vitae tincidunt ultricies, eros odio \
    dapibus nisi, ut tincidunt lacus arcu eu elit. Aenean velit erat, vehicula eget lacinia ut, dignissim non tellus. Aliquam nec lacus mi, sed vestibulum nunc. Suspendisse potenti. Curabitur vitae sem turpis. Vestibulum sed neque eget dolor dapibus porttitor at sit amet sem. Fusce a turpis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;';
    doc.info = { 'Title': 'Invoice', 'Author': 'Surajit Karuri' };
    doc.on('data', dataCallback);
    doc.on('end', endCallback);
    doc
        .fontSize(30)
        .text('Heading', { align: 'center' });
    doc
        .fontSize(10)
        .text(`right-aligned text:  ${textContent}`, {
            align: 'justify',
            columns: 3,
            columnGap: 15,
            height: 100,
            width: 465,
        });
    doc.end();
}

module.exports = { buildPdf };
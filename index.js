// --- ASCIIDoctor 2 Browser Viewer (ADOC2Viewer) - GeekMustHave

const fs = require('fs');



const chromium = require('chromium');
const {execFile} = require('child_process');
 
execFile(chromium.path, ['https://GeekMustHave.com'], err => {
    console.log('Hello GeekMustHave!');
});







/* Application History

  DATE       Version Author   Description
==========  ======== ======   ====================================================================
03/19/2019    V2.1b   JHRS    Initial brain fart


*/
// --- ASCIIDoctor 2 Browser Viewer (ADOC2Viewer) - GeekMustHave


const puppeteer = require('puppeteer');
const fs = require('fs');

// --- Load readme.adoc
const adoc = require('asciidoctor.js')();

// --- Read the ADOC file
let adocFile = fs.readFileSync("./readme.adoc", 'utf8');

// --- Convert to HTML using asciidoctor.js
//  

//let htmlContent = adoc.convert(adocFile, {'header_footer': true});
let htmlContent = adoc.convertFile('./readme.adoc', {
  'to_file': false, 
  'header_footer': true, 
  'safe': 'safe'
//  ,'attributes': {'linkcss': true}
});


// --- Brings back a ablank screen
//var htmlContent = adoc.loadFile('./readme.adoc');


(async () => {
  // --- Puppeteer launches Chromium in headless mode. To launch a full version of Chromium, set the 'headless' option when launching a browser:
  const browser = await puppeteer.launch({
    headless: false
    ,args: [
      '--start-maximized', 
      '--windows-size=1910,1080', 
      '--start-fullscreen',
      '--disable-infobars'  // --- Remove 'Chrome is being controledd...' message
    ]
//    ,args: ['--start-fullscreen'  ]
  });
  const page = await browser.newPage();
//  await page.setViewport({
//    width: 0,
//    height: 0,
//    isLandscape: true
//  }
//  )
  await page.setContent(htmlContent);

  await page._client.send( 'Emulation.clearDeviceMetricsOverride' );
  //await page.screenshot({path: 'example.png'});

  //await browser.close();
})();






/* Application History

  DATE       Version Author   Description
==========  ======== ======   ====================================================================
03/20/2019    V2.1c   JHRS    Took out Chromium and added puppeteer
03/19/2019    V2.1b   JHRS    Initial brain fart


*/
"use strict";

const fs = require("fs");

const buildData = (dataObject) => {
  let data = JSON.stringify(dataObject);
  fs.writeFileSync("dist/webpage.json", data);
};

let webpage = new Object();

// Frontpage
webpage.frontpage = {
  name: "Tobias Nordahl",
  contactInfo: `<div class="subheading mb-5">8260 Viby J · Midtjylland, Danmark · (+45) 40 30 44 61 ·
        <a href="mailto:post@tobiasnordahl.dk">post@tobiasnordahl.dk</a>
    </div>`,
  summary: `Analytiker - dog også kodekværner, datagnaver, front-end designer 🎉 👩‍💻, med passion for mange tekniske (HTML,CSS,JS,PHP,SQL,LINUX++🚀) og kommunikative aspekter (ADFÆRDSDESIGN,PROCESOPTIMERING & HÅNDTERING).`,
  links: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tobias-nordahl-43b295103/",
    },
    { name: "GitHub", href: "https://github.com/exetico/" },
  ],
};

/*
interests: {},
experince: {},
experinceother: {},
education: {},
skills: {},
portfolio: {},
*/

buildData(webpage);

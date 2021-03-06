"use strict";

const fs = require("fs");

const buildData = (dataObject) => {
  let data = JSON.stringify(dataObject);
  fs.writeFileSync("dist/webpage.json", data);
};

let webpage = new Object();

// Frontpage
webpage.frontpage = {
  title: "<HEAD>",
  body: {
    name: "Tobias Nordahl",
    address: "8260 Viby J · Midtjylland, Danmark · (+45) 40 30 44 61",
    email: "post@tobiasnordahl.dk",
    summary: `Analytiker - dog også kodekværner, datagnaver, front-end designer 🎉 👩‍💻, med passion for mange tekniske (HTML,CSS,JS,PHP,SQL,LINUX++🚀) og kommunikative aspekter (ADFÆRDSDESIGN,PROCESOPTIMERING & HÅNDTERING).`,
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/tobias-nordahl-43b295103/",
      },
      { name: "GitHub", href: "https://github.com/exetico/" },
    ],
  },
};

// Interests
webpage.interests = {
  title: "Lidt om mig",
  body: {
    primary: `Jeg er en ung mand på 29 år. Min største interesse er kommunikation, både som teori og i praksis. Af samme årsag begyndte jeg i en tidlig alder at udvikle kommunikationsprodukter – herunder grafisk arbejde, hjemmesider, video og meget andet. Jeg er vild med data, forsøger at fordybe mig bedst muligt i dem. Oftest kan en 90% løsning være god nok, men jeg stræber gerne efter 100%-løsningerne hvor tiden tillader det. Mine opgaver er mit ansvar, og jeg er altid begejstret for at stable nye projekter på benene. At omgås, deltage og det at være blandt andre mennesker, har altid været der, jeg har fundet den største glæde. Dette glæder også i situationer, hvor jeg skal møde nye mennesker og guide i (måske) tekniske løsninger.

        Efter afslutning af min studenter-eksamen, fulgte en dannnelsesrejse på fire måneder - og sikken oplevelse. Jeg har erfaring som freelance webdesigner og udvikler, med mange ambitioner og mål. Jeg har lavet front-end delen af hjemmesider igennem mange år med anvendelse af CMS-systemer. Jeg er blevet glad for JavaScript med tiden - både til brug i front-end og backend. Dertil stor grundviden for netværksbaserede systemer - men også linux i et bredt omfang, omfattende både den almene anvendelse og dele af kunsten bag kulisserne.
        
        I dag arbejder jeg meget med data, i forbindelse med mange projekt-relaterede opgaver. Jeg har også en passion for at dykke med i meta-data, for at spotte både adfærd og værdiskabende mønstre. Og uden at lyde alt for selvfed, gør jeg en stor dyd ud af at spotte fejlene før de opstår, og samtidig skabe de bedste muligheder for mine medkollegaer, ved hjælp af egen-udviklede værktøjer. Alt sammen for at vi sammen kan komme hurtigst, bedst og sikrest muligt fra A til Å. Nærmere hereom deler jeg gerne i en åben dialg.
        
        I øvrigt har jeg en stor passion for det smarte hjem, 3D-printning og anden mikro-elektronik. Men det er hel anden snak, jeg vil gemme til en passende anledning.
        
        Mit fulde navn er Tobias Nordahl Kristensen. Og du er mere end velkommen til at kontakte mig i dag.`,
  },
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

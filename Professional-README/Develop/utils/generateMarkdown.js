const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === "MIT") {
    data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  
  if (data.license === "APACHE 2.0") {
    data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }

  if (data.license === "GNU Public v3.0") {
    data.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

  return `# ${data.title}
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation-Instructions)
  * [Usage Instructions](#Instructions-on-usage)
  * [Contribution Guidelines](#Contuibution-Guidelines)
  * [License](#License)
  * [Testing instructions](#Test-Instructions) 
  * [e-mail](#Email-address)
  
  ## Description
  ${data.description}
  ## Installation Instructions 
  ${data.installation}
  ## Instructions on usage 
  ${data.usage}
  ## Contuibution Guidelines
  ${data.contribution}
  ## License
  ${data.license}
  ## Test Instructions
   ${data.test}
  ### GitHub Profile
  [GitHub Profile](http://github.com/${data.username})
  ### Email address
  [e-mail address](${data.email})
`;
}

module.exports = generateMarkdown;

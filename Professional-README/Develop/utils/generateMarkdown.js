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
  

  return `# ${data.title}
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation-Instructions)
  * [Usage Instructions](#Instructions-on-usage)
  * [Contribution Guidelines](#Contuibution-Guidelines)
  * [License](#License)
  * [Testing instructions](#Test-Instructions) 
  * [e-mail](#Email-address)
  
  ## License
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  ## Description
  ${data.description}
  ## Installation Instructions 
  ${data.installation}
  ## Instructions on usage 
  ${data.usage}
  ## Contuibution Guidelines
  ${data.contribution}
  ## Test Instructions
   ${data.test}
  ### GitHub Profile
  [GitHub Profile](http://github.com/${data.username})
  ### Email address
  [e-mail address](${data.email})
`;
}

module.exports = generateMarkdown;

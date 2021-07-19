const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./utils/testing.md', "fileContent", err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
fs.writeFile("test.md", "suck it", function (err){
  if (err) throw err;

});


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

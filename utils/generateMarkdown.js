// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = ""

  if (data.license === "Apache") {
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (data.license === "MIT License"){
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (data.license ==="GNU"){
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }

  return `# ${data.title}

  ## Description 

  ${data.description}

  
  
  ## Table of Contents (Optional)
  
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation

  ${data.installation}

  
  ## Usage 
  
  ${data.usage}
  
  ## License
  
  ${badge}
 
  ## Contributing

  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  Email:  ${data.email}
  Github: <a href ="https://github.com/${data.github}"> Github Profile Link </a>
  
`;
}

module.exports = generateMarkdown;

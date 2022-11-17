// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ``;
    } else {
      return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return ` ## License
    This project is licensed by: ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##Description
${data.description}

##Table of Contents

##Installation
${data.install}

##Usage
${data.usage}

##Contributing
${data.contribute}

##Tests
${data.tests}

##Questions
If you have any questions, contact me here: ${data.email} 
GitHub profile: github.com/${data.github}

${renderLicenseBadge}
`;
}
module.exports = generateMarkdown;

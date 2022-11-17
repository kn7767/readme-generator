// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ``;
    } else {
      return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)])`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ``
  } 
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GNU') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
  if (license === 'Creative Commons') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return ` ## License ${renderLicenseBadge}
    This project is licensed by: ${data.license}. Click the link to learn more about the license: ${renderLicenseLink}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection}

##Description
${data.description}

##Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

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
`;
}
module.exports = generateMarkdown;

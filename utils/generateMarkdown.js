// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
      break;
    case "GPL-v3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
      break;
    case "Perl":
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
      break;
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `(https://opensource.org/licenses/MIT)`;
      break;
    case "GPL-v3":
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "Perl":
      return `(https://opensource.org/licenses/Artistic-2.0)`;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${license}`;
  if (!license) {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.badge}
${renderLicenseBadge(License)}
`;
}

module.exports = { renderLicenseBadge, renderLicenseLink };

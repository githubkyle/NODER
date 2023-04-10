// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let yourLicenseBadge = "";
  if (License === First) {
    yourLicenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (License === Second) {
    yourLicenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (License === Third) {
    yourLicenseBadge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
  } else {
    yourLicenseBadge = "";
  }
  return yourLicenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let yourLicenseLink = "";
  if (License === "MIT") {
    yourLicenseLink = `(https://opensource.org/licenses/MIT)`;
  } else if (License === "GPL-v3") {
    yourLicenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (License === "Perl") {
    yourLicenseLink = `(https://opensource.org/licenses/Artistic-2.0)`;
  } else {
    yourLicenseLink = "";
  }
  return yourLicenseLink;
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

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;
module.exports = renderLicenseSection;
module.exports = yourLicenseBadge;
module.exports = yourLicenseLink;

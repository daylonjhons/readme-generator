// Function to generate markdown for README
const generateMarkdown = data => {
  // License section
  const licenseSection = renderLicenseSection(data.license);

  // Contribution section
  let contributionSection = '';
  if (data.contributing === true && data.howToContribute) {
      contributionSection = `## Contributing
${data.howToContribute}
`;
  }

  // Generating the markdown
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](##Installation)
- [Usage](##Usage)
- [Test](#Test)
- [License](##License)
- [Questions](##Questions)
${contributionSection ? '- [Contributing](##Contributing)\n' : ''}

## Installation
${data.installation}

## Usage
${data.usage}

## Test
${data.test}

${licenseSection}

${contributionSection ? contributionSection : ''}

## Questions:
If you have any questions about the repo, you can message me @ [email]${data.email}. 
You can also find me on Github @ [${data.github}](https://github.com/${data.github}).
`;
}

// Function to render the license section
const renderLicenseSection = license => {
  if (!license) return '';

  return `## License

Licensed under the ${license} license.

${renderLicenseBadge(license)}\
${renderLicenseLink(license)}`
}

// Function to render the license badge
const renderLicenseBadge = license => {
  if (!license) return '';

  switch (license) {
      case 'The MIT License':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0 License':
          return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GNU GPL v3':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Mozilla Public License 2.0':
          return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      case 'BSD 3-Clause License':
          return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return '';
  }
}

// Function to render the license link
const renderLicenseLink = license => {
  if (!license) return '';

  switch (license) {
      case 'The MIT License':
          return '(https://opensource.org/licenses/MIT)';
      case 'Apache 2.0 License':
          return '(https://opensource.org/licenses/Apache-2.0)';
      case 'GNU GPL v3':
          return '(https://www.gnu.org/licenses/gpl-3.0)';
      case 'Mozilla Public License 2.0':
          return '(https://opensource.org/licenses/MPL-2.0)';
      case 'BSD 3-Clause License':
          return '(https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return '';
  }
}

// Exporting the generateMarkdown function
module.exports = generateMarkdown;


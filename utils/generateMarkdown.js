// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  return `# ${answers.title} ![License](https://img.shields.io/badge/license-${answers.license}-success) 
  ## Table of Contents
  - [Installation](Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  This project is licensed under the ${answers.license} license.
  ## Contributing
  ${answers.contributing}
  ## Tests
  ${answers.tests}
  ## Questions
  Please direct inquiries to ${answers.questions}
`;
}

module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  return `# ${answers.title}

`;
}

module.exports = generateMarkdown;

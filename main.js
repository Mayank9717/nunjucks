const nunjucks = require("nunjucks");
const fs = require("fs");

// Configure Nunjucks
const templatePath = "./templates";
const dataPath = "./data";
const env = nunjucks.configure(templatePath, { autoescape: true });

// Load users data
const users = JSON.parse(fs.readFileSync(`${dataPath}/users.json`, "utf-8"));

// Render the template
const template = "index.njk";
const renderedTemplate = nunjucks.render(template, { users });

console.log(renderedTemplate); // Or send this to your response in a web application
// render the response in a web application

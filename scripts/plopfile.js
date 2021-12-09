const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('page_template', {
    description: 'create new files',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please enter new component demo page',
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/pages/{{pascalCase name}}/index.tsx'
        ),
        templateFile: path.resolve(
          __dirname,
          '../templates/page_template/index.hbs'
        ),
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/pages/{{pascalCase name}}/doc.tsx'
        ),
        templateFile: path.resolve(
          __dirname,
          '../templates/page_template/doc.hbs'
        ),
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/pages/{{pascalCase name}}/demo.tsx'
        ),
        templateFile: path.resolve(
          __dirname,
          '../templates/page_template/demo.hbs'
        ),
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/pages/{{pascalCase name}}/{{name}}.md'
        ),
        templateFile: path.resolve(
          __dirname,
          '../templates/page_template/md.hbs'
        ),
      },
    ],
  });
};

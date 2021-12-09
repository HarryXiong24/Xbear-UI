const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('page_template', {
    description: 'create a new component demo page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please enter a new component demo page name',
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

  plop.setGenerator('component_template', {
    description: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please enter a new component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/components/{{pascalCase name}}/index.tsx'
        ),
        templateFile: path.resolve(
          __dirname,
          '../templates/component_template/index.hbs'
        ),
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/components/{{pascalCase name}}/type.ts'
        ),
        templateFile: path.resolve(
          __dirname,
          '../templates/component_template/type.hbs'
        ),
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/components/{{pascalCase name}}/style.scss'
        ),
        templateFile: path.resolve(
          __dirname,
          '../templates/component_template/style.hbs'
        ),
      },
    ],
  });
};

# CRA-Template "Master"

[![MIT License](https://img.shields.io/github/license/peter-stuhlmann/cra-template-master.svg)](https://github.com/peter-stuhlmann/cra-template-master/blob/master/LICENSE)
![Code size](https://img.shields.io/github/languages/code-size/peter-stuhlmann/cra-template-master.svg)
[![open issues](https://img.shields.io/github/issues/peter-stuhlmann/cra-template-master.svg)](https://github.com/peter-stuhlmann/cra-template-master/issues?q=is%3Aopen+is%3Aissue)
[![closed issues](https://img.shields.io/github/issues-closed/peter-stuhlmann/cra-template-master.svg)](https://github.com/peter-stuhlmann/cra-template-master/issues?q=is%3Aissue+is%3Aclosed)

A template for [Create React App](https://github.com/facebook/create-react-app).

## Usage

```
npx create-react-app %PROJECT_NAME% --template master
```

or

```
yarn create react-app %PROJECT_NAME% --template master
```

## Features

- Context _(components/Context.js)_
- Router _(components/Router.js)_
- Error 404 page _(components/NotFound.js)_
- tracking with google analytics _(you have to change the tracking code in helpers/analytics.js)_

## Dependencies

- react-ga _(Google Analytics)_
- react-router-dom _(for multiple routes)_
- styled-components _(allows you to write actual CSS code to style your components)_

## Structure

```
[your-app-name]/
  package.json
  public/
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    components/
      Context.js
      Home.js
      NotFound.js
      Router.js
    helpers/
      analytics.js
    App.js
    index.js
  .gitignore
```

---

## License

Licensed under the [MIT](https://github.com/peter-stuhlmann/cra-template-master/blob/master/LICENSE) license by [Peter R. Stuhlmann](https://peter-stuhlmann-webentwicklung.de).

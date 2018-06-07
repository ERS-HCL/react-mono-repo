# react-mono-repo

Experiments on setting up a complete mono repo for a react app

## Packages

* Components (directory: components)
    Component library 
* Application (directory: my-app)
    Application (dependent on components)
* Styleguide (directory: styleguide)
    Styleguide (dependent of components)

## Setup

* NPM initialization

```bash
npm install
npm run init
```

* Build the entire app and the styleguide

```bash
npm run build
```

* Run the app and the styleguide

```bash
npm run start
```

* To build and run individual components got into package/<component> and run the same commands as above

## Development Mode

* Start the components library build in development and watch mode

```bash
cd packages/components
npm run build:dev
```

* Open a new terminal and start the app and styleguide as before

```bash
npm run start
```

* Any changes made in the components will be reflected in the app and styleguide
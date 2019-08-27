# Dog Hero: Search Result page MOBILE app

This project was developed as a challenge for Dog Hero Frontend Developer opportunity.
Note it was created for mobile view, so for the better experience use Chrome Developer tools with mobile debugger on.

## Demos
| | |
|:---: |:---:|
|![Home](https://raw.githubusercontent.com/kregina/dog-hero/master/.github/home.gif)|![Storbook and Swagger](https://raw.githubusercontent.com/kregina/dog-hero/master/.github/storybook-swagger.gif)|

# Sumary

- [Features](#features)
- [Technologies](#technologies)
- [Content](#content)
- [Prerequisites](#prerequisites)
- [Installing and running](#installing-and-running)
- [Author](#author)

### Features:

- **General**
  - Mobile first
  - Polished design.
  - Responsive design.
  - Css variables.
  - Nx, a set of Extensible Dev Tools for Monorepos, see more in [Technologies](#technologies).
  - Storybook is an open source tool for developing UI components in isolation, see more in [Technologies](#technologies).
  - Ruby API.
  - Nswag that uses JSON and JSON Schema to describe a RESTful web API.
- **Search Results**
  - List of avaliables hosts.
  - Filter with price range.

#### Technologies

- [Angular](https://angular.io/)
- [Angular CLI](https://cli.angular.io/)
- [Angular Material](https://material.angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rxjs](https://github.com/ReactiveX/rxjs)
- [Sass](http://sass-lang.com/)
- [Nx](https://nx.dev/angular/)
- [Storybook](https://storybook.js.org/)
- [Ruby on Rails](https://rubyonrails.org/)
- [Nswag](https://github.com/RicoSuter/NSwag)

### Prerequisites

To run this project you need:
## For the Frontend
[NodeJs](https://nodejs.org/en/download/)

## For the Backend
[Ruby](https://www.ruby-lang.org/en/) (this project was created with version 2.5.5).

### Installing and running

Clone the project:

```
git clone https://github.com/kregina/dog-hero.git
```
Inside the API folder:
```
bundle install
rails md:migrate
rails md:seed
rails server
```

Inside the WEB folder:

```
npm install
```

Run the Angular app

```
npm start
```

Run the Storybook app

```
npm run storybook
```

## Author

* **Kelly Silva** - [Linkedin](https://www.linkedin.com/in/kregina/), [Github](https://github.com/kregina/) 😺

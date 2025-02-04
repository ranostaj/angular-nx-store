<h1 style="text-align: center;">NX Angular E-commerce Project</h1>

<div style="text-align: center;">
  <p>
    <a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45">
    </a>
    <img src="https://raw.githubusercontent.com/angular/angular/main/adev/src/assets/images/press-kit/angular_icon_gradient.gif" alt="angular-logo" height="45" style="max-width: 100%; display: inline-block;" data-target="animated-image.originalImage">
  </p>
</div>


## About this project

This project is a personal Angular development endeavor aimed at enhancing my skills and knowledge in web application development using Angular framework. I plan to implement various features and functionalities to create a robust and interactive web application.

This project is still under development as Angular evolves, so does the development and features.

As I progress with this project, I aim to explore advanced Angular concepts such as lazy loading, state management with NgRx, and optimizing performance through code splitting.

## Live Demo

[angular-nx-store.vercel.app](https://angular-nx-store.vercel.app/)


## Project Structure

There ae two applications tak can be build and serve indepedently **admin** and **shop**
The rest is then in shared **libs** folder and the structure is similar to this:
```sh
apps/
  |-- admin/
  |-- shop/
libs/
  |-- shared/
       |-- ui/
       |-- util/
  |-- products/
       |-- feature/
            |-- list
            |-- detail
       |-- data/
            |-- services
            |-- store
       |-- ui/
 |-- orders/
        |-- feature/
            |-- list
            |-- detail
        |-- data/
            |-- services
            |-- store
        |-- ui/
        |-- util/
|-- cart/
        |-- feature/
            |-- checkout
            |-- cart
        |-- data/
            |-- services
```
## Run Shop

To run the dev server for your app, use:

```sh
npm run shop:serve
```

To create a production bundle:

```sh
npm run shop:build
```

## Run Admin

To run the dev server for your app, use:

```sh
npm run admin:serve
```

To create a production bundle:

```sh
npm run admin:build
```
 

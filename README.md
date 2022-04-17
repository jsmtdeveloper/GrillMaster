![project-image](https://socialify.git.ci/jsmtdeveloper/GrillMaster/image?font=Bitter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Light)

# 🤞Assessment Grill Master

Grill master is a project to solve the main task of ISolutions's assessment.

This project was generated with Angular CLI version 13.2.3.

## 🤷‍♂️Scope
Help our master barbecue chef to optimize order in which barbecue items are grilled. Since the
space on the grill is limited and different grill items have different sizes, you need to calculate
the optimal schedule for grilling. The aim is to optimize the time for barbecuing the entire
menu. The grill measures 20cm x 30cm. The cooking time is the same for all barbecue items.

## 🚀 Demo


Direct link for a demo of this project deployed with vercel: [https://grill-master.vercel.app/home](https://grill-master.vercel.app/home)


## 🤳 Project Screenshots:
* Home 
* Loading the menus from API 
* List of menus we must to grill
* After grill information rounds 
* See detailed menu grill

<img src="https://user-images.githubusercontent.com/51481240/163711877-46e7e8ca-7d77-43fb-a4b4-33e67b816cce.png" width="300"><img src="https://user-images.githubusercontent.com/51481240/163711907-0561792f-755d-4cb3-b537-e241dfab4e36.png" width="300">
<img src="https://user-images.githubusercontent.com/51481240/163711925-0373acd0-51b8-4394-9d65-ef663f8c11bd.png" width="300">
<img src="https://user-images.githubusercontent.com/51481240/163711934-327f3537-3009-409e-955f-b2d71bf59a4a.png" width="300">
<img src="https://user-images.githubusercontent.com/51481240/163711968-0245ff2c-bc0d-4766-afca-e1cc4f2dc9ff.png" width="300">

## 🧐 Features

Here're some of the project's best features: 
* Help our master barbecue chef to optimize order in which barbecue items are grilled 
* Optimize the time for barbecuing the entire menu 
* Calculate the total rounds and total rounds per menu 
* Show detailed the final grill result per round

## 🛠️ Installation Steps & More!

1\. Installation of all packages of the project. 
Use the package manager [npm](https://docs.npmjs.com/cli/v6/commands/npm-install) to install all you need to run this project. Go to the base path (where the package.json its) and execute the next command

```bash
npm install
```
2\. Run all the tests.
This command will execute all the unit tests than there are in the project. (Using Jest + testing-library)
 
```bash
npm run tests
```
3\. Build.
This command will create a production compilation ready to deploy
 
```bash
ng build
```

4\. Generate a new Documentation version.
After doing some modifications on the code, run the next command to update the documentation 
 
```bash
npm run compodoc
```

## 🗺 Project structure
This is the main source folder where we have the definition of the main module (app-module) and our routing. We can notice than there are three more folders and at the same time, modules: core, pages, shared

![image](https://user-images.githubusercontent.com/51481240/163714266-2ff51a0e-06da-4e60-b32a-ba33f629013a.png)

### 🧠 Core module
Here we have some main data than we will need all around the project/application. We have there the next elements:

* Library: We got some functions than we need. A few elements providers, the functions than checks if an item fits on the grill, functions to push this item to the grill and randomizers functions. If we want, we can extract this folder to a diferent project and use it like a real lib, then we would be able to call it from diferents apps, even different framework/libraies (Angular or React at the same time). Actually that was my initial idea, create a monorepo with those 3 projects (Lib, GrillMasterAngular and GrillMasterReact), but my girlfriend💁🏼‍♀️ wanted to go to the beach... So, It couldn't be!😅

![image](https://user-images.githubusercontent.com/51481240/163714452-4bfaeac6-0a7d-4584-8988-3b0ee9e80552.png)

* Mappers: A few mappers than will help us to transform per example, the response we get from the API to our project interfaces

![image](https://user-images.githubusercontent.com/51481240/163714569-ae61739b-701f-44ae-bb00-f3ae8db45f3f.png)

* Models: Here you can find all our interfaces (separated by kind of interface) and types.

![image](https://user-images.githubusercontent.com/51481240/163714636-5183aa04-0016-486e-88f7-b6a441893cc1.png)

* Services: All our services, also separated by kind (API o Angular/utils services per example)

![image](https://user-images.githubusercontent.com/51481240/163714684-493bfd75-7c53-42dc-ab33-00045a3ca549.png)

## 📄 Pages module

This module has all the pages of our application, everone with his own .html, .scss .spec.ts and .ts files.

![image](https://user-images.githubusercontent.com/51481240/163714743-b4b5ec15-73ec-4148-b55d-cc3f9e9e4ee6.png)

## 📡 Shared module

This module has all the components/controllers, and utils (like pipes) than we want to share all around the project. Usually we will need to feed them with information/data for a correct functionality.

![image](https://user-images.githubusercontent.com/51481240/163714884-556ae297-f466-4428-998d-ce823e895758.png)


## 🌌 Documentation: [https://grill-master-documentation-jsmtdeveloper.vercel.app/](https://grill-master-documentation-jsmtdeveloper.vercel.app/)

This is more or less the most important things of this project's structure. If you want to now more about it, just check the documentation generated with [compodoc's](https://compodoc.app/) help!


## 💻 Built with
Technologies used in the project: 
* TypeScript & JavaScript
* Angular 
* Html 
* Css 
* Compodoc 
* Vercel 
* Github 
* Mini.css 
* Rxjs 
* Jest
* Npm
* Visual Studio Code
* Prettier
* ESLint & TSLint
----
🛡️ This project is Free for all!

💖 Like my work?
I hope you do!

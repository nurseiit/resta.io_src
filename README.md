# Resta.io
Website core / compiled code to be published at https://github.com/restaio/restaio.github.io

## How to edit and 'compile'?

0. If you do not have node (npm) installed, first do so via visiting [NodeJS website](https://nodejs.org).

1. install **meteor-build-client** for npm:
  ```
  npm i -g meteor-build-client
  ```

2. install **meteor**
    * linux / mac:
      ```
      curl https://install.meteor.com/ | sh
      ```
    * windows:
      Please visit [Meteor.com](https://www.meteor.com/install).

3. clone this repo

4. install all npm packages via running this inside the repo:
```
meteor npm i
```
  * you might encounter some warnings about missing packages; if you have such warnings, just follow the rules shown in the output.

5. you might want to check if it works properly on your machine; you can do it via:
```
meteor
```
and opening http://localhost:3000 in your browser.

6. now execute this by changing the **'../folder'** below. ***(warning this command will delete everything in that folder, 
so be sure not to set it like '/home')***
```
meteor-build-client ../folder --path
```
*--path* makes all the paths relative so that you can open it via file:// protocol before hosting it somewhere else.

7. now you can find your index.html and other files in the folder you set in step #6

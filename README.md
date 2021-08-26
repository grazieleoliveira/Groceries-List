<h1 align="center">
  Groceries List
</h1>

<p align="center">
  <a href="https://imgur.com/A3D9hGc"><img width="75%" src="https://i.imgur.com/A3D9hGc.png" title="source: imgur.com" /></a>
</p>
<h4 align="center">React Native application to help supermarket customers with their groceries </h4>

## 📍 About this project
### 📖 Introduction
This is the second project of the Lead Dell mentoring program. My goal with this project is to get a solid React Native foundation so I can build more complex applications in the future.

### ⚙️ Technologies
<ul>
  <li>React Native</li>
  <li>Typescript</li>
</ul>

### ⚙️ Libraries
<ul>
  <li>Redux -> Application state management</li>
  <li>Styled-Components -> Stylization </li>
  <li>React Navigation -> Manage the screen navigation</li>
  <li>react-native-vector-icons -> Application icons </li>
</ul>

### ⚙️ Libraries to increase the productivity during development
<ul>
  <li>Eslint -> Linter tool for identifying and reporting on patterns </li>
  <li>Reactotron -> To debug the app, viewing its current state</li>
  <li>Prettier -> Code formatter </li>
</ul>


## 🏃 Running your application
### Clone the repository
  ```
    git clone https://github.com/grazieleoliveira/Groceries-List
  ```
### Install the dependencies
 ```
  yarn install
 ```
### Start Metro and run your Android emulator
  ```
  npx react-native start
  npx react-native run-android
  ```


## ⚠️ Error: spawn ./gradlew EACCES 
If you are on a MacOS/Linux environment, it's possible you come across this error. You can easily solve it by typing this on the command line:
```chmod 755 android/gradlew```

## ⚠️ @babel/runtime version
When you run the application, the console will prompt you to choose a version of the babel runtime. You can just select **7.15.3** and the application will run without a problem.

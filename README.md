# Travel Tracker
- An interactive travel dashboard where users can book new trips as well as display their past, present, and future trips.

## Table Of Contents
+ [Overview](#overview)
+ [Examples](#examples)
+ [Setup instructions](#setup-instructions)
+ [Learning Goals](#learning-goals)
+ [Future features](#future-features)
+ [Technologies used](#technologies-used)
+ [View Deployed Page](#view-deployed-page)
+ [Contributors](#contributors)
+ [Challenges & Wins](#challenges-and-wins)

## Overview
- This app enables users to view their travel plans in one convenient location. The user can view a dashboard that displays past trips, future bookings, and even allows them to create new bookings from a list of 50 unique locations provided by the _travel agency_. 

## Examples
Travel Tracker in Mobile View (iPhone 5/SE):

![Hnet-image](https://user-images.githubusercontent.com/81891209/128964761-dee25fc7-e476-4951-801b-e97db3108f51.gif)


Travel Tracker in Laptop View (13" Macbook Pro):

![Hnet-image copy](https://user-images.githubusercontent.com/81891209/128965874-c1f6059d-7264-4ec5-bdd2-7981d997e322.gif)

## Setup Instructions
## Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

## Setup

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo. 

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with some `h1` text, Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## Where to Add Your Code

### JavaScript

You have to be very intentional with where you add your feature code. This repo uses a tool called [webpack](https://webpack.js.org/) to combine many JavaScript files into one big file. Webpack enables you to have many, separate JavaScript files to keep your code organized and readable. Webpack expects all of your code files to be in a specific place, or else it doesn't know how to combine them all behind the scenes.

**Create all of your feature code files in the `src` directory.**

Since code is separated into multiple files, you need to use the `import` and `export` syntax to share code across file.

Here is a video that walks through some information about [import and export](https://www.youtube.com/watch?v=_3oSWwapPKQ). There are a lot of resources out there about `import` and `export`, and resources will sometimes call them `ES6 modules`. It's something you will see in React and beyond.

### HTML

Add the HTML you need in the `index.html` file in the `./dist` directory. There is some boilerplate HTML that exists from the start that you can modify.

### CSS (SCSS/SASS)

This project is setup to use SCSS/Sass files by default instead of your regular CSS files. Add your SCSS files in the `src/css` directory. There is a `base.scss` file already there, but you can change this file and add multiple SCSS files in this directory.

This might sound weird, but you need to `import` your SCSS files in the JavaScript entry file (`index.js`) for the styles to be applied to your HTML. The example `base.scss` file has already been imported in the JavaScript entry file as an example.

### Images

Add your image files in the `src/images` directory. Similar to CSS files, you need to `import` image files in the JavaScript entry file (`index.js`). Then go into the HTML and add an `img` element with the `src` attribute pointing to the `images` directory. There is an example in the `index.html` file for you to see.

## How to View Your Code in Action

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `box-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory. 

## Webpack?

If you look in the `package.json` file, you'll see one of the library dependencies called `webpack`. If you're interested in learning more about what Webpack is and how it works behind the scenes, take a look through the [Webpack configuration documentation](https://webpack.js.org/concepts/).


## Using Travel Tracker
- When the app opens, you will be greeted with a welcome card and a button to login. 
- This button takes you to a form where you can input a username and a password.
- You will enter a username of ```'traveler[any number between 1-50]'```. For example ```traveler39```
- Enter the password ```traveler``` to gain access to the app. (Keep in mind both the username and the password should be _all lower case_)
- In the app you will be shown a dashboard that has all of your past, present, and future flights. 
- each flight has a status attribute of either ```pending``` or ```approved``` with a corosponding icon.
- By clicking on the ```book``` tab in the header of the app, you are presented with a dialog box containing a form.
- Fill out each section of the form and click submit to view a new card with that trip and all of its info (the status will be pending)
- If the form is filled out incorrectly (like missing data, or setting a departure date in the past, etc.) you will be prompted to correct your errors and resubmit.
- By clicking the ```upcoming``` tag in the header, you are shown only future trips.
- If there are no upcoming trips, you will see a prompt letting you know.
- If you want to switch users, simply click the change user tab to be presented with the login screen again.

## Learning goals
  + Use OOP to drive the design of the application and the code
  + Work with an API to send and receive data
  + Solidify the code review process
  + Create a robust test suite that thoroughly tests all functionality of a client-side application

## Future features
  + In the near future I will be adding a hamburger dropdown menu in place of the list items at the top of the header. This will also include a filter option for viewing completed trips, and a filter option for viewing pending trips.
  + I would also like to create functionality that allows a user to add a new destination of their own choosing to broaden the range of travel. 

## Technologies used
  + javaScript
  + HTML
  + SCSS
  + MicroModal.js
  + dayjs
  + Mocha
  + Chai
  + Webpack
  + Local Server API (for fetch requests)

## Contributors
  + Mark Cawthray (author)
  + Hannah Hudson (project manager)
  + Justin Anthony (code reviewer)
  + Kevin Hartmann (code reviewer)

## Challenges and Wins
Wins:
  + This project was a culmination of everything that we learned in Mod 2 of Turing and tested our ability to thoughtfully plan how to approach the tasks at hand. The design of our class structures and data flow was entirely up to us, and I felt I was able to make a sensible, easy to follow design in that regard. I was able to create robust testing suites for all of my classes and methods that made building the actual app go by a lot more smoothly.
  + I was also very pleased with the visual layout and design of the app. I purposefully went for a minimalist look, but tried to not make it feel like it was lacking anything important.
Challenges:
  + The most challenging part for me was figuring out the POST requests. It was my first time attempting this solo, and challenged my problem solving abilities. I was able to venture into the backend code base in the API to try to troubleshoot where I was going wrong. To my suprise I was able to mostly understand what was going on in there, despite not knowing the full syntax of the language that it was written in. 
  + The shear amount of work to be done on this project presented a lot of scheduling challenges. It was tricky to balance the project work with study time for the final assessment (not to mention sneaking the occasional meal or walk around the block every now and again!) I really had to rely on my gitHub projects board to keep myself focused and on task. 

  [Return to top](#travel-tracker)


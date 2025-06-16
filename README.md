# NCSC-Static-Frontend
Frontend using scss to create the needed css files

# How does this project work?

Under the scss folder we can find 2 files 

`_variables.scss` which holds all of our global variables such as consistent colors and font sizes and so on 

`styles.scss` this is the main file that we will compile to create our css file

There is also one directory called 

`components` , which holds all the different components styles , this is need to avoid storing all of the different styles in one file during the development stage

Inside this folder is a file called `_index.scss`. 

When creating a new component we must add it to this file e.g

The below line inside the `_index.scss` file will add the styles in the `_calendar.scss` file to our project 
```
@forward 'calendar';
```
Now read the below information regarding the installation of the required software and the process of compiling the scss file to css 


# Requirements

node

npm

sass

## Install sass via npm

```
npm install -g sass 
```

# Compile scss file to css

Navigate to the below directory in your terminal 

```
scss/
```

Then run the below command

```
sass --watch styles.scss:../css/styles.css
```

Now any changes made to the styles.scss will be compiled and added to the styles.css file that is inside the css folder

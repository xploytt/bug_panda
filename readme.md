Website Documentation Introduction This documentation provides an
overview of the website's code structure and functionality. File
Structure The website's code is organized into the following files and
folders:

-   index.html: This HTML file contains the structure and content of the
    website.

-   index.css: This CSS file is responsible for styling the website.

-   app.js: This JavaScript file contains the main logic and
    functionality of the website.

-   scss/: This folder contains the SCSS files used for developing the
    website. HTML Structure The HTML file (index.html) is structured as
    follows:

-   The \<!DOCTYPE html\> declaration specifies the document type and
    version.

-   The

    ```{=html}
    <html>
    ```
    element is the root element of the HTML document.

-   The

    ```{=html}
    <head>
    ```
    element contains meta information and external resources such as CSS
    and JavaScript files.

-   The

    ```{=html}
    <body>
    ```
    element contains the visible content of the website. CSS Styling The
    CSS file (index.css) contains styling rules for various elements of
    the website. It is organized into sections based on the different
    sections of the website, such as the header, home content,
    interests, portfolio, and resume sections. Each section has its own
    set of CSS rules to define the layout, colors, fonts, and other
    visual properties. JavaScript Functionality The website includes a
    JavaScript file named app.js that provides additional functionality.
    The JavaScript code is responsible for handling user interactions
    and dynamic behavior on the website. It includes variable
    declarations, event listeners, helper functions, and function
    execution code. SCSS Development The website was developed using
    SCSS (Sass), a CSS preprocessor. The SCSS files are located in the
    scss/ folder and include the following files:

-   \_base.scss

-   \_components.scss

-   \_variables.scss

-   index.scss Gulp Integration Gulp, a task runner, was implemented to
    process the SCSS files. It automates the compilation of SCSS into
    CSS. The specific configuration and tasks for Gulp may vary
    depending on the project.

To set up Gulp for this project, follow these steps:

1.  Install Gulp globally by running npm install -g gulp in your command
    line.
2.  In the project's root directory, create a gulpfile.js file.
3.  Install the necessary Gulp plugins by running npm install gulp
    gulp-sass --save-dev.
4.  In the gulpfile.js, require the necessary modules and define the
    Gulp tasks. Here's an example: const gulp = require('gulp'); const
    sass = require('gulp-sass')(require('sass'));

function compileSass() { return gulp.src('scss/\*.scss') .pipe(sass())
.pipe(gulp.dest('css')); }

function watchSass() { gulp.watch('scss/\*.scss', compileSass); }

exports.default = gulp.series(compileSass, watchSass);

5.  Save the gulpfile.js and run gulp in your command line to start the
    Gulp tasks. This will compile the SCSS files into CSS and watch for
    changes. Usage To use this website, simply open the index.html file
    in a web browser. The website will load and display the content
    along with the associated styling and functionality. You can
    navigate through different sections using the navigation menu and
    interact with various elements as intended. Conclusion This
    documentation provides an overview of the website's code structure,
    including the HTML structure, CSS styling, JavaScript functionality,
    SCSS development, and Gulp integration. It serves as a guide for
    understanding and using the website effectively.

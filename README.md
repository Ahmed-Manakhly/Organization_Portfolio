1-the normal way to inclode the bootstrap , font-awesome by downloading files then get the fils
    after extracting , we take only those CSS js files for both
    -bootstrap.min.css ,bootstrap.bundle.min.js, and "keeping map js & css for bootstrap on the dir"
    -font-awesome : all.min.css ,all.min.js and no map for font awesome
    keep 3css files and 3 js files on the  same dir
    on head:
    <!-- bootstrap on same dir normal way to includ -->
    <link rel="stylesheet" href="./my-tools/css/bootstrap.min.css">

    <!--  font-awesome on same dir normal way to includ-->
    <link rel="stylesheet" href="./my-tools/css/all.min.css">

    <!-- my stylesheet ,normal way to includ ,without sass-->
    <link rel="stylesheet" href="style.css">

     <!-- google fonts -->
    on body :
    <!-- calling the JS for bootstrap and font awesome on same dir normal way to includ -->
    <!-- for font awesome to rendering as svg -->
    <script src="./my-tools/js/all.min.js"></script>
    <script src="./my-tools/js/bootstrap.bundle.min.js"></script>
------------------------------------------------------------------
2-via CDN
    we just need to copy the CDN for js and CSS and past it on the head and body
----------------------------------------------------------
3-NPM
e:
cd my apps
mkdir project-4
cd project-4
git init
type nul>>readme.md
code .
---------------------------------
open terminal on vs SC "ctrl+ shift + backtick "
---------------------------------
to install node.js
-go to "https://nodejs.org/en/download/" then install 
-on command line type "node --version" or " node -v "
-my v is "v16.16.0"
---------------------------------
on my pro dir  >>> "npm init"
description: of my pro
my name
okay (yes)
so We have created our package with JSON File in the dir //but still empty
----------------------------------------
-with our json pack any "Part: that will appear" we add will be used in the app it's under "dependencies"
-on the ther hand any "tool" will be just used in the app will be under"devDependencies" instead // we need to use --save-dev
-after we add any to our pack like webpack we will bet the node-module folder created &
-package-lock is the expanded file of json pack zip file
if we delete the "node-module folder" then use "npm i , will get the same pack again but with keeping json files
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
    webpack:
    to install webpack "npm i webpack webpack-cli --save-dev"
    -now it's in "devDependencies"
    -now I got the "node-module folder" including the webpack and it can includ others like bootstrap jquery etc...
    --------------------------
    1- creat "index.html" same dir
    2-creat src folder
    3- inside it the "index.js" which is the main script
    4-creat one js more to be used as a module contain one function 
    5-then inmport both in the markup
    ------------------------------
    -if we linked 2 scripts one has a function and the other one use the function which is the file number 1
        you will get error due to the 2 links not ordered correctly , and this is why we have webpack to mange BUDLES & MODULES , in one file
        WHEN WE SWAP THEM THE CODE WILL BE WORKING FINE
    ------------------------------
    creat file called "webpack.config.js" ,and this is to config the webpack tasks and how it read and manage my BUDLES & MODULES, packages rules
    1-module.exports = {}
    2- entry: './src/index.js',
    3-output: {}
        inside it 
        A- filename: 'bundle.js'
        B- path: './dist',
    4-mode: 'none' , right now modw is none but we change it to be devopment to be the full size of files and production to zip files
    5- go to package.json and under scripts add /"build": "webpack"/ 
    6- will start to export the module js inside the main js when it has imported it normally and to let my code works fine so they should be type module
        use export default with the one has the function
        import funname from './modulename.js'; , with the main , use it with ()and export without 
        make them type module script
            it's working normally and when we run " npm run build " still working normally and buld coms with error becaus of :"./dist" is not an absolute path!
            in the config file we add 1st " const path = require('path'); "
            then modify the path with " path: path.resolve(__dirname, 'dist') " to remove the error
            run " npm run build " nd it's compiled successfully and we got dist folder with one file called 'bundle.js'
        the normal module still working but to avoide the issues mentioned and to work with webpack we will just remove 
        any linked script and only link this  'bundle.js' without type="module" // we can rempve dist and we will get it back and we need to bulid with each changes!!
        --and now you can import from the module file without the .js--
    ---------------------------
    we can creat "components" folder in the src folder ,and put the module inside it  ,and of course update the importing url
    change the function to be class and make it button , inside this class render method 
    inside the main inherit an object from this class and use the render method  from the derived
    inside the class of the module inside the render let's creat the button with classname and inerhtml and appendChild
    once we build it will be working and the button is there 
    --THIS IS THE "idea" OF ANY JS FRAMWORK--
    -----------------------------
    for style:
    css:
    Inside the components will creat the button-component style sheet maybe with the same name 
    then will use the class to style it 
    after build nothing happened , unless we link it as a normal style sheet
    to use it by the webpack we need to config
    1- add module: {} inside it we add rules: [] inside {} regx using test method, after matching the css extension
    2-we add use ['style.loader','css.loader']
    3-run " npm i style-loader css-loader --save-dev "
    -after build & remove the link from the html it wasn't work because we have to import it in its component
        import './helloworld.css';
        we have just assigned some styles to the class given to the element and --THIS IS THE "idea" OF ANY CSS FRAMWORK--
    -----------------------------------
    whenever we upgrade our project we need with each added feature updating the name of the bundle js file
    between bundle and .JS WE ADD "-[contenthash]" or ".[contenthash]"
        whenever we work  on the js files and new build it gets a new code after the name but it keeps the old one 
        this is why we need these 2 plugins
        " npm install --save-dev clean-webpack-plugin "
        add it to the config at the top 
        " const { CleanWebpackPlugin } = require('clean-webpack-plugin'); "
        after module and rules add
            plugins: [
            new CleanWebpackPlugin(),
        ]
    ----------
    -- will start to change the none mode to "production" so the size of bundle js decreased from 14.38 KiB to 4.38 KiB
    ---------
        after build  the dist folder cleaned and only the last updated folder but we still need for the 2nd plugin to update the link on the HTML
        with the new name 
        "npm install --save-dev html-webpack-plugin"
        at the top
        HtmlWebpackPlugin = require('html-webpack-plugin');
        add to the plugins: [] : "new HtmlWebpackPlugin({ filename: 'index.html' })"
        now after build we got a new html updated in the dist and with the updated js
        -but everything inside my html was gone , so to solve this we just need to add
        2nd //"new HtmlWebpackPlugin({ filename: 'index.html', template: './index.html' })"
        -we need to remove the original script as it will be not found with the new html as it was renamed
    ----------------
        but we have opened only the original html with live server 
        so we need the last one 
    -----------------------------------------
    "npm i webpack-dev-server --save-dev"
    after plugins we add 
            devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist')
            },
            compress: true,
            open: true,
            port: 5200,
            hot: true,
            historyApiFallback: true,
        }
    then pack.json , add under scripts 
        "dev": "webpack serve"
        --now we do "npm run build" & "npm run dev" to update and open with server
        "npm run dev" dose both together on live changes --to go off ctrl+c then build again to get your files in dist
    ---------------------------------------------------
    before the devserv in the config file we can add "    devtool: 'source-map'," to create a map file with the js
    ------------------------------------------------------------------------------------------
    ------------------------------------------------------------------------------------------
    TS
    es5 >> es6 >> TS , made by MS 2012 it's a superset of ES6
    all browsers currently supported es5 completely
    we will need to transpile from typescript to javascript // and because both of them in the same instruction level:
    we will use transpilation not compilation like sass to css or any other tool compiled
    ----------------------------------------
    we could have a tool that helps us find these bugs before our code runs. That’s what a static type-checker like TypeScript does. Static types systems 
    ------------------------
    run "npm i -g typescript" then we got TS on C:\Users\Administrator\AppData\Roaming\npm\node_modules\typescript
    -as we used -g which is the global flag to install it on the machine globally
    -----------------------------------
    we can create a file .ts then any "js code " inside it  and to run it we need to use node "ts file name " and it's working
    run "node hello.ts" to run the code direct with js
    run "tsc hello.ts" to transpile the file.ts to file.js ---
    --- if not working
        set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
        Get-ExecutionPolicy
        tsc --init
            Created a new tsconfig.json with
        "tsc hello.ts" it's working now
    no run "node hello.js" for the generated js file
    -------------------------------------------
    run "tsc -w hello.ts" to start transpilation and modify the js on real time 
    ------------------------------------------------
    js doesn't allow you to identify the type of var , but with any other language it's monday , so TS provide you the option - to identify or no
    +some additional OOP features not exited in JS
    +catch errors before the run time
    +great intelligence assistant with coding
    ---nay valid JS code is also TS code --  browser will not understand JS code without transpilation to JS code 
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
BS, FA, GF, & mystyle to override >> with npm

then use "npm install bootstrap --save" to include bootstrap in your package json file
--then normally linke the files from the mode-module file path
--dist >> bootstrap.css dist >> bundle.js or bundle.main.js ///
-------------------------------
then run "npm i  @popperjs/core --save"
--then it's listed on the     "dependencies": {}
-----------------------------------------------
go to "https://fontawesome.com/docs/web/setup/packages" then run "npm install --save @fortawesome/fontawesome-free"
-included fontawesome in your package json file
----------------------------------
bootstrab grid:
bootstrap uses the concept of grid system and it provides you 12 columns as units to get responsive with any screen starting with the concept of "mobile first"
-----
we can refer back to the documentation to find the effect of each bootstrap class and the concept of classes definitions
also we customizing the bootstrap as we need







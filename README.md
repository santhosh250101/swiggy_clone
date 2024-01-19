# NPM

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

##

    EPISODE 1:

    1.npm init
    => generates package.json which is configuration for npm

    2. Bundler(webpack, parcel,vite)
    =>packages our app so it becomes
    production grade.

    3.install parcel
        npm install -D parcel
        Dev depe:
        require only in development
        normal depe:
        require in prodcution as well

        here parcel is used in development to minify and produce production build that is why we install it as dev dependency

    4. Syntax of version in package.json
        Major.Minor.Patch

        Tilde (~) notation:
        The tilde (~) notation is employed to match the latest patch version while freezing the major and minor versions

        Example: The ~1.2.0 will update all the future patch updates. We have to write just ~1.2.0 and all the next patch update dependencies. For example, 1.2.1, 1.2.2, 1.2.5……………1.2.x.

        Caret (^) notation:
        It automatically updates both minor and patch update

        Example: The ^1.2.4 will update all the future Minor and patch updates, for example, ^1.2.4 will automatically change the dependency to 1.x.x if any update occurs

    5. what is package-lock.json?

        it keeps tracks of exact version installed
        suppose in package.json we gave ~2.8.0
        after some days we got latest version say 2.8.4 now package-lock.json has 2.8.4 and package.json has ~2.8.0 only.


    6. integrity in package-lock.json
        // TODO: know more abt this.

    7. node_modules conists of code that is     fetched by npm

    8. should we commit package.json and package-lock.json to git?
        yes, if we have package and pakcage-lock.json we can create node_modules

        just do npm install, it will install node_modules based on package and package-lock.json

##

##

    EPISODE 2
    1.npx parcel index.html
    npx means execute, we are execute parcel by building index.html as source and host on server(1234)

    2.npm install react
      npm install react-dom

    3. in script tag we mentioned as module, if not we cannot use import keyword, so we are telling browser to read it as module instead of normal script file

    4. npx parcel build index.html to get prod build
        -> in dist folder we have build


##

##

    parcel (TODO: read documentation)
    1.dev build
    2. hmr (file watching algo)
    3.local server
    4.Image optimization
    5.Minification
    6.Bundling
    7.Compressing
    8.Consistent Hashing
    9.Code splitting (TODO:)
    10.Differential bundling - support older    browser
    11. we can host on https as well
    12. Tree shanking - remove unused code
    13. Different dev and prod bundle
    14.

##

##

Episode 3

    TODO: know more abt babel.
    1. JSX and react both are different
    2. JSX is not html, it is html like syntax
    3. js engine doesn't understand jsx, but how it is working. here parcel is taking care how?
        -> jsx code is transpiled before it reached js engine.parcel gives this tranpilation responsibility to babel.
    4. basically babel is a js compiler
    5. here babel is converting jsx to react code
        i.e jsx->React.createEleemnt()

    6. jsx attributes are camelCase like(className)
    7. jsx takes care of cross site scripting as well, beacause jsx sanitizes the data.
    8.

##

##

EPISODE 4
config driven ui
-> website is driven by data i.e. config

##


## 
EPISODE 5

    Reconciliation Algorithm (React Fibre)
        React has virtual dom which is react way of 
        representation of actual DOM

        DIFF Algo:
        it finds diff between virtual dom and actual dom


        TODO:
            know abt react reconciliation.
            know how react fibre works and how it updates the dom optimally.


##
# Zoom+ Events Demo App [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The is a demonstration of a NodeJS server that consumes data from a given URL and produces the rendered web page output below. The URL to use returns a JSON array of events.

### Project Setup
###### (Not including the dev environment)

1. In Terminal Run

	`sudo git clone git@bitbucket.org:jeremykenedy/zoom-events.git zoom-events`

2. From the projects root run `sudo npm install`

3. From the projects root run `bower update`

4. From the projects root run `gulp` --OK if this step fails as the assets are part of the repo.

### Usage
First, install grunt if you don't already have it installed:

```
npm install -g grunt-cli
```

###### Start APP Option 1
Start the application via terminal with:

```
node server.js
```

###### Start APP Option 2
Then, to start the application via terminal with:

```
grunt
```

You should then be able to navigate to [http://localhost:3000/](http://localhost:3000/).

You should also be able to navigate to [http://192.168.X.XXX:3000/](http://192.168.X.XXX:3000/), with X.XXX being your local dev ip address.

## Documenations

| Libraries/Packages |
| :------------ |
| Uses [Node.js](https://nodejs.org/en/) |
| Uses [NPM](https://www.npmjs.com/) |
| Uses [Bower.io](http://bower.io/)|
| Uses [GRUNT](http://gruntjs.com/) |
| Uses [HTMLing](https://github.com/codemix/htmling) |
| Uses [express.js](expressjs.com) |
| Uses [polymer.js](http://polymer-project.org/) |
| Uses [jQuery 2.1.1](https://jquery.com/) |
| Uses [Bootstrap 3.3.6](3.3.6) |
| Uses [REQUEST](https://github.com/request/request) |
| Uses [json-parse-stream](https://github.com/chrisdickinson/json-parse-stream) |
| Uses [addtocalendar](http://addtocalendar.com/) |

## License

2016 [Jeremy Kenedy](http://jeremykenedy.com) - MIT, see [LICENSE.md](LICENSE.md).

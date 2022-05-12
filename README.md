# image-processing-API
An image processing API that resizes and saves images to user specifications when visiting a URL

Start coding by: Nhu Y Ho 

- Clone this repo : https://github.com/nhuyho/image-processing-API.git;
- Remove git remote
- Add new git remote to new service repo
- Update project name at (package.json, newrelic, JenkinsFile,...)

## Dependencies 

To install the dependencies for this project, run the following command: 
```
npm install
```

## Build and run the server
After installing the dependencies, run the following command to build typescript into javascript and save them in build folder:

```
npm run build
```

Start the Server:
```
npm start
```
This command will run the server  on port 3000. 

## Testing
```
npm run test

## API Endpoints 

This project an endpoint to resize image by user.



HTTP method: GET. 

#### Sample request:
```
http://localhost:3000/images?file=santamonica.jpg&width=400&height=700

## References

1. [Node.js Documentation](https://nodejs.org/docs/latest-v12.x/api/). 
2. [Express Documentation](https://expressjs.com/en/5x/api.html). 
3. [Resize API](https://sharp.pixelplumbing.com/api-resize).
4. [Jasmine Documentation](https://jasmine.github.io/).

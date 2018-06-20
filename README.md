# flyacts-angular2-swagger-apiclient-generator
Angular 2 API client generator from swagger json

# Description
This package generates a angular2 typescript class from a swagger v2.0 specification file. The code is generated using mustache templates.

Updated to work with the release version of Angular2

# How to get it working

## Installation
1. get it from github `git clone https://github.com/GroupCDG/angular2-swagger-client-generator`
1. `cd flyacts-angular2-swagger-client-generator`
1. `npm install`
1. `npm run build`

Add it to your project:
1. add `"flyacts-angular2-swagger-client-generator": "github:GroupCDG/angular2-swagger-client-generator#v0.0.45",` to your `devDependancies`.

## Usage

From commandline run:
```
a2apigen -s [yopur/path/to/swagger.json]
```

or
```
a2apigen -u [url/of/your/swagger.json]
```

## Example usage:

This command will generate API client described in swagger.json file to ./out folder
```
a2apigen -s .\tests\apis\swagger.json -o ./out
```

or from repository directory run:
```
node ./src/main -s .\tests\apis\swagger.json -o ./out
```

##Note:
This project was inspired by:

[swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen) project


##Note: This project is originally Licensed under the Apache License, Version 2.0 (the "License");
Other than few js files where modification comments are already added, below files are not original and are modified by CDG.
/angular2-swagger-client-generator/templates/angular2-model-enum.mustache
/angular2-swagger-client-generator/templates/angular2-model.mustache
/angular2-swagger-client-generator/templates/angular2-models-export.mustache
/angular2-swagger-client-generator/templates/angular2-service.mustache
/angular2-swagger-client-generator/package.json
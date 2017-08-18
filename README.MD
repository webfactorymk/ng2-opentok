# ng2-opentok

## Description

This library is an angular 2 wrapper in typescript of [opentok.js library(web)](https://tokbox.com/developer/sdks/js/). Full description of the opentok platform can be found [here](https://tokbox.com/developer/guides/basics/).
It is still in beta version, so any contribution is always welcome.

## Documentation

The documentation for opentok.js can be found [here](https://tokbox.com/developer/sdks/js) and used as a reference when using this library.

Here is a [wiki](https://github.com/webfactorymk/ng2-opentok/wiki/Opentok-service) with description of the methods provided by in this library.

## Installation
To install this library, run:

```bash
$ npm install ng2-opentok --save
```
## Use
This library should be used as described in the official documentation for [Opentok](). This means you can follow their tutorials for creating a backend server, and use the new service and classes available in this library. The prerequirements stay the same though.

#### Prerequirements
To use this library you need to have:
* A valid TokBox account — if you don't have one, you can sign up for a free trial
* A webcam and microphone
* Google Chrome, Firefox or another supported browser
* A local web server — if you don't already have one, try setting up a SimpleHTTPServer using Python or http-server using Node.js.

[Basic video chat tutorial from opentok](https://tokbox.com/developer/tutorials/web/basic-video-chat/)


#### Authentication prerequirements
In order to use the library OpenTok, the client will need to have some authentication credentials — an API Key.
The API key can be obtained from the valid [TokBox Account](https://id.tokbox.com/login?response_type=code&redirect_uri=https%3A%2F%2Ftokbox.com%2Faccount%2Fauth%2Fprovider%2Fcallback&state=eyJyZWRpcmVjdCI6Ii8ifQ%3D%3D&client_id=acountportalprod).

Use the [DEMO](https://github.com/webfactorymk/ng2-opentok-demo) project and the [ng2-opentok documentation](https://github.com/webfactorymk/ng2-opentok/wiki/Opentok-service) to see how the library is used.
After you have read the basic tutorial and obtained an api key, you can add to your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import Opentok library
import {OpentokModule} from "ng2-opentok/dist/opentok.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Add you opentok module here with the api key for opentok
    OpentokModule.forRoot({apiKey: "your-api-key-here"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you have to add the actual opentok.js library and it's css file in the scripts section in your index.html


```xml
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>OpentokNg2Demo</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- YOUR OPENTOK CSS AND JS go here -->
  <link rel='stylesheet' href='https://static.opentok.com/webrtc/v2.10.0/css/TB.min.css'>
  <script src='https://static.opentok.com/v2/js/opentok.min.js'></script>
  <!-- / YOUR OPENTOK CSS AND JS go here -->

</head>
<body>
  <app-root></app-root>
</body>
</html>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```


## Contribution
If you have any problems with pull request and want to contribute, contact [me](mailto:snezhana.dichevska@webfactory.mk)


## License

MIT © [WF | Snezhana Dichevska](mailto:snezhana.dichevska@webfactory.mk)

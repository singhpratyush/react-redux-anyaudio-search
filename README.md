# AnyAudio Search Results

An app made to learn about `React-Redux` architecture using [AnyAudio](http://anyaudio.in/)'s API.

[![Code Climate](https://codeclimate.com/github/singhpratyush/react-redux-anyaudio-search/badges/gpa.svg)](https://codeclimate.com/github/singhpratyush/react-redux-anyaudio-search)
## Dependencies

* `node`
* `yarn`

Install `yarn` related dependencies - 
```bash
yarn install
```

## Running

* Get `AnyAudio` server code if you can, otherwise wait until we make the repository public.
* Since `AnyAudio`'s main server doesn't allows cross site requests, we have to enable them in a local copy of the server for testing purposes. There are many ways to do it, one of them is using `flask-cors`  
    ```
    pip install flask-cors
    ```
* Add `@flask_cors.cross_origin()` decorator to concerned endpoints (e.g. `/api/v1/search`) -
    ```python
    from flask_cors import cross_origin
    
    @cross_origin()
    def search():
        ...
    ```
* Start `AnyAudio` server (if you didn't quit on first step, you know what to do now).
* Start `React` app -   
    ```
    yarn dev
    ```
* Go to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) on a browser.

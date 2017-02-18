# AnyAudio Search Results

An app made to learn about `React-Redux` architecture using [AnyAudio](http://anyaudio.in/)'s API.

## Dependencies

* `node`
* `yarn`

Install `yarn` related dependencies - 
```bash
yarn install
```

## Running

* Get `AnyAudio` server code if you can, otherwise wait until we make the repository public.
* Install `flask-cors`  
    ```bash
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
    ```bash
    yarn dev
    ```
* Goto [http://127.0.0.1:8080/](http://127.0.0.1:8080/) on a browser.
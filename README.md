# Built-in Modules

This project is a personal reference guide to Python's built-in modules.
Provides concise descriptions, practical usages, and examples for various functions and modules that come pre-installed with Python.

In this project, you'll find:

- Documentation for each built-in module
- Practical examples demonstrating how to use each module
- Jupyter snippets for hands-on understanding

This project is primarily for my personal use, but I've made it public in the hope that others might find it useful as well.

You can view the live site on [GitHub Pages](https://E7Ab8B.github.io/built-in-modules-py).

## Running Locally

To run the project locally, you'll need to use one of the following Docker Compose files:

### docker-compose.yaml

This is the main Docker Compose file that sets up the service for the application.

```sh
docker-compose up
```

### docker-compose.live.yaml

This file is used for setting up live reloading of the documentation. It's useful when you want to see your changes reflected immediately.

```sh
docker-compose -f docker-compose.live.yaml up
```

The documentation will be served on `localhost:8000`.

## GitHub Pages

The documentation is automatically built and deployed to GitHub Pages on every push to the main branch.  
You can access the GitHub Pages site at <https://E7Ab8B.github.io/built-in-modules-py>.

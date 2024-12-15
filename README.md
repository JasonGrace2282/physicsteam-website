# TJ Physics Team Website
This is a rewrite of the website in [Hugo](https://gohugo.io/),
to make it easier to maintain and develop.

CI/CD will push a built copy onto branch `production`, which is what is running on
the actual website.

## Developing
First install `npm`, `git` and `Hugo`. Then, to install tailwind, run
```
npm install
```
To start working on the site, run the following commands in two different terminals:

```
npx tailwindcss -i ./static/css/input.css -o ./static/dist/output.css --watch
hugo server -D
```

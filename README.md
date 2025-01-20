# TJ Physics Team Website
This is a rewrite of the website in [Hugo](https://gohugo.io/),
to make it easier to maintain and develop.

CI/CD will push a built copy onto branch `production`, which is what is running on
the actual website.

If you're unfamiliar with Hugo, check out [their docs](https://gohugo.io/documentation/).
Also check out [this blog post](https://www.jakewiesler.com/blog/hugo-directory-structure) explaining the directory structure Hugo expects.

## Developing
First [install `git`](https://git-scm.com/downloads) and clone the repository:
```
git clone https://github.com/tjphysicsteam/physicsteam-website
```
After that, [install Docker compose](https://docs.docker.com/compose/install/). To build
the dependencies, run
```
docker compose build
```
Finally, to start working on the site run
```
docker compose up
```
and visit http://127.0.0.1:1313/

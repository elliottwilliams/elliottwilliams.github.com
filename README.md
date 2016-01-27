elliottwilliams.github.com
==========================

In which I tell the world who I am, at http://elliottwillia.ms.

Building
--------

* Node ~0.10 required
* `npm install`
* `npm install -g docpad`
* `docpad run` to start live server
    * alternatively, `docpad generate` to build the site in the `out/` directory

Pushing
-------

Since GitHub pages will only server the root directory of this repo's `master` branch,
I use a separate branch `project` to store the source code that generates this site.
`master` only contains the generated site.

To push new commits:

    git push origin project

To re-deploy the site:

- using the [ghpages][] plugin: `docpad deploy-ghpages --env static`
- using a manual subtree push: `git subtree push --prefix out origin master`

[ghpages]: https://github.com/docpad/docpad-plugin-ghpages

elliottwilliams.github.com
==========================

In which I tell the world who I am, at http://elliottwillia.ms.

Building
--------

* Node ~0.10 required
* `npm install`
* `docpad run` to start live server

Pushing
-------

Since GitHub pages will only server the root directory of this repo's `master` branch,
I use a separate branch `project` to store the source code that generates this site.
`master` only contains the generated site.

To push new commits:

    git push origin project

To re-deploy the site:

    git subtree push --prefix out origin master

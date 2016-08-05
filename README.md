#Landing for summer campaign
To run locally:
<br>
requirements:
- nodejs
- npm
- bower
- grunt

to install dependencies, run:
<pre> 
<code>
    npm install;
    bower install;
    
</code>
</pre>

Then run grunt to compile files and local server, run:

<code>
    grunt
</code>

To push dist folder to 'gh-pages' branch, add unversioned files, commid changes, push changes, then run command:

<code>
    grunt ghp
</code>

that will compile all the files, and push changest under the 'gh-pages' branch, then the frontend layout can be automatically visible from:
https://%github-user%.github.io/%repo%/
<br>
f.ex: https://kurjoz.github.io/summer-campaign/

##Folder structure:

src: source files, including less files for components, js files for components, images, fonts.

    - src
    -- bower_components
    -- css
    -- im
    -- js
    -- less
    -- index.html

dist: complied from src folder.


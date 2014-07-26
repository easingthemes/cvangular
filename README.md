cvangular
=========

yo angular

-------------------------------------------
Prepare
___________________________________________

--Check dependencies, and update to latest
--Ruby, Sass, Compass, NodeJs, Git

sudo gem install compass

--NODEJS update
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

--node modules - globall
sudo npm install -g yo
sudo npm install -g grunt-cli
sudo npm install -g bower
sudo npm install -g karma
sudo npm install -g karma-cli

-------------------------------------------
Project 'cvangular'
___________________________________________

mkdir cvangular && cd $_

sudo npm install -g generator-angular

yo angular cvangular
***lot of errors for bower and npm, not yo.

--add description, name, repo etc. in package.json
--change deprecated modules, grunt-ng-annotate

sudo npm install grunt-ng-annotate

* sudo npm install generator-angular //local module for some errors

// Run npm and bower again if you got errors

sudo npm install
bower install //no sudo here

-------------------------------------------
Testing
___________________________________________

grunt serve //ok
grunt test //karma error

npm install grunt-karma --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install karma-jasmine --save-dev
sudo npm install -g phantomjs
sudo npm install phantomjs

grunt test //ok

-------------------------------------------
Git
___________________________________________

git config --global user.name "Your Name"
git config --global user.email "email@domain.com"

git init
git remote add upstream https://github.com/easingthemes/cvangular.git
git remote -v

* git add .
* git commit -m "commit message"
** git commit -a
* git push upstream master
* git pull upstream master

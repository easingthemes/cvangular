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

sudo npm install // sudo if you got permission errors
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

// DEVELOPE ...... FINISH, BUILD
grunt build
//resolve errors
sudo npm install grunt-ngmin --save-dev

grunt build
//Now we got dist folder for our app

-------------------------------------------
GitHub
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

#SSH GitHub
#copy locall key content
sudo apt-get install xclip
xclip -sel clip < ~/.ssh/id_rsa.pub
#Add ssh key to GitHub and paste this content
ssh -T git@github.com

git remote set-url upstream git@github.com:easingthemes/cvangular.git
-------------------------------------------
Dreamhost
___________________________________________

#locally
ssh-keygen -t rsa
ssh-copy-id -i ~/.ssh/id_rsa.pub user@frontenddot.com

ssh user@frontenddot.com

#remote
#Create subdomain for app and point it to 'dist' folder
#cvangular-dev.frontenddot.com --> cvangular-dev.frontenddot.com/dist

#put all 'gits' in git folder
cd git 
mkdir cvangular-dev.git && cd cvangular-dev.git
git init --bare

#create hooks file ()
vi hooks/post-receive
# Enter the code in this file and save + exit:
--start of file
#!/bin/sh
git --work-tree=/home/user/cvangular-dev.frontenddot.com --git-dir=/home/user/git/cvangular-dev.git checkout -f
---end of file
chmod +x hooks/post-receive
exit

#locally
git remote add dev ssh://user@frontenddot.com/~/git/cvangular-dev.git
git push dev master
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:richard1230/Vue-UI-website.git &&
git push -f -u origin master &&
cd ..
echo https://richard1230.github.io/Vue-UI-website/index.html#/

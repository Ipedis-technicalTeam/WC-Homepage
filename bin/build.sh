# npm run icons
# npm run dist

# gulp build-icons --prod

rm -rf dist && webpack --config webpack.prod.js

cd dist
zip -r deploy.zip ./*
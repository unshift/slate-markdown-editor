#!/usr/bin/env bash
git add . 
git commit -am 'fix(pencil): update'
babel src/ -d lib/ --ignore src/plugins/packages/
echo 'export default []' > lib/plugins/dev.js
export $(cat .env | xargs) && semantic-release --debug --no-ci
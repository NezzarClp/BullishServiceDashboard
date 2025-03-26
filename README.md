# Setup
brew install nvm
brew install yarn
nvm install 20
nvm use 20

# Server
cd server
yarn
yarn start


## Optional: Run some manual tests
curl localhost:4001/api/services -X POST -H "Content-Type: application/json" -d '{"id":"1","name":"2","url":"https://123.com","status":"UP"}' 
curl localhost:4001/api/services

# Client
cd client
yarn
yarn start

Dashboard should be online at http://localhost:3000
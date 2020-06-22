# IP Displayer API

## Backstory

This project came into fruition when one of the services I use to check IP addresses went bad due to an expired SSL certificate. Instead of waiting for the service provider to redeploy a valid certificate, I decided it would be a good time to write my own.

The purpose of this API is to simply see the IP address of the incoming user. While this alone is not special, the benefit of this API was that CORS was enabled. Since the script allows cross-origin requests, it allowed me to deploy JavaScript scripts that can fetch a users IP address and do whatever they want. This is very useful when your current hosting provider (like Netlify) either does not allow this or makes it difficult to easily.

## Deployment

### NodeJS

To deploy to a server with NodeJS, clone a copy of this repo, navigate to the folder using Terminal/CMD, and then type

```
npm install
```

This should install all the dependancies. So now you can run

```
npm start
```

And the server will be live.

### Docker

By far the easiest way is to deploy a docker container, which this repo has. Assuming you have Docker installed, navigate to the folder using Terminal/CMD, and then type:
```
docker build -t ipdisplayer .
```
Then, after its built, run
```
docker container run ipdisplayer
```

### Heroku & GitHub Actions

You can deploy a copy of this to Heroku using GitHub Actions. You will need: 

* A Heroku Account
* A Github Account
* Ability to use Github Actions

1. Login to your Heroku account and create an app you wish to deploy the server to
2. Head over to https://dashboard.heroku.com/account and make a copy of your API key
3. Make a copy of what your app name is called. For example, if you created an app called "ipaddress-displayer", write that down.
4. Go to your GitHub Repo's Settings and select "Secrets" from the left navigation panel
5. Create a new secret and called it "HEROKU_API_KEY" and paste your API key in the box (make sure there are no spaces or whitelines)
6. Create another secret and call it "HEROKU_APP_NAME" and paste that into the box (make sure there are no spaces or whitelines)
7. Rename the ".github-rename" folder in this repo to ".github"
8. Deploy

Assuming your APP_NAME and API_KEYs are correct, GitHub will deploy your container to Heroku every time you make a push & pull request.

## Live Demo

If you cannot deploy your own, there is a live demo but keep in mind that uptime is not garunteed and this may go down at any time.

[![Live Demo](https://i.imgur.com/iK8j7Z6.png)](https://redirct.page.link/IPDisplayerLiveDemo)

Or by typing/copying and pasting:
```
https://redirct.page.link/IPDisplayerLiveDemo
```
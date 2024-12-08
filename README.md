# NetflixGPT
- create react app
- configured Tailwind css
- react router dom
-Header
-Login form
-validate form
-authentication
 -firebase
  -make project
  -authenticate- sign in using email/password
  -deploy
  #commands
    -npm i firebase
    - npm install -g firebase-tools
    -firebase login
      -set up the project
    -firebase init and selecting host
    -npm run build
    -firebase deploy
    - create signup user account
  -npm i -D @reduxjs/toolkit
  -redux store with userSlice
   -npm i react-redux

-fixing some bugs
 -navigation page - go to browse only after login
                  - no access to /browse if user is not logged in

-tmdb
 -login -> edit profile -> api -> register your app  -> find api key and access token
 -> get data from documentation  - movieslisting    -now playing

--operate in incognito to avoid extension bugs
--In Browse Page --
-maincontainer
 - videobackground
 - videotitle
-secondaryco tainer
 -movielist*n
  -cards*n

-custom hooks for nowplaying
-create movieSlice
-update store with movies Data
-planning for mainContainer and secondary container
-fetch data for trailer video
-update store with tariler video data
-embedded the youtube video and make it autoplay mute
-tailwind to make it look awesome!


...
#Features
-Login/ signup
  - Sign in/ sign up
  - redirect to browse page
- Browse(after authentication)
 -Header
  - Main movie
    - trailer in background
    - title and description
    - movie suggestions
     - movielists * N
-NetflixGPT
 - search bar
- movie suggestions

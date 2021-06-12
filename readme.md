# 🦸‍♀️ MarvelSpot App 
## 📚 About the project


MarvelSpot was born to provide an easy way to retrieve and search your favorite comics.
It is a Mobile solution, developed in React Native wich communicates with Marvel's Comics collection API.

  ## 🌐  Technologies

-   [React Native](https://reactnative.dev/)
-   [Yarn](https://yarnpkg.com/)
-   [Typescript](https://www.typescriptlang.org)
-   [Jest](https://jestjs.io)
-   [Lottie](https://lottiefiles.com)

## ✔️ Resources

  
+ [Check Figma's project link](https://www.figma.com/file/OB1kweqCeHAhvru7QHoIE8/Marvel)

+ [Download the Android version](https://install.appcenter.ms/users/arthur.pasqualon/apps/marvelspot-1/distribution_groups/public%20link)

  

##  📱Features

+ Onboarding.

+ Select Character.

+ Search Characters.

+ Explore Character's Comics.

+ Check the Comic's price, issue number, cover and title.

+ Check Comic's details on the Marvel website.

+ Explore nearby bookstores.

+ Add Comic's to your favorite list (Soon).


## 💯 Installation

  
Asuming that you already have the basic react native setup on your machine.

  

+ ```git clone ${{repo}}```

+ ```yarn ```

+ ```cd ios && pod install ```

+ create .env file in the root of the project and add the following variables:

	+ ``` API_URL=https://gateway.marvel.com:443/v1/public/ ```

	+ ``` API_AUTH=ts=${YOUR_TIMESTAMP}&apikey=${YOUR_API_KEY}&hash=${YOUR_HASH} ```

	+ ``` MAPS_KEY=${YOUR_GOOGLE_MAPS_KEY} ```
+ run the app:

+ ``` react-native run-android ``` or ``` react native run-ios ```
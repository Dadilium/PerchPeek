PerchPeek Challenge
=======
_Time spent on the challenge_: about 25 hours

Versions used locally
-----------
**Node**: v17.4.0
**Yarn**: 1.22.10

Useful commands
-----------
* `yarn lint`: runs ESlint
* `yarn test`: runs the unit tests

How to run android
-----------
1. Make sure the pre-requirements are met by following the instructions [here](https://reactnative.dev/docs/environment-setup)
2. Enter the command `yarn` at the root of the project to install packages
3. (Recommended only) Make sure to have an emulator launched
4. Run the command `npx react-native run-android`

**Troubleshooting**:
* If the error `java.lang.OutOfMemoryError (no error message)` appears while trying to run the app, please access the `gradle.properties` file and uncomment the line 13 which contains the variable `org.gradle.jvmargs`.
* It has been noticed that the map may not display itself on certain emulator (due to google services not being setup on the emulator), if it happens, try to launch the app on a different emulator or on a hardware. Issue happened on Android emulator API 30 & Android 11.0.

**Note**:  
* If using a hardware, make sure to check that your device is connected to the internet, it will avoid you spending 30 minutes trying to debug an issue that doesn't exist. (that was the little anecdote of the document)

How to run iOS
-----------
1. Make sure the pre-requirements are met by following the instructions [here](https://reactnative.dev/docs/environment-setup)
2. Enter the command `yarn` from the root of the project to install packages
3. Enter the command `cd ios/ && pod install && cd ../` from the root of the project to install the pod dependencies
4. Open Xcode to launch the application.
  * Alternatively, you can run the application by running the following command: `npx react-native run-ios`

**Note**: 
* By running the application using Xcode, you may be required to clean the build folder
* Make sure that the project is located on a folder which `yarn` & `pod install` can have access.

Difficulties
-----------
**Note**: This was the most difficult challenge I have ever had to complete for an interview process, but also the most interesting.

* _Shared Element Transition_: I had never used this transition in the past and didn't know its name. It resulted in me, going to the wrong direction and trying to reproduce the 'expand' effect manually. I spent a large amount of time on this part for me to realise that it is an 'official' navigation transition. I restructured my code and implemented the library.
* _Testing Library_: I am not going to lie, writting tests is probably my weakest spot. Even thought I am confortable to write simple tests, to perfect this challenge requested a better test writting skills.

Incomplete parts
-----------
* _Test the navigation between the two views_: Due to some issues I faced with the library `react-navigation-shared-element`, I decided not to render the whole app for tests, but only the first view. By not having `StackNavigator` in my rendered object, I ommited this test.
* _Test scrollview ScrollTo function_: I was unable to locate the Scrollview offset position to programmatically check if the scrollview had scrolled or not when a marker is being selected.
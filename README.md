<h1>About MobileFirst Cordova Kendo UI TabStrip Template </h1>

This is a template for developing Cordova based Hybrid Mobile Application using IBM MobileFirst platform.
This template provides Kendo UI Mobile control set as the UI layer for your cordova application. 

When you use this template it creates a cordova application and includes Kendo UI framework in your application. As
part of the app you will get a Home, Settigs and Contacts screen.  The navigation will be based on TabStrip. You can use this 
as a starting point for your development. After creating your app using this 
template, you can add additional screens as per your needs.

<div align=center>
    <img  height=300 src="http://content.screencast.com/users/Kashyapa/folders/TACO-CLI-ScreenShots/media/6e73ccbd-a260-4817-8e82-3522aaeb4204/KendoUITabStrip.png" />
</div>

You can know more about Kendo UI Mobile Controls here: http://www.telerik.com/kendo-ui/open-source-core

<h1>Usage Instruction:</h1>

<h2>Step 1: Clone this repo</h2>

First, clone this repo on your system. Lets say c:\templates\cordova-kendoui-blank-mfp

<blockquote>git clone https://github.com/lohithgn/cordova-kendoui-tabstrip-mfp.git</blockquote>

Make a note of the folder where you will clone it. This folder will be used to provide the Kendo UI template for MFP Cordova Create command.

<h2>Step 2: Create MFP Cordova Application</h2>

Next, create a MFP Cordova application by running the following command

<blockquote>mfp cordova create AppName -p android,ios -t &lt;Local Path to Cordova Kendo UI Blank MFP Template&gt;</blockquote>

Note: Local path to Cordova Kendo UI Blank MFP template is the folder where you have cloned this repo.

<h2>Step 3: Run NPM Commands</h2>

After step 2, open a command prompt (or terminal) and perform the following commands.

<blockquote>
npm install
<br>
gulp
</blockquote> 

<h2>Step 4: Run the App</h2>

Now, we are ready to run the app. You can preview your app by using the following command

<blockquote>
mfp cordova preview
</blockquote>

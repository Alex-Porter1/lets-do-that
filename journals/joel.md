## September 12th, 2022

Today I Worked On:

* Bug fixing continuing for CORS issues. Have found that it works locally, but not in deployed state. Tried several work-arounds but ultimately they were not successful. Per advice of Andrew, switched to making the API call from the front-end to the back-end and found a Yelp API github that allows us to bypass the CORS issues. So that issue is fixed.
* Also changed up the navbar so it now links to the homepage rather than the activity list to enhance user experience by not showing a default category if they happen to navigate to that page without selecting one from the homepage.

## September 12th, 2022

Today I Worked On:

* Continued working through deployment - got it to a state where it shows up on gitlab.
* Currently working to fix some CORS issues for the Yelp API calls.

## September 9th, 2022

Today I Worked On:

* Started deployment yaml file. Ran through this with the team, building the file from the ground up. Tested deployment but had some errors.

## September 8th, 2022

Today I Worked On:

* Worked on finishing up the main page and testing out it's functionality.
* Also started researching deployment and what needs to be done to build out our yaml file.

## September 7th, 2022

Today I Worked On:

* Updated main page component to display category list and connected it to the list page using props.
* Updated list page to show selected category. Added result quantity to show once user selects a location.


## September 6th, 2022

Today I Worked On:

* Worked on the main page react component, adding in category list and some text animation.
* Updated the logo link to go to the main page.

## September 2nd, 2022

Today I Worked On:

* Improved code readability and made some changes to update the CSS and styles to match up together among the various pages.

## September 1st, 2022

Today I Worked On:

* Added the logo to the list, login, signup pages.
* Assisted with bugfixes for merge conflicts.
* Made some CSS changes to make the navbar and some buttons darker.

## August 31st, 2022

Today I Worked On:

* Worked with the team on some bugs related to the login functionality. Had an issue where the passwords for newly created users were not hashed, so we had to find a fix to add to our User model. Thanks to help from the SEIRs we were able to get it working.

## August 30th, 2022

Today I Worked On:

* Worked with the team on the authentication functionality for some bugfixes.
* Continued updating the detail page on React.

## August 29th, 2022

Today I Worked On:

* Continued adding functionality/features for the Activity detail page. Got the Location hours working using some logic to convert the Yelp time, which was in format "1700", to actual timestamp like "5:00 PM".

## August 25th, 2022

Today I Worked On:

* Began work on the Activity detail page React component. Got the API call working with the various details needed. Added in a Carousel to display the photos for the activity from the Yelp page.

## August 24th, 2022

Today I Worked On:

* I continued work on the API after showing the team my progress for the React front end page. I have the list view populating with the API call, but right now the category and location are hard-coded. Still need to work to make those dynamic based on the user's input.

## August 23rd, 2022

Today I Worked On:

* I set up a front-end page for the Activity List where I then added the fetch call to the Yelp API. Currently returning results! This will be updated to eventually take in a category and location supplied by the user.

## August 22nd, 2022

Today I Worked On:

* Today we split up responsibilities on what parts of the project to work on. I decided to handle working with the Yelp API that we will source our list of categories and activities from.
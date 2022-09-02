Format for each entry:

- Date of entry
- List of features/issues that you worked on and who you worked with, if applicable
- Reflection of any design converstations
- At least one ah-ha! moment, however small

08/22/2022
-Created models for Activity, Category, Rating
-Registered the models to the admin
-Created view for the to GET, POST Activities
-Created url path for Activity view
-Created common folder inside of Activities_rest, with a json.py file
-Created the model encoders inside of that json.py file

Will need to probably make adjustments with the Rating model/how it's implemented. Would rather have users be able to rate activities, rather than create ratings and apply them to the activities.

Was surprised to find how much I recalled when creating models, views. I thought after a little time away from not doing them, I would be really confused. But, I retained more than I realized.


08/23/2022
-Created a view to show the detail of an activity, update an activity and delete an activity
-Created a view to get a list of categories, create, update, and delete a category
-Created a view to get a list of ratings, create, update, and delete a rating

Still trying to figure out exactly how I want to implement rating, will talk with the team more about what the best option is moving forward.

Had a decent amount of small errors come up, but I was surprised with my ability to debug and come to solutions quickly.

08/24/2022
-Worked on trying to have rating be an optional field as a foreign key to no avail.
-Ended up changing models around to incorporate what I wanted to.
-Removed rating foreign key from the Activity Model
-Added activity foreign key to the Rating Model

I think we are headed in a great direction. Our team has been communicating well on changes we think might work or features we want to include. 

After working through different attempts at making a foreign key optional, I realized that a rating can't exist without an activity, whereas an activity can exist without a rating. This lead to me making the changes that I did.


08/25/2022
-Worked with Lijah on getting the User Authentication set up.
-Worked through a lot of bugs,  and finally got to a working state to create a new account/user

Learned that a button at the top of vs code, closes all folders in vs code, cleaning up my workspace quickly.

08/29/2022
-Worked with Lijah to create the LoginForm and SignupForm through react.
-Were able to get the format the way we wanted and the forms laid out correctly.

Learned more about how to adjust layouts on forms. I didn't know that mb abbreviation stood for margin-bottom. It clicked in my brain what all of those abbreviations stand for in css now.

08/30/2022
-Worked with Lijah and Joel to get authentication running correctly. 
-Had to work through a lot of bugs and errors. By the end of the day we were able to get authentication working for superusers but not users that we created form out signup form.

Got a better understanding of the authentication tokens

08/31/2022
-Worked with Lijah and Joel again to get authentication working for all users.
-Were able to get all authentication working correctly, as well as got out different pages to be hidden if the user wasn't logged in. So it would redirect the user back to the login screen

Learned that the authentication was only hashing the superuser password and not the regular user password. Had to create a function in our model to save the password so that django would has the standard user password as well.

09/01/2022
-Worked with Lijah to adjust the navbar to only show certain items when logged in and certain items when logged out. 
-Also adjusted the layout of the navbar the way we wanted.

Got a better understanding of how to adjust the layout of the navbar. Worked through a lot of trial and error, but gained a lot of knowledge because of it.
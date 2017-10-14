# assignment_css_garden_of_good_and_evil
Create a CSS garden that adapts to your whims.

## Maddie Rajavasireddy   

### Assignment Description:   
Assignment is to build a CSS Garden of Good and Evil. This is be a dynamic Express application, which the user can modify by tweaking a set of configurable properties along certain axes—including the eponymous Good/Evil axis.   

#### The Properties   
The top of the page contains a list of configurable properties. This is a form which, when submitted, will update these properties, thus altering the appearance/content of the page.    

Good or Evil : Radio Button

The eponymous option, whose value changes the tone and tenor of the page's content. This also change the styling/color-scheme of the page.    

Favorite Food : Text Field
The system is able to store the favorite food.   

Favorite Color : Drop-Down Select
The value of this field has an effect on the site's styling.   

Insanity Level : Number-Range Slider
Depending on the user's professed insanity quotient, various factors on the site change.   

#### What is displayed depending on above property selection:

Likes and Dislikes: Displays two lists, one of likes, another of dislikes (from json file). The content and/or ordering of these lists shifts with the properties listed above.   

Biography: A line of user biography (from json file)   

Resume: A list of jobs and core competencies depending on good/evil avatar selected


### Concepts used:  
Express middleware, cookies

#### Start app using `npm start` 

Portfolio Website for Adam

Structure:

- dir
    - index.html # These three are the html pages for the main website
    - contact.html
    - projects.html

    / img   # Here's where your images that index, contact, and projects use go

    / projects  # Add new projects to this directory
        / chippy  
            / img   # Your projects will have images so make an img directory too
                _.jpg
                _.png
            - chippy.html   # Feel free to copy this html and make content changes

    / scss
        - styles.scss # This is where custom style changes go, when you change this make sure to run the compile

    /css
        - styles.css # this is where scss compiles to

    / js
        # currently nothing here, if you end up with custom javascript you can toss it here


## ADDING NEW CONTENT ##

Style content additions on pages as they are on current pages.

Page structure is, for the most part, <row> tags with two <col> columns.
Take a look at index.html for references.

## ADDING A NEW PROJECT ##

This is probably what you'll do the most of.
As always if you have questions with instructions reach out and I'll help.

1. Create a new folder under /projects/
2. Copy and paste the contents of chippy into that folder
3. Delete all images under the img folder in the new project
4. Rename the html file from chippy to YOUR_NAME.html
5. Edit the basic content of the html to match the new project (title, subtitle, stuff like that)
6. Start working on the content of the actual page.
    - Refer to the chippy.html page for how to design the content with rows and columns
        - If you want the image on the left side and text on the right, make sure the image column comes before the text one
    - Changing images: 
        Ex: <img src="img/thumbnail.jpg" class="img-fluid w-100 rounded-xl" alt="Menacing robot with googly eyes.">
        This image refers to the source as "img/thumbnail.jpg", change that to "img/whater.extension"
        The classes define some size stuff: you can change "w-100" to w-75 or w-50 if you need it smaller
        Hopefully pngs will just work
    - Changing text:
        If the text needs to be really big give the div class "section-header-massive"
        If it needs to be big but not huge "section-header-xl"
        If normal section header "section-header"

7. Once the html is done, get a thumbnail image, call it thumbnail.jpg or whatever extension and put it in the project/NAME/img/ directory
8. On the projects.html page copy and paste a new column (project card)
    ex:    <div class="col-md-4">
                        <a class="project-card" href=  CHANGE THIS TO DIRECT TO YOUR NEW PROJECT ---> "./projects/chippy/chippy.html">
                            <div class="card mb-4 shadow-lg">
                                <img CHANGE THIS TO THE CORRECT FILE PATH FOR THUMBNAIL ---> src="./projects/chippy/img/thumbnail.jpg" class="card-img-top" alt="Evil looking robot with googly eyes">
                                <div class="card-body text-center">
                                    <p class="card-title">Chippy</p>  <----- CHANGE THIS TO THE TITLE
                                    <p class="card-subtitle">Beetleweight Combat Robot</p> <---- CHANGE THIS TO THE SUBTITLE
                                </div>
                            </div>
                        </a>
                    </div>

9. If you have any issues lmk
        

<h1>Node Capstone: Tenant Tracker</h1>

<h2>Setup</h2>
Using an API with Create, Read, Update and Delete capabilities, this app will allow those involved in Real Estate/Property Management to enter and track tenant information. The information that is featured in the tenant profile is quick reference information - that which can change often and landlords/managers need to look up quickly.

<h3>Create & Read</h3>
All tenants are automatically listed with drop down menus in the center of the page. To add a new tenant, enter a first and last name and click Submit. The new tenant will be automatically added to the tenant list.
<img src="/readme-screenshots/main-page.jpg">

After clicking Submit and adding the new tenant, the tenant will appear with no information filled out yet.
<img src="/readme-screenshots/default-info.jpg">

To add the tenant's information, click the View/Edit Profile button. This will open a modal to allow the editing of all tenant information like Building/Apt #, Lease Dates, Phone #, Email, Late Fees and the dates on which they were charged, and any 5 Day Notices posted with the date posted & whether or not the tenant satisfied the requirements of the notice (if any).
<img src="/readme-screenshots/edited-info.jpg">

Once the tenant's information has been entered, the Submit button is clicked which will run the Update function of the API and update the tenant information in the database.
<img src="/readme-screenshots/submitted-info.jpg">

Upon completion of the tenant's profile, the user can click off of the modal pop-up and refresh the page. The drop-down menu for the tenant will reflect the updated information. Should the user wish to delete the tenant, the garbage can on the bottom right of the tenant profile will, when clicked, operate the Delete function and remove the tenant from the page and the database.

<img src="/readme-screenshots/final-info.jpg">


<h3>Summary</h3>
Many Property Management softwares are thoroughly complex as they have to handle huge amounts of data, frequent changes and constant updates. This app endeavors to simplify the process for the user by slimming down the complexities and offering the ability to input only the essential information for each tenant. Landlords and managers have to frequently look up similar information for each tenant, a lot of which takes significant time to find in normal Property Management software. This app enables the user to find and update the target information much faster. The hope is for an app like this to be integrated into or in conjunction with Property Management software to add a quick reference feature so the user is not losing out on any of the software's normal abilites, while also enabling faster use.

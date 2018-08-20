This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

CSS Primarily from Bulma (https://bulma.io/)

Calendar layout from https://www.w3schools.com/howto/howto_css_calendar.asp

Installation Instructions: 
1. If you dont already have node/npm installed install both of them
2. Download the repository to a folder on your PC (Likely either as a .zip or by running git clone)
3. From the command line navigate to the folder containing the files you just downloaded. 
4. Run 'npm install'. This will install all of the packages required to run this project. 
5. After the dependencies are installed you can run 'npm start' to start the project, it should run on your PC at localhost:3000

Using the calendar. 
1. When you initially open the calendar you will see a screen similar to the below image. 
[Initial Screen](https://i.imgur.com/RI4cW81.png)
2. From that screen you can click on any day of the current month and you will see an "Add" button to add a task to that day, and if events already exist for that day you will see them as well. Note: Clicking the (X) beside any task allows you to remove it. 
[Example](https://i.imgur.com/3DBrL89.png)
3. You can also navigate to another day and navigate back to a previous day by clicking around. Note: Tasks are not yet saved to a database. 
4. You may also change the page styling by clicking on one of the buttons with the name of a color, this currently only changes the background color to correspond with the selected color. 
[Color Switches](https://i.imgur.com/fR5KB9z.png)
<h1 align="center"><b>Landing Page - Assignment 1</b></h>

## GENERAL INTRODUCTION

- **NAB Innovation Center Vietnam**
- **Program**: WeCamp batch 2
- **Assessment**: Assignment 1
- **Authors**: Thanh Huyen & Trinh Pham
- **Created  date**: 07/04/2022
- **Last modified**: 09/04/2023


<!-- ABOUT THE PROJECT -->

## LIST OF REQUIREMENTS AND THE DONE TASKS
### Easy (35 points)
- **Feel free to decide the content and structure of your website. (It should have top navigation bar and footer, and a carousel)**
  - Template design: https://caremi-store-demo.myshopify.com/ (item Home on header, topic "Home 2") 
  - Type of web: eCommerce about ceramic product

- **Basically a land page to sell your product. Suggestion topics: hobby, eCommerce, pet store, technology products, etc**
  - Status: Done.
  
- **A page must contain a form to collect input from visitors, i.e. comments, queries etc.**
  - It mainly display on "About us" page and "Registeration" pages.
  
- The website must contain at least 5 pages which cover relatively enough information about the topic. For example, about yourself, or about your companies etc.
  - Our website contains 5 main pages: Registeration -> Home -> Detail of product -> Cart -> Payment -> About us
  
- Feel free to use any kinds of data (JSON file) or generating themselves using [Mockaroo](https://www.mockaroo.com/) or any sites that you are familiar with.  
  - Folder product_json contains product.json file which is fake database of products.
  - To run website with all of the product's images, please run **npm i** in the terminal.

### Medium (20 points)
- A list of product items in one of a page (10 points).
  - It's in home page (home.htm)
- Click in one of the item in that list, it would redirect to a detailed page of that product. (10 points).
  - The flow from home.html to detail.html

### Hard (15 points)
- A notification to tell the users to accept the page cookies (3 points).
- A nested comment such as like this: For users to upload their comment (since this does not have database, you could use dynamic array or use browser storage instead, please choose a best way to do this with best performance) (7 points) (for this requirement, please explain in your [README.md](http://README.md) file how does it work, please don’t just copy in the internet).
- Use any kinds of storage to store the users information in log in. For example: click on the button login and you can hard code the username and store in local storage or session storage. (2 points).
- If the user has not logged in yet, they cannot access to a certain pages. Make some of the pages private. (3 points).
  
   
#### Explaination for each page:
- **The global files**
  - header.html: contains header html
  - footer.html: contains footer html
  - loadPage.js: source code to add html from a page to another page
  - passValue.js: to serve for carousel (at first I created it global because I thought it would be used again in other pages. However, just only home page uses it at the present)
  - render.js: source code to render new element to DOM. We will use it when needing render something maybe increasing volume in the future like products, sliders,..
  
  
- **The local files**:
  -**Home**
  - The layout includes: header + slider + 3 tabs product + input to get customer's email + carousel of social media + footer.
  - Links: fontawesome (icon), themify (icon), font-family from Google Fonts, CSS.
  - Files: 
    - header.html
    - footer.html
    - home.html
    - loadPage.js
    - render.js (global - assets/js/render.js)
    - render.js (assets/js/home/render.js)
    - passValue.js
    - eventHandler.js (assets/js/home/eventHandler.js): handle all event on home screen.
    - login.js
    - user.js
    - cart.js
  - The same method to make slider / carousel / tabs: I will find all items to find which is display (having active_block). Then, I remove it and add className='active_block' for current item.
 

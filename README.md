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
### Easy (35 points) - **Trinh + Huyen**
- **Feel free to decide the content and structure of your website. (It should have top navigation bar and footer, and a carousel)**
  - Template design: https://caremi-store-demo.myshopify.com/ (item Home on header, topic "Home 2") 
  - Type of web: eCommerce about ceramic product

- **Basically a land page to sell your product. Suggestion topics: hobby, eCommerce, pet store, technology products, etc**
  - Status: Done.
  
- **A page must contain a form to collect input from visitors, i.e. comments, queries etc.**
  - It mainly display on "About us" page and "Registeration" page.
  
- The website must contain at least 5 pages which cover relatively enough information about the topic. For example, about yourself, or about your companies etc.
  - Our website contains 5 main pages: Registeration -> Home -> Detail of product -> Cart -> Payment -> About us
  
- Feel free to use any kinds of data (JSON file) or generating themselves using [Mockaroo](https://www.mockaroo.com/) or any sites that you are familiar with.  
  - Folder product_json contains product.json file which is fake database of products.
  - To run website with all of the product's images, please run **npm i** in the terminal.
  
#### Explaination for each page:
- **The global files** <br>
  - header.html: contains header html
  - footer.html: contains footer html
  - loadPage.js: source code to add html from a page to another page
  - passValue.js: to pass value from this html page to another html page.
  - render.js: source code to render new element to DOM. We will use it when needing render something maybe increasing volume in the future like products, sliders,..
  
  
- **The local files** <br>
  -**Home - Huyen (home.html)** 
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
  
  -**Detail of product - Huyen (detail.html)**
  - The layout includes: header + directed bar + product's information + nested comments + related products + footer.
  - Links: fontawesome (icon), themify (icon), font-family from Google Fonts, CSS.
  - Files: 
    - header.html
    - footer.html
    - detail.html
    - loadPage.js
    - render.js (global - assets/js/render.js)
    - render.js (assets/js/detail/render.js)
    - eventHandler.js (assets/js/detail/eventHandler.js): handle all event on detail screen.
    - login.js
    - user.js
    - cart.js
  - The image, name and price of product will be saved to localStorage when clicking the item from home.html. These values will be pass to detail.html and render it to screen.

### Medium (20 points) - **Huyen**
- A list of product items in one of a page (10 points).
  - It's in home page (home.htmt)
- Click in one of the item in that list, it would redirect to a detailed page of that product. (10 points).
  - The flow from home.html to detail.html

### Hard (15 points) - **Trinh + Huyen**
- A notification to tell the users to accept the page cookies (3 points) - Huyen
  - There's a box to ask user to accept cookies, but I don't know what exactly to get. So I display it on screen and it will disappear when user clicks button "ACCEPT COOKIES", no handling to get data.
  
- A nested comment such as like this: For users to upload their comment (since this does not have database, you could use dynamic array or use browser storage instead, please choose a best way to do this with best performance) (7 points) (for this requirement, please explain in your [README.md](http://README.md) file how does it work, please don’t just copy in the internet) - **Huyen** - <br>

  **Some general information about this part:** 
  1. The input on top of comment block always creates new comment in level 1. The button clear to delete all data on input.
  ![image](https://user-images.githubusercontent.com/97439051/230710181-cff35148-68aa-4146-b2d5-c072aef80f38.png)
  2. The max child level is 3, means that replying comments in level 1 will create comments in level 2, similar with level 2 to level 3. But if you reply comments in level 3, they still are comments in level 3 instead of level 4. 
  ![image](https://user-images.githubusercontent.com/97439051/230710378-0f55a086-58f1-4601-8d19-2748c6281576.png)
  3. After sending a comment, the page must reload once to set latest data to interface. 
  4. Beacause we don't have database, something are setten by default.
  5. It misses the constraint that requires to login if user want to leave comment (Ms. Trinh saved it to localStorage as soon as user login or register account, but I've been clear it yet, so I don't know how to get item from object user)
  
  **The flow of code**
    - If user clicks "Send" button, the code will create new object and save it to localStorage, it includes: <br>
      - id: created automatically
      - avatar: default url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCI6D-EkL1058Fnk2RliFP17INDLXdmVG_0Q&usqp=CAU'
      - date: set current date according to data returned from Date function of Javascript
      - username: default name: "Alexander"
      - level: depend on creating new comment or replying comment
      - nearest_parent: comments in level 2 and level 3 will have this property, it is nearest parent's id. For example: The id of comment in level 2 is '01', all its childs also have nearest_parent '01'.
    - After sending, the page will reload to update new data to render they on screen.
    - The alignments among these comments depend on position CSS. The child will depend on the nearest parent which has position. That's why there are many parent have position, all comments still locate rightly. 
    - The child comment will be in div.className = "comment-right".
 
  **Code**: rows of 46-91 in render.js file (assets/js/detail/render.js) and rows of 50-207 in eventHandler.js (assets/js/detail/eventHandler.js). More details I described in these files.
 
- Use any kinds of storage to store the users information in log in. For example: click on the button login and you can hard code the username and store in local storage or session storage. (2 points) - **Trinh**
- If the user has not logged in yet, they cannot access to a certain pages. Make some of the pages private. (3 points) - **Trinh**

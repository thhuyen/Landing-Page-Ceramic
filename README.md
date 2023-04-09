<h1 align="center"><b>Landing Page - Assignment 1</b></h>

## GENERAL INTRODUCTION

- **NAB Innovation Center Vietnam**
- **Program**: WeCamp batch 2
- **Assessment**: Assignment 1
- **Authors**: Thanh Huyen & Trinh Pham
- **Created date**: 07/04/2022
- **Last modified**: 09/04/2023

<!-- ABOUT THE PROJECT -->

## LIST OF REQUIREMENTS AND THE DONE TASKS

### Easy (35 points) - **Trinh + Huyen**

- **Feel free to decide the content and structure of your website. (It should have top navigation bar and footer, and a carousel)**

  - Template design: https://caremi-store-demo.myshopify.com/ (item "Home" on header, topic "Home 2")
  - Type of web: eCommerce about ceramic product


- \*_Basically a land page to sell your product. Suggestion topics: hobby, eCommerce, pet store, technology products, etc_

  - Status: Done.

- _A page must contain a form to collect input from visitors, i.e. comments, queries etc._

  - It mainly displays on
    - "**About us**" page : `Contact Form` 
    - "**Payment**" page / Info - section: (it's a private page, you need to register an account or use the admin account - username & password is both `admin` to access to the page ) a form collecting user's phone, email, address, name, etc.

- _The website must contain at least 5 pages which cover relatively enough information about the topic. For example, about yourself, or about your companies etc._
  - Our website contains `06` main pages: `Registeration / Login -> Home -> About us -> Detail of product -> Cart -> Payment`
- _Feel free to use any kinds of data (JSON file) or generating themselves using [Mockaroo](https://www.mockaroo.com/) or any sites that you are familiar with._

  - Folder product_json contains product.json file which is fake database of products.
  - To run website with all of the product's images, please run **npm i** in the terminal.

### Medium (20 points)


- _A list of product items in one of a page (10 points)._
  - A list of product items is in Homepage > Section `OUR BEST SELLER` or `HOT DEAL` (home.htm)
  - Can also found a list of _selected items_ add in Cart in `Cart` and `Payment` page.
- _Click in one of the item in that list, it would redirect to a detailed page of that product. (10 points)._
  - Click on any product from the list in `home.html`, it will redirect to `detail.html`
  - Can also click on the item name of selected item in `cart.html`, it will redirect to `detail.html`

### Hard (15 points)


- _A notification to tell the users to accept the page cookies (3 points)._

  - Accept Cookies pop-up notification is easily catch up in the `home.html` as soon as you open the home page.

- _A nested comment such as like this: For users to upload their comment (since this does not have database, you could use dynamic array or use browser storage instead, please choose a best way to do this with best performance) (7 points) (for this requirement, please explain in your [README.md](http://README.md) file how does it work, please don’t just copy in the internet)._
  - You can find it in the last section of product detail page at `detail.html`
- _Use any kinds of storage to store the users information in log in. For example: click on the button login and you can hard code the username and store in local storage or session storage. (2 points)._
  - We have an `user module` in `user.js`, using local storage to keep track of user (log in, log out, username has existed or not, etc...)
- _If the user has not logged in yet, they cannot access to a certain pages. Make some of the pages private. (3 points)._
  - So far we have some private pages/section that user must log in to see it, namely:

    - Cart Page: `/pages/cart/cart.html`,
    - Payment pages: `/pages/payment/input-info.html`, `/pages/payment/confirm-shipping.html`, `/pages/payment/final-payment.html`
    - Login/ Account Page: `pages/login/userInfo.html` , must login to see the account info and total number of selected items in Cart
    - You must login to write some comments in `detail.html`

## Explaination for each page:

### 1. **The global files**
- `header.html`: contains header html
- `footer.html`: contains footer html
- `loadPage.js`: source code to add html from a page to another page
- `passValue.js`: to pass value from this html page to another html page.
- `render.js`: source code to render new element to DOM. We will use it when needing render something maybe increasing volume in the future like products, sliders,..

### 2. **The local files** <br>

#### 2.1 Huyen tasks

_**Home**_

- The layout includes: header + slider + 3 tabs product + input to get customer's email + carousel of social media + footer.
- Links: fontawesome (icon), themify (icon), font-family from Google Fonts, CSS.
- Files:
  - `header.html`
  - `footer.html`
  - `home.html`
  - `loadPage.js`
  - `render.js` (global - assets/js/render.js)
  - `render.js` (assets/js/home/render.js)
  - `passValue.js`
  - `eventHandler.js` (assets/js/home/eventHandler.js): handle all event on home screen.
  - `login.js`
  - `user.js`
  - `cart.js`
- The same method to make slider / carousel / tabs: I will find all items to find which is display (having active_block). Then, I remove it and add className='active_block' for current item.

_**Detail of product (`detail.html`)**_
- The layout includes: header + directed bar + product's information + nested comments + related products + footer.
- Links: fontawesome (icon), themify (icon), font-family from Google Fonts, CSS.
- Files:
  - `header.html`
  - `footer.html`
  - `detail.html`
  - `loadPage.js`
  - `render.js` (global - assets/js/render.js)
  - `render.js` (assets/js/detail/render.js)
  - `eventHandler.js` (assets/js/detail/eventHandler.js): handle all event on detail screen.
  - `login.js`
  - `user.js`
  - `cart.js`
- The image, name and price of product will be saved to localStorage when clicking the item from `home.html`. These values will be pass to detail.html and render it to screen.

_**A list of product items in one of a page (10 points)**_
  - It's in home page (`home.html`)
- _Click in one of the item in that list, it would redirect to a detailed page of that product. (10 points)_
  - When clicking one product in `home.html`, the data includes image url, name, price, discount will be saved to localStorage to set it for some fields in `detail.html`.
  
_**A notification to tell the users to accept the page cookies**_
  - There's a box to ask user to accept cookies, but I don't know what exactly to get. So I display it on screen and it will disappear when user clicks button "ACCEPT COOKIES", no handling to get data.
  
_**A nested comment such as like this: For users to upload their comment (since this does not have database, you could use dynamic array or use browser storage instead, please choose a best way to do this with best performance) (7 points)**_ <br>
  **Some general information about this part:**
  1. The input on top of comment block always creates new comment in level 1. The button clear to delete all data on input.
     ![image](https://user-images.githubusercontent.com/97439051/230710181-cff35148-68aa-4146-b2d5-c072aef80f38.png)
  2. The max child level is 3, means that replying comments in level 1 will create comments in level 2, similar with level 2 to level 3. But if you reply comments in level 3, they still are comments in level 3 instead of level 4.
     ![image](https://user-images.githubusercontent.com/97439051/230710378-0f55a086-58f1-4601-8d19-2748c6281576.png)
  3. After sending a comment, the page must reload once to set latest data to interface.
  4. Beacause we don't have database, something are setten by default.
  5. The constraint that requires to login if user want to leave comment.
  
  **The flow of code**

  - If user clicks "Send" button, the code will create new object and save it to localStorage, it includes: <br>
    - id: created automatically.
    - avatar: default url: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'.
    - date: set current date according to data returned from Date function of Javascript.
    - username: default name: username from login action.
    - level: depend on creating new comment or replying comment.
    - nearest_parent: comments in level 2 and level 3 will have this property, it is nearest parent's id. For example: The id of comment in level 2 is '01', all its childs also have nearest_parent '01'.
  - After sending, the page will reload to update new data to render they on screen.
  - The alignments among these comments depend on position CSS. The child will depend on the nearest parent which has position. That's why there are many parent have position, all comments still locate rightly.
  - The child comment will be in div.className = "comment-right".
  - If the block containing all comments is over 400px, the overflow will be hidden, then you can see a text to view more replies or hide them.

  **Code**: rows of 46-91 in `render.js` file (assets/js/detail/render.js) and rows of 50-207 in `eventHandler.js` (assets/js/detail/eventHandler.js). More details I described in these files.

#### 2.2: Trinh tasks:

2.2.1: **LOGIN**

##### _Login Modal Box_:

- **Location**: Nested in the Header Nav Bar ( group of Icons, click in the Account Btn and it'll show up a Modal Box)
- **Usage and its function**:
  - Help user log in (if already have an account) with the `remember me` to save infor for the next time logging in, or navigate to the Register page to help user register a new account.
  - If logging in successfully, it will navigate to the Account page (`pages/login/userInfo.html`) and user can see some private pages.
  - Should includes `user.js` and `login.js` to make sure the login function will execute properly whenever clicking in the Account button

##### _Login Page (pages/login/userInfo.html)_:

- After successfully logging in, this page will show up.
- Show account infor (username, total items selected)
- Optional navigation: Sign out or Back to Homepage
- **Related files:** :
  - `login.js`: used as an event-handler for icons/buttons in header that will navigate or relates to the login function.
  - `user.js`: (this module I have rewrite based on the idea of shoppingCart module in `cart.js` to reusable and keep track of user accounts) Create an user reusable module to :
    - using the local storage to keep track of user list: check if user logged in or not, to login/ logout the account, check existed account, get the current account, register an account
    - restrict/access to some private pages
    - create an admin account to login as default (username & password: "admin")
  - `userLogin-loader.js`: used mainly for `userInfo.html` page, to log out function, render user info about account, and _optional render based on the status of Cart._ As the quantity of selected items in Cart will be display in this page, we need to include the `cart.js` to use the `shoppingCart.countCart()` method to get the total quantity of items in the shoppingCart module.

##### _Register Page (pages/login/register.html)_:

- If an user don't have an account to login, they can register by clicking to "Register" in Log in Modal Box and redirect to the Register Page. After register a valid account, an notification of successful registering will be showed up, and redirect user to the homepage.
- **Related files:** :

  - `register.js`: to validate the input of registering from user to create valid account, and to create account by `user.register()` method from User module.
  - `user.js` module to help register.js - `user` object execute properly.

  2.2.2: **ABOUT**

##### _About Page (pages/about.html)_:

- An informative page based in the navbar section of Header, or the `About us` link in Footer.
- Related file:

  - `about.css`
  - `formValidation.js`: to validate the input from user via a form to collect information of visitor.
  - `renderEl.js`: maily for render some iterable info in page (list of icon, slider, list of values, etc.)

  2.2.3: **CART**

##### _Cart Page (pages/cart/cart.html)_:

- It's a private page that users need to login to access. If you click on the icon Cart (bag icon on the right side of navbar in Header) but haven't logged in yet, there'll be a Login Modal Box showed up to asked you for Login. If you go to .../pages/cart/cart.html URL without logging in, it'll show up an alert that you have to log in to access the page, and redirect you to the homepage.
- Optional rendering based on the number of items added to Cart:

  - When you logged in but haven't added item to Cart, Cart page will render a empty Cart content
  - You can added items to Cart via the "add to Cart" button on items in Home page, or add items from "add to Cart" button on items in product detail pages.

- **Related files:** :

  - `cart.js`: create a reusable shoppingCart module to use for Cart-related info :

    - Using local storage to keep track of item in cart, add new item to cart (from both product in home and product in detail page), update, count quantity of items, remove item, calculate sum of the total price of items.
    - Reference page: I've learn to create shoppingCart module from here https://codepen.io/chrisachinga/pen/MWwrZLJ?editors=0010
    - Also using local storage to save Payment info of user input for the next step Payment via shoppingCart module.

  - `pages/cart/eventHandler.js` : an event handler based on shoppingCart module to handle event relating to Cart, mainly using shoppingCart module in `cart.js`:
  - Render cart page when clicking Cart button, render selected items in Cart
  - Can click to the item name in Cart, it will redirect to the detail page (/pages/detail.html) to see the detail of product.
  - Quantity of items in cart can increase/decrease by clicking (+) / (-)

  2.2.4: **PAYMENT**

##### _Payment Page_:

- As payment process is divided into 3 steps, I end up created 3pages insteads of 1 ... Each payment page is a private page (cannot access without login). Each page will have 2 section: the left side is user input info and some needed info for payment (name, email, phone, address, shipping method &fee), the right one is Cart's info of total price and calculating fee added (taxes, shipping fee) to the final step of payment

  - `input-info.html`: 1st step of payment after add items to Cart, using `info-eventHandler.js` to validate the input from user, get info from input and save it to the local storage (using `shoppingCart.getPaymentInfo()` in Cart.js) to be used for the next step of payment. It also render list of Cart with the info of total Cart price adding taxes.
  - `confirm-shipping.html`: after filling in the form, next step is confirm the contact and address info for shipping. The Cart info will be added the shipping fee to get to the final cost. With `shipping-eventHandler.js`, user can edit the contact and shipping info (if needed)as input info saved in local storage, when clicking Edit button redirecting to the previous page, the info filled before is still available there to edit/overwrite.
  - `final-payment.html`: using `assets/js/payment/final-eventHandler.js` with the same method as 2 previous steps to get info of user input and render the Cart totals.

 2.2.5: **FOOTER**

##### _pages/footer.html_ 


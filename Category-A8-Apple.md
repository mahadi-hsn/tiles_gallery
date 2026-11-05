 **Assignment Category: category-A8-Apple**

**\>\>\>[Requirement Explanation Video 📹](https://drive.google.com/file/d/1eraAtwRzFSwMyoeV3znevTzkXZDMED3f/view?usp=sharing)\<\<\<**

## **Tiles Gallery**

##### **Project Theme**

 A website to showcase a tile gallery.

---

##### **Key Things you have must to do**

* **GitHub Commits:** Include at least 10 meaningful commits with descriptive messages.

* **Readme.md:** Include a README file with the project name, purpose, live URL, key features, and any npm packages you have used.

* **Responsiveness:** Ensure the website is fully responsive on mobile, tablet, and desktop.

* **Environment Variables:** Secure configuration keys using environment variables.

* **Unique Design:**  Create a unique design that goes with the given Concept. You can use this [blog](https://medium.com/design-bootcamp/free-images-and-resources-collection-for-website-c77f2fc46ce5) for these kinds of resources   
* **Host your Application:**  You can choose deployment systems  like vercel, render for hosting . As you are developing a single page application   
  * ensure that  page doesn't throw any error on reloading from any routes.  

---

### 

### **Main Requirements**

## 

## **JSON Data format**

Example Json data

{

  "id": "tile\_001",

  "title": "Ceramic Blue Tile",

  "description": "Premium ceramic tile with blue glaze finish",

  "image": "/images/tiles/tile\_001.jpg",

  "category": "ceramic",

  "price": 45.99,

  "currency": "USD",

  "dimensions": "60x60 cm",

  "material": "Ceramic",

  "inStock": true

}

# **\>\> JSON server রিলেটেড একটা ভিডিও মডিউল 47 এ দেওয়া হয়েছে \<\<**

# **🧱 1\. Layout & Navigation**

## **Header (Navbar)**

* **Left:** Website Logo (Navigates to Home).  
* **Centre:** Links for Home, All Tiles, and My Profile.  
* **Right:** \* If **Logged Out:** A **"Login"** button.

* If **Logged In:** User **Profile Page** and a **"Logout"** button.

## **Footer**

* Design a custom footer with links to social media and a "Contact Us" section.

# **🏠 2\. Home Page**

* **Banner:** A large "Discover Your Perfect Aesthetic" heading with a **"Browse Now"** button leading to the All Tiles page.  
* **Marquee:** A scrolling line of text showing "New Arrivals: \[Tile Name\] \| Weekly Feature: Modern Geometric Patterns \| Join the Community..."  
* **Featured Tiles:** A section showing the top 4 tiles fetched from the server. Each card must have a **"View Details"** button.

# **🔐 3\.  Authentication**

Tell them from where the user can land on the Login page .  you can use this frame for this requirement below


## **User Login**

The user will  show  a Login page with a form , so that the user can Log in this application. 

- Show a Title for Login.  & Form with following fields   
  ( Email , Password , Login button ) 

If the user Login successfully then 

- navigate him to his Home page.  
- If not, show him an error with toast / error message anywhere in the form.

There will be some other options like 

- Show the user a Link for Register  so that he can go to the register page.   
- Show users a Social Login Button ( Google only ) . on Clicking it   
  - user authenticate with Google  
  -  Navigate him to  his Home page.

 

## **User Registration**

Create a register page with a form , so that the user can register himself in this application. 

- Show a Title for registration and a Form with following fields

( Name , Email, Photo-url(link), Password & Register Button ) 

If the user Register successfully then 

- navigate him to his login page.  
- If not, show him an error with toast / error message anywhere in the form.

There will be some other options like 

- Show the user a Link for Login so that he can go to the Login page.   
- Show users a Social Login Button ( Google only ) . on Clicking it   
  - user authenticate with Google  
  - Navigate the user to the Home page.

 💡Don’t implement email verification or forget password method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

# 

# **🖼️ 4\. All Tiles Page (The Gallery)**

* **Search Bar:** A large Hero UI input at the top to search for tiles by title.  
* **Tile Cards:** Display:

* Tile Thumbnail & Title.  
* **"Details" Button:** Navigates to the specific Tile Details page.

# **🔍 5\. Single Tile Details Page**

* **Visuals:** Large High-Res Tile Preview on the left, text/details on the right.  
* **Info:** Title, Creator, Style Description, and **Tags** (e.g., "Minimalist", "Blue").

# **🛠️ Technical Requirements**

* **Framework:** Next.js (App Router).

* **UI Library:** DaisyUI/HeroUI or any UI library you are comfortable with.  
* **Authentication:** BetterAuth (configured with MongoDB Adapter).

## **⏹ Other Requirements** 

Add your other requirements with points. You can integrate requirements after home or any other requirement as you like. For example: 

* Show loader on data fetching   
* Not-found page implementation  
* Implement proxy on login or registration

# **🚀 Challenge Requirements**

## **1\. My Profile** 

Add a My Profile page requirement so that students can implement it for showing logged-in profile data.  

There will be an update feature for name \&image Url. define this requirement in the challenge section. 

##  **2\. Update Information Feature**

- In my-profile route there will be an update button on Clicking it.  Take user to another route   
  - Show user a form with 2 input field ( image and Name )   
  - An Update Information button.

Follow this documentation: [**https\://better-auth.com/docs/concepts/users-accounts\#update-user**](https://better-auth.com/docs/concepts/users-accounts#update-user) 

 

## **3\. Library**

Add requirement implementing  of any one npm package from the following

- [Animate.css](https://animate.style/),   
- [React-Spring](https://www.react-spring.dev/docs/components/parallax)  
- [SwiperJS \- React](https://swiperjs.com/react)

# **🚦 Route Permissions Summary**

* **Public:** /, /all-tiles, /login, /register.  
* **Private:**  /tile/\[id\], /my-profile.


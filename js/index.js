const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let logoImg = document.getElementById('cta-img');
logoImg.src="./img/header-img.png";


let middleImg = document.getElementById('middle-img');
middleImg.src="./img/mid-page-accent.jpg";


let navi = document.querySelectorAll('a');
navi[0].textContent= "Services";
navi[1].textContent= "Product";
navi[2].textContent= "Vision";
navi[3].textContent= "Features";
navi[4].textContent= "About";
navi[5].textContent= "Contact";
                                                                                              
navi.forEach(function(currentValue) {
  currentValue.style.color='green';
})


let newPage = document.createElement('a');
newPage.textContent="Account";

let navigation = document.querySelector('nav');
navigation.append(newPage);

let newPageTwo = document.createElement('a');
newPageTwo.textContent="Settings";

navigation.prepend(newPageTwo);

const topContent= document.getElementsByTagName('h1');
topContent[0].textContent= "DOM is Awesome"; 


let topContentButton= document.querySelector('.cta-text button');
topContentButton.textContent = "Get Started";


let features = document.querySelector('.top-content .text-content h4');
features.textContent = "Features";

let featuresContent = document.querySelector('.top-content .text-content p');
featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let about= document.getElementsByTagName("h4");
about[1].textContent= "About";
about[2].textContent= "Services";
about[3].textContent= "Product";
about[4].textContent= "Vision";
about[5].textContent= "Contact";

let content= document.getElementsByTagName("p");
content[1].textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
content[2].textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
content[3].textContent="Product  content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
content[4].textContent="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
content[5].textContent="123 Way 456 Street Somewhere, USA";
content[6].textContent="1 (888) 888-8888",
content[7].textContent="sales@greatidea.io",
content[8].textContent="copyright : Copyright Great Idea! 2018"


// let features = document.querySelector('.top-content .text-content h4');
// features.textContent = "About";

// let features = document.getElementsbyClassName('text-content')[0];
// features.textContent= "Features";


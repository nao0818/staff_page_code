// ________________________________________________________________

// header-animation
// _________________________________

const headerElement = document.querySelector(".l-header");
headerElement.classList.add("js-header");


// ________________________________________________________________

// ５つの特徴　スライド表示
// _________________________________

const featureElements = document.querySelectorAll(".c-feature__lavel");
document.addEventListener("scroll", function() {
    for (let i = 0; i < featureElements.length; i++) {
        const getElementDistance = featureElements[i].
        getBoundingClientRect().top + featureElements[i].clientHeight * .6
        if(window.innerHeight > getElementDistance) {
            featureElements[i].classList.add("js-slide");
        }
    }
})

// ________________________________________________________________

// コンテンツ　スライド表示
// _________________________________

const contentsElements = document.querySelectorAll(".js-contents__slide__before");
document.addEventListener("scroll", function() {
    for (let i = 0; i < contentsElements.length; i++) {
        const getContenttDistance = contentsElements[i].
        getBoundingClientRect().top + contentsElements[i].clientHeight * .1
        if(window.innerHeight > getContenttDistance) {
            contentsElements[i].classList.add("js-contents__slide__after");
        }
    }
})
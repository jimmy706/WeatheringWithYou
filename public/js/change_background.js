const body = document.body;
const bg_list = [...document.querySelectorAll(".bg li")];
const page_wrapper = document.querySelector(".pages");
const intro_offset = document.getElementById("introduction").offsetTop;
const story_offset = document.getElementById("story").offsetTop;
const credit_offset = document.getElementById("credit").offsetTop;

function changeBackground(locate) {
    const location = document.getElementById(locate);
    const target_bg = document.querySelector(`[data-target='${locate}']`);
    body.classList.add("page");
    bg_list.forEach((li) => {
        li.classList.remove("active");
    })
    target_bg.classList.add("active");
    // console.log({ scrollTop: pageWrapperTop, locateTop: location.offsetTop });
    page_wrapper.scrollTo({
        top: location.offsetTop,
        behavior: 'smooth'
    })
}

function changeBackgroundOnScroll(locate) {
    const target_bg = document.querySelector(`[data-target='${locate}']`);
    bg_list.forEach((li) => {
        li.classList.remove("active");
    })
    target_bg.classList.add("active");
}

page_wrapper.addEventListener("scroll", () => {
    const pageWrapperTop = page_wrapper.scrollTop;
    if (pageWrapperTop === 0 && pageWrapperTop < story_offset) {
        changeBackgroundOnScroll("introduction")
    }
    else if (pageWrapperTop >= story_offset && pageWrapperTop < credit_offset) {
        changeBackgroundOnScroll("story");
    }
    else if (pageWrapperTop === credit_offset) {
        changeBackgroundOnScroll("credit");
    }
})


function to_top() {
    if (body.classList.contains("page")) {
        body.classList.remove("page");
        bg_list.forEach((li) => {
            li.classList.remove("active");
        })
    }
}
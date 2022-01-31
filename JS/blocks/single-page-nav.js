let blog_nav = document.querySelector("#blog-nav");
let blog_arrow = document.querySelector("#blog-nav-arrow");

blogNav();
window.addEventListener("resize", () => {
  blogNav();

  if (blog_arrow.classList.contains("nav-rotate")) {
    if (window.innerWidth < 1024) {
      blog_arrow.classList.remove("nav-rotate");
    }
  }
});
function blogNav() {
  if (window.innerWidth < 1024) {
    blog_nav.style.width = "3.5em";
    blog_nav.style.overflow = "hidden";
    blog_arrow.style.right = "3%";
  } else {
    blog_nav.style.width = "33.333333%";
  }

  document.querySelector("#blog-nav-arrow").addEventListener("click", () => {
    if (!blog_arrow.classList.contains("nav-rotate")) {
      blog_nav.style.width = "63.333333%";
      blog_arrow.classList.add("nav-rotate");
      blog_arrow.style.right = "55%";
    } else {
      blog_arrow.classList.remove("nav-rotate");
      blog_nav.style.width = "3.5em";
      blog_nav.style.overflow = "hidden";
      blog_arrow.style.right = "3%";
    }
  });
}

// INPUT VARIABLE

/* const arrBlogs = [{ name: "A", url: "./a" }, "B", "C", "D", "E"];
const input = document.querySelector("input");

input.addEventListener("submit", () => {
  const inputFromUser = input.value;

  const blogExists = arrBlogs.find((blog) => {
    return blog === inputFromUser;
  });

  window.location = blogExists.url ?? "./404.html";
}); */

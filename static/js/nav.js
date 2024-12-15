$(function() {
  // remove leading / from url
  let url = window.location.pathname.slice(1);
  if(url.startsWith("physics/")) {
    url = url.slice(8);
  }
  if(url === '') {
    url = "home";
  } else if(url.endsWith('/')) {
    url = url.slice(0, -1);
  }

  // add active class to current page
  const a = $(`a[goto="${url}"]`);
  a.addClass("text-teal-500").removeClass("text-white");
  console.log(url);
})

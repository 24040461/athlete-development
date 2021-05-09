const faqaboutItemHeaders = document.querySelectorAll(".faqabout-item-header");

// Reference for FAQ https://www.youtube.com/watch?v=dr8Emho-kYo&t=1064s
faqaboutItemHeaders.forEach(faqaboutItemHeader => {
  faqaboutItemHeader.addEventListener("click", event => {
    


    faqaboutItemHeader.classList.toggle("active");
    const faqaboutItemBody = faqaboutItemHeader.nextElementSibling;
    if(faqaboutItemHeader.classList.contains("active")) {
      faqaboutItemBody.style.maxHeight = faqaboutItemBody.scrollHeight + "px";
    }
    else {
      faqaboutItemBody.style.maxHeight = 0;
    }
    
  });
});


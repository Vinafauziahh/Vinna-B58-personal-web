function fetchTestimonials() {
  return new Promise((resolve ,reject) => {
    setTimeout(() => {
    const xhr = new XMLHttpRequest();

    // GET, POST, PUT, PATCH, DELETE

    xhr.open("GET", "https://www.npoint.io/docs/b73334cda3fb692d60fa", false);

    xhr.onerror = () => {
      reject("Network error!");
    };

    xhr.onload = () => {
      const parsed = JSON.parsed(xhr.response);

      resolve(parsed)
    };

    xhr.send();  
  }, 3000)
}

async function getAllTestimonials() {
  const testimonials = await fetchTestimonials()

  const TestimonialHTML = testimonials.map((testimonial) => {
    return `<div class="testimonial">
              <img src="${testimonial.image}" class="profile-testimonial" />
              <p class="quote">"${testimonial.content}"</p>
              <p class="author">- ${testimonial.author}</p>
              <p class="author"><i class="fas fa-star"></i>${testimonial.star}</p>
          </div>`
  })

  document.getElementById("testimonials").innerHTML = testimonialHTML.join("") 
}

async function getAllTestimonialByStar(star) {
  const testimonials = await fetchTestimonials()

  const filteredtestimonials = testimonials.filter((testimonial) => {
    return testimonial.star === star
  })

const TestimonialHTML = filteredtestimonials.map((testimonial) => {
  return `<div class="testimonial">
          <img src="${testimonial.image}" class="profile-testimonial" />
          <p class="quote">"${testimonial.content}"</p>
          <p class="author">- ${testimonial.author}</p>
          <p class="author"><i class="fas fa-star"></i>${testimonial.star}</p>
        </div>`
})

     document.getElementById("testimonials").innerHTML = testimonialHTML.join("") 
}

getAllTestimonials()


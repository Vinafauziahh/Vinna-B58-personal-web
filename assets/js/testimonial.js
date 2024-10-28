const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Mantap sekali bro!",
    author: "Anto",
    star: 5,
  },
  {
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Okelah!",
    author: "Anta",
    star: 3,
  },
  {
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Mantap sekali bro!",
    author: "Anto",
    star: 3,
  },
  {
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Oke!",
    author: "Anta",
    star: 5,
  },
];


function getAllTestimonials() {
 const TestimonialHTML = testimonials.map((testimonial) => {
    return `<div class="testimonial">
          <img src="${testimonial.image}" class="profile-testimonial" />
          <p class="quote">"${testimonial.content}"</p>
          <p class="author">- ${testimonial.author}</p>
          <p class="author"><i class="fas fa-star"></i>${testimonial.star}</p>
        </div>`
  })

  document.getElementById("testimonials").innerHTML = TestimonialHTML.join("") 
}

function getAllTestimonialByStar(star) {
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

     document.getElementById("testimonials").innerHTML = TestimonialHTML.join("") 
}

getAllTestimonials()


$(document).ready(function () {
  $("#calendar")
    .datepicker({
      language: "ar",
      todayHighlight: true,
      format: "dd/mm/yyyy",
      rtl: true,
    })
    .datepicker("update", new Date(2025, 10, 10));

  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  });
  $("#mainNewsCarousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 1 },
    },
  });
});

function submitSurvey() {
  const questions = document.querySelectorAll(".survey-question");

  questions.forEach((question) => {
    const radios = question.querySelectorAll('input[type="radio"]');
    const counts = {};
    let total = 0;

    radios.forEach((radio) => {
      const val = radio.value;
      if (!counts[val]) counts[val] = 50; // قيمة افتراضية مبدئية
      if (radio.checked) counts[val] += 1;
      total += 1;
    });

    question.querySelectorAll(".option-container").forEach((container) => {
      const radio = container.querySelector("input");
      const value = radio.value;
      const bar = container.querySelector(".progress-bar");
      const percent = (counts[value] * 100) / (total + 100); // توزيع طبيعي
      bar.style.width = percent + "%";
      bar.textContent = Math.round(percent) + "%";
    });
  });
}

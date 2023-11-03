document.addEventListener("DOMContentLoaded", function () {
    const showCookieModalButton = document.getElementById("showCookieModal");
    const cookieModal = document.getElementById("cookieModal");
    const closeCookieModal = document.getElementById("closeCookieModal");
    const verifyAgeButton = document.getElementById("verifyAge");
    const ageInput = document.getElementById("ageInput");
    const tooYoungPage = document.getElementById("tooYoungPage");
  
    showCookieModalButton.addEventListener("click", function () {
      cookieModal.style.display = "block";
    });
  
    closeCookieModal.addEventListener("click", function () {
      cookieModal.style.display = "none";
    });
  
    verifyAgeButton.addEventListener("click", function () {
      const age = parseInt(ageInput.value);
  
      if (age >= 18) {
        window.location.href = "https://www.jouw-website.com";
      } else {
        cookieModal.style.display = "none";
        tooYoungPage.style.display = "block";
      }
    });
  });
  
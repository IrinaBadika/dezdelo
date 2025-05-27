
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq h3");

  questions.forEach((q) => {
    const answer = q.nextElementSibling;
    answer.style.maxHeight = "0px";
    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
    q.style.cursor = "pointer";
    q.addEventListener("click", () => {
      const expanded = answer.style.maxHeight !== "0px";
      answer.style.maxHeight = expanded ? "0px" : answer.scrollHeight + "px";
      answer.style.opacity = expanded ? "0" : "1";
    });
  });
});

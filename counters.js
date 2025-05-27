
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".countup");
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.started) {
        entry.target.dataset.started = "true";
        const endVal = parseInt(entry.target.dataset.count || "0", 10);
        const counter = new CountUp(entry.target, endVal);
        if (!counter.error) counter.start();
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(c => observer.observe(c));
});

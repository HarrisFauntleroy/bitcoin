document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
      const icon = mobileNavToggle.querySelector("i");
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Tab functionality
  const tabs = document.querySelectorAll(".tab");
  if (tabs.length > 0) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Get the parent tab container
        const tabContainer = this.closest(".tabs");
        // Get the tab content container
        const tabContent = tabContainer.nextElementSibling;
        // Get the tab panes
        const tabPanes = tabContent.querySelectorAll(".tab-pane");

        // Remove active class from all tabs in this container
        tabContainer.querySelectorAll(".tab").forEach((t) => {
          t.classList.remove("active");
        });

        // Add active class to clicked tab
        this.classList.add("active");

        // Hide all tab panes
        tabPanes.forEach((pane) => {
          pane.classList.remove("active");
        });

        // Show the corresponding tab pane
        const tabId = this.getAttribute("data-tab");
        tabContent.querySelector(`#${tabId}`).classList.add("active");
      });
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navLinks.classList.contains("show")) {
          navLinks.classList.remove("show");
          mobileNavToggle.querySelector("i").classList.remove("fa-times");
          mobileNavToggle.querySelector("i").classList.add("fa-bars");
        }
      }
    });
  });

  // Initialize tooltips
  const tooltips = document.querySelectorAll(".tooltip");
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", function () {
      this.querySelector(".tooltip-text").style.visibility = "visible";
      this.querySelector(".tooltip-text").style.opacity = "1";
    });

    tooltip.addEventListener("mouseout", function () {
      this.querySelector(".tooltip-text").style.visibility = "hidden";
      this.querySelector(".tooltip-text").style.opacity = "0";
    });
  });

  // Lazy loading for charts
  const chartObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chartId = entry.target.querySelector("canvas").id;
          if (chartId && typeof initializeCharts === "function") {
            initializeCharts(chartId);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".chart-wrapper").forEach((chart) => {
    chartObserver.observe(chart);
  });

  // Initialize all charts if not using lazy loading
  if (typeof initializeCharts === "function") {
    initializeCharts();
  }

  // Add scroll animation for cards
  const animateOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          animateOnScroll.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".card").forEach((card) => {
    animateOnScroll.observe(card);
  });
});

// Helper function to format numbers with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Helper function to format dates
function formatDate(date) {
  const options = { year: "numeric", month: "short" };
  return new Date(date).toLocaleDateString(undefined, options);
}

// Helper function to get gradient for charts
function getGradient(ctx, chartArea, colorStart, colorEnd) {
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}

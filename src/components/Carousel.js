document.addEventListener("DOMContentLoaded", function() {
    const tabsBox = document.querySelector(".tabs-box");
    const allTabs = tabsBox.querySelectorAll(".tab");
    const arrowIcons = document.querySelectorAll(".icon i");
  
    let isDragging = false;
  
    const handleIcons = () => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
      arrowIcons[0].parentElement.style.display = tabsBox.scrollLeft <= 0 ? "none" : "flex";
      arrowIcons[1].parentElement.style.display = maxScrollableWidth - tabsBox.scrollLeft <= 1 ? "none" : "flex";
    }
  
    arrowIcons[0].addEventListener("click", () => {
      // Scroll to the left by reducing the scroll position
      tabsBox.scrollBy({
        left: -340,
        behavior: "smooth"
      });
    });
  
    arrowIcons[1].addEventListener("click", () => {
      // Scroll to the right by increasing the scroll position
      tabsBox.scrollBy({
        left: 340,
        behavior: "smooth"
      });
    });
  
    allTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
      });
    });
  
    const dragging = (e) => {
      if (!isDragging) return;
      tabsBox.classList.add("dragging");
      tabsBox.scrollLeft -= e.movementX;
      handleIcons();
    }
  
    const dragStop = () => {
      isDragging = false;
      tabsBox.classList.remove("dragging");
    }
  
    tabsBox.addEventListener("mousedown", () => isDragging = true);
    tabsBox.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
  
    // Initial call to handleIcons to set arrow visibility
    handleIcons();
  });
  
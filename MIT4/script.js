document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const storedDataDiv = document.getElementById("storedData");
    const filterButtons = document.querySelectorAll(".filter_option button");
  
    const storeData = (username, email, group) => {
      const storedData = JSON.parse(localStorage.getItem("storedData") || "[]");
      const isDuplicate = storedData.some(data => data.username === username && data.email === email);
  
      if (isDuplicate) {
        alert("This username and email combination already exists!");
        return;
      }
  
      storedData.push({ username, email, group });
      localStorage.setItem("storedData", JSON.stringify(storedData));
    };
  
    const displayStoredData = (group) => {
      const storedData = JSON.parse(localStorage.getItem("storedData") || "[]");
      storedDataDiv.innerHTML = "";
      const filteredData = group === "All" ? storedData : storedData.filter(data => data.group === group);
  
      if (filteredData.length > 0) {
        const ul = document.createElement("ul");
        filteredData.forEach((data) => {
          const li = document.createElement("li");
          li.innerHTML = `
            <h3>${data.username}</h3>
            <p>${data.email}</p>
            <p>${data.group}</p>
            <div class="Delete_btn">
              <button class="deleteBtn" onclick="deleteData(this)">Delete</button>
            </div>
          `;
          ul.appendChild(li);
        });
        storedDataDiv.appendChild(ul);
      } else {
        storedDataDiv.innerHTML = "<p>No stored data found.</p>";
      }
    };
  
    userForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const group = document.getElementById("group").value;
      storeData(username, email, group);
      userForm.reset();
      displayStoredData("All");
    });
  
    window.deleteData = (button) => {
      const storedData = JSON.parse(localStorage.getItem("storedData") || "[]");
      const index = Array.from(button.parentNode.parentNode.parentNode.children).indexOf(button.parentNode.parentNode);
      storedData.splice(index, 1);
      localStorage.setItem("storedData", JSON.stringify(storedData));
      const group = document.querySelector(".filter_option button.active")?.value || "All";
      displayStoredData(group);
    };
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const activeButton = document.querySelector(".filter_option button.active");
        if (activeButton) {
          activeButton.classList.remove("active");
        }
        button.classList.add("active");
        displayStoredData(button.value);
      });
    });
  
    displayStoredData("All");
  });
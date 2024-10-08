const list = document.querySelector(".list");

const getListUsers = async (req, res) => {
  const response = await fetch("/users");
  if (response.ok) {
    const data = await response.json();

    if (data) {
      data.forEach((mappedUser) => {
        if (mappedUser.roles[0] !== "admin") {
          const li = document.createElement("li");
          li.textContent = `Username: ${mappedUser.username} Role: ${mappedUser.roles[0]}`;
          li.dataset._id = mappedUser._id;
          list.appendChild(li);
        }
      });
    }
  }
};

getListUsers();

const table_info = document.querySelector(".table_info");
const header_nav_title = document.querySelector(".header_nav_title");
const header_list = document.querySelector(".header_list");
const body = document.querySelector("body");

header_nav_title.addEventListener("click", onHeaderNavClick);

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => response.json())
  .then(function (json) {
    let users = json;
    markup(users);
  })
  .catch((error) => console.log(error.message));

function markup(arr) {
  return arr
    .map(
      ({
        address,
        email,
        name,
        phone,
        company,
        id,
        status = id < 6 ? "Active" : "Inactive",
      }) =>
        table_info.insertAdjacentHTML(
          "beforeBegin",
          `
            <td class="tb_name">${name}</td>
            <td class="tb_name"> ${company.name}</td>
            <td class="tb_name"> ${phone}</td>
            <td class="tb_name"> ${email}</td>
            <td class="tb_name"> ${address.city}</td>
            <td class="tb_name" > 
            <p  class="${
              status === "Active" ? "active_status" : "inactive_status"
            }"> ${status}</p>
            </td> 
          `
        )
    )
    .join("");
}

function onHeaderNavClick(e) {
  body.addEventListener("click", onBodyClick);
  header_list.classList.toggle("active");
  body.classList.toggle("active");
}

function onBodyClick(e) {
  console.dir(e);
  if (
    e.target.className === "main_container" ||
    e.target.className === "header_container" ||
    e.target.className === "tb_name" ||
    e.target.className === "table_header"
  ) {
    header_list.classList.remove("active");
    body.classList.remove("active");
  }
}

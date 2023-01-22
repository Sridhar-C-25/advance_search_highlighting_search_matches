const input = document.getElementById("input");
const list = document.querySelector(".list .list-group").querySelectorAll("li");

function filter_list() {
  let result = new RegExp(input.value, "i");

  list.forEach((item) => {
    if (result.test(item.textContent)) {
      item.innerHTML = item.textContent.replace(
        result,
        '<b style="color:#ebae00">$&</b>'
      );
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Collect all prices
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((cell) => {
    total += parseInt(cell.textContent) || 0; // handle editable values
  });

  // Remove old ans row if exists (avoid duplicates)
  const oldAns = document.getElementById("ans");
  if (oldAns) oldAns.remove();

  // Create new row with id="ans"
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.id = "ans";
  newCell.setAttribute("colspan", "2");
  newCell.style.fontWeight = "bold";
  newCell.style.textAlign = "center";
  newCell.textContent = total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

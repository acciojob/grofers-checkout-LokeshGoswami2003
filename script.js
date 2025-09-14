const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all the price cells
  const prices = document.querySelectorAll(".price");
  
  let total = 0;
  prices.forEach((priceCell) => {
    total += parseInt(priceCell.textContent);
  });

  // Create a new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Span across both columns
  newCell.setAttribute("colspan", "2");
  newCell.style.fontWeight = "bold";
  newCell.style.textAlign = "center";
  newCell.textContent = `Total Price = Rs ${total}`;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


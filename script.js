const closeSelectionModalBtn = document.getElementById("closeSelectionModalBtn");
const selectRewardBtn = document.getElementById("selectReward-btn");
const selectionModal = document.getElementById("selectionModal");
const contineBtn = document.getElementById("contineBtn");
const radio = document.querySelectorAll("radio");
const pledgeContainer = document.getElementById("pledgeContainer");
const article = document.getElementById("article");


selectRewardBtn.addEventListener("click", () => {
  selectionModal.style.display = "flex";
})
closeSelectionModalBtn.addEventListener("click", () => {
  selectionModal.style.display = "none";
})
radio.addEventListener("click", () => {
  article.style.display = "flex";
})


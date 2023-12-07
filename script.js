const closeSelectionModalBtn = document.getElementById("closeSelectionModalBtn");
const selectRewardBtn = document.getElementById("selectReward-btn");
const selectionModal = document.getElementById("selectionModal");
const continueBtn = document.getElementById("continueBtn");



function showInfo() {
  const bambooOptionInfo = document.getElementById('bambooOptionInfo');
  const blackOptionInfo = document.getElementById('bambooOptionInfo');


  const selectedOption = document.querySelector('input[name="selected"]:checked').value;

  if (selectedOption === 'bambooOption') {
    bambooOptionInfo.style.display = 'block';
  } else if (selectedOption === 'blackOption') {
    blackOptionInfo.style.display = 'block';
  }
}

















let totalPledged = 89914; // Default amount already pledged
let pledgeCount = 56; // Counter for the number of people pledged
const maxAmount = 100000;





function makePledge() {

}

function updateProgress() {
  const progressBar = document.getElementById('progressBar');
  const pledgeCountElement = document.getElementById('pledgeCount');
  
  const percentage = (totalPledged / maxAmount) * 100;
  progressBar.style.width = percentage + '%';
  pledgeCountElement.textContent = pledgeCount;
}



//Button Reactions
selectRewardBtn.addEventListener("click", () => {
  selectionModal.style.display = "flex";
})
closeSelectionModalBtn.addEventListener("click", () => {
  selectionModal.style.display = "none";
})


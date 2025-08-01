// Fetch intern data from backend API
fetch("http://localhost:3000/api/intern")
  .then(res => res.json())
  .then(data => {
    document.getElementById("internName").textContent = data.name;
    document.getElementById("referralCode").textContent = data.referralCode;
    document.getElementById("donations").textContent = data.totalDonations;

    const rewardsList = document.getElementById("rewardsList");
    data.rewards.forEach(reward => {
      const li = document.createElement("li");
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  })
  .catch(err => {
    console.error("Error fetching intern data:", err);
  });

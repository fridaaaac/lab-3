const images = {
  seed: "images/image1.jpg",
  bloom: "images/image2.jpg",
  wither: "images/image3.jpg"
};

const versions = {
  A: {
    order: ["seed", "bloom", "wither"],
    stages: ["Beginning", "Middle", "End"],
    names: ["Seed", "Blooming Flower", "Withered Flower"],
    captions: [
      "It is a small seed. Everything starts here🍃.",
      "The seed grows and the flower is beautiful.",
      "The flower dies. This is how life goes."
    ]
  },
  B: {
    order: ["wither", "seed", "bloom"],
    stages: ["Beginning", "Middle", "End"],
    names: ["Withered Flower", "Seed", "Blooming Flower"],
    captions: [
      "The flower has already withered🥀.",
      "But wait. There is a seed. It can start again.",
      "The flower blooms again. There is hope."
    ]
  }
};

let currentVersion = "A";

function showVersion(version) {
  currentVersion = version;
  const data = versions[version];

  for (let i = 1; i <= 3; i++) {
    const imageKey = data.order[i - 1];
    document.getElementById("img" + i).src = images[imageKey];
    document.getElementById("img" + i).alt = data.names[i - 1];
    document.getElementById("stage" + i).textContent = data.stages[i - 1];
    document.getElementById("name" + i).textContent = data.names[i - 1];
    document.getElementById("cap" + i).textContent = data.captions[i - 1];
  }

  document.getElementById("btnA").className = (version === "A") ? "active" : "";
  document.getElementById("btnB").className = (version === "B") ? "active" : "";
}

document.getElementById("btnA").addEventListener("click", function () {
  showVersion("A");
});

document.getElementById("btnB").addEventListener("click", function () {
  showVersion("B");
});

showVersion("A");

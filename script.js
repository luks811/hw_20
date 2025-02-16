document.addEventListener("keydown", function(event) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 320; // 300px ширина зображення + 20px відступ
  
    if (event.key === "ArrowRight") {
      gallery.scrollLeft += scrollAmount;
    } else if (event.key ==="ArrowLeft") {
      gallery.scrollLeft -= scrollAmount;
    }
  });
  

  //Тут випадкова колекція rgb
function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  

  function createBoxes(amount) {
    const boxesContainer = document.getElementById("boxes");
    boxesContainer.innerHTML = ""; // Очищає контейнер перед створенням нових елементів
    let size = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomRgbColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
  }
  
  // Очищає колекцію елементів
  function destroyBoxes() {
    document.getElementById("boxes").innerHTML = "";
  }
  
  // Додає обробники подій для кнопок
  document.querySelector('[data-action="render"]').addEventListener("click", () => {
    const amount = Number(document.querySelector("#controls input").value);
    createBoxes(amount);
  });
  
  document.querySelector('[data-action="destroy"]').addEventListener("click", destroyBoxes);
  
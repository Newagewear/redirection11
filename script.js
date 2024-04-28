var count = 0;

const links = ["https://wa.link/eo94th", "https://wa.link/od5lfi", "https://wa.link/w1y79s"];

const onClickHandler = () => {
  window.open(links[count], "_blank");
  count = count + 1;

  if (count === links.length) {
    count = 0;
  }

  return;

}

document.getElementById("whatsapp-button").addEventListener("click", () => onClickHandler())
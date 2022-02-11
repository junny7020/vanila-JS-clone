// Used ColorZilla extension for background colour

function handleWindowResize() {
  const width = window.innerWidth;
  let backgroundColour = "#904EAD";
  if (width > 700) {
    backgroundColour = "#EEBC12";
  } else if (width < 400) {
    backgroundColour = "#2E8CD5";
  }
  document.body.style.backgroundColor = backgroundColour;
}

window.addEventListener("resize", handleWindowResize);

function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

/*Função para acender as luzes, pode usar tbm para simplificar:  
  funcition toggMode() {
  const html = documentElement
  html.classList.toggle ('light')
} */

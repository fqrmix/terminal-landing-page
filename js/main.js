const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '750px',
    height: '680px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.g.style.opacity="0.95"
      this.setBackground('#3c3836')
    },
    onblur: function () {
      this.g.style.opacity="0.75"
    },
  })
});

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '750px',
    height: '340px',
    y: "bottom",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent,
    onfocus: function () {
      this.g.style.opacity="0.95"
      this.setBackground('#3c3836')
    },
    onblur: function () {
      this.g.style.opacity="0.75"
    },
  })
})

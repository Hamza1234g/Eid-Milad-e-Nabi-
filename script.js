<meta name='viewport' content='width=device-width, initial-scale=1'/><script>// Function for showing Dua on home page
function showDua() {
  alert("اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ");
}

// Guestbook / Contact Form code
function loadMessages() {
  const messageList = document.getElementById('messageList');
  if (!messageList) return; // Only run on contact.html

  const saved = JSON.parse(localStorage.getItem('guestMessages')) || [];
  messageList.innerHTML = "";
  saved.forEach(msg => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<strong>${msg.name}</strong> (${msg.email}) <br> ${msg.text}`;
    messageList.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('guestForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const text = document.getElementById('message').value;

      const newMessage = { name, email, text };
      const saved = JSON.parse(localStorage.getItem('guestMessages')) || [];
      saved.push(newMessage);
      localStorage.setItem('guestMessages', JSON.stringify(saved));

      form.reset();
      loadMessages();
    });
    loadMessages();
  }
});</script>
<meta name='viewport' content='width=device-width, initial-scale=1'/><script><meta name='viewport' content='width=device-width, initial-scale=1'/>
<script>
// ===============================
// 📿 Show Random Dua on Home Page
// ===============================
function showDua() {
  const duas = [
    "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
    "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ",
    "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْجَنَّةِ",
    "اللَّهُمَّ اغْفِرْ لَنَا وَارْحَمْنَا"
  ];
  const randomDua = duas[Math.floor(Math.random() * duas.length)];
  alert(randomDua);
}

// ===================================
// 📬 Guestbook / Contact Form Storage
// ===================================
function loadMessages() {
  const messageList = document.getElementById('messageList');
  if (!messageList) return; // Only run on contact.html

  const saved = JSON.parse(localStorage.getItem('guestMessages')) || [];
  messageList.innerHTML = "";

  if (saved.length === 0) {
    messageList.innerHTML = "<p>No messages yet. Be the first to write! 🌸</p>";
  }

  saved.forEach(msg => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
      <strong>${msg.name}</strong> (${msg.email}) <br>
      <p>${msg.text}</p>
      <hr>
    `;
    messageList.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('guestForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const text = document.getElementById('message').value.trim();

      if (!name || !email || !text) {
        alert("⚠️ Please fill out all fields before submitting.");
        return;
      }

      const newMessage = { name, email, text, date: new Date().toLocaleString() };

      const saved = JSON.parse(localStorage.getItem('guestMessages')) || [];
      saved.push(newMessage);
      localStorage.setItem('guestMessages', JSON.stringify(saved));

      form.reset();
      loadMessages();
    });
    loadMessages();
  }
});
</script></script>
// Coba autoplay musik saat halaman dibuka
window.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play().catch((e) => {
      console.warn('Autoplay gagal. Musik akan diputar setelah interaksi.');
    });
  });
  

  const crushName = "Aliya Kamila"; 
  document.getElementById('crushName').innerText = crushName;
  
  // Tampilkan pesan dan mulai musik jika belum
  document.getElementById('confessBtn').addEventListener('click', () => {
    document.getElementById('message').classList.remove('hidden');
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic.paused) {
      bgMusic.play().catch(err => {
        console.log("Autoplay gagal, user harus interaksi dulu:", err);
      });
    }
  });
  
  // Hati jatuh
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 10 + 10) + "px";
    document.getElementById('heartContainer').appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  setInterval(createHeart, 300);
  
  // Kirim jawaban ke WhatsApp
  document.getElementById('responseForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const message = document.querySelector('textarea').value;
    const phone = '6281523994879';
  
    if (!message.trim()) {
      alert('Tolong isi dulu pesannya ya 😁');
      return;
    }
  
    const encodedMessage = encodeURIComponent(`Hai Afiq:\n\n"${message}"`);
    const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;
  
    window.open(waLink, '_blank');
  });
  
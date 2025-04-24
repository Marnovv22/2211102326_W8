$(document).ready(function() {
  // Animasi paragraf satu per satu
  setTimeout(() => $("#par1").addClass("show"), 500);
  setTimeout(() => $("#par2").addClass("show"), 1500);
  setTimeout(() => $("#par3").addClass("show"), 2500);
  setTimeout(() => $("#par4").addClass("show"), 3500);

  // Tampilkan Alert Box saat tombol ditekan dengan animasi
  $("#btnKejutan").click(function() {
    $(this).addClass('animate__animated animate__pulse');
    setTimeout(() => {
      $(this).removeClass('animate__animated animate__pulse');
    }, 1000);
    
    Swal.fire({
      title: 'Makna Persahabatan',
      html: `<p>Cerpen ini mengajarkan kita tentang:</p>
            <ul class="text-start">
              <li>Kepedulian terhadap sahabat di saat sulit</li>
              <li>Ketulusan dalam membantu tanpa pamrih</li>
              <li>Berbagi adalah cara indah mempererat persahabatan</li>
              <li>Saling membantu di kala susah maupun senang</li>
            </ul>
            <p class="mt-3">Seperti Ani dan Lia, persahabatan sejati adalah tentang saling melengkapi dan membantu satu sama lain 💙</p>`,
      icon: 'info',
      confirmButtonText: 'Sungguh Menginspirasi!',
      background: 'linear-gradient(135deg, #fff, #e6f2ff)',
      color: '#333',
      confirmButtonColor: '#FF9370'
    });
  });
});
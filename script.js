document.addEventListener('DOMContentLoaded', () => {

  /* ===== ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ ===== */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');

  // Проверяем сохранённую тему или системные настройки
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  const setTheme = (theme) => {
    if (theme === 'light') {
      document.body.classList.add('light');
      themeIcon.textContent = '🌙';
    } else {
      document.body.classList.remove('light');
      themeIcon.textContent = '☀️';
    }
    localStorage.setItem('theme', theme);
  };

  // Применяем тему при загрузке
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersLight) {
    setTheme('light');
  }

  // Обработчик клика
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
  });

  /* ===== АНИМАЦИЯ ПОЛОСОК НАВЫКОВ ===== */
  const skillFills = document.querySelectorAll('.skill-fill');

  const animateSkills = () => {
    skillFills.forEach(fill => {
      const rect = fill.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        fill.style.width = fill.dataset.width;
      }
    });
  };

  window.addEventListener('scroll', animateSkills);
  animateSkills();

  /* ===== ПЛАВНАЯ ПРОКРУТКА ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
/* ══════════════════════════════════════════
   PARTICLES CANVAS
══════════════════════════════════════════ */
(function () {
  const c = document.getElementById('canvas');
  const ctx = c.getContext('2d');
  let W, H, pts = [], mx = -999, my = -999;

  function resize() {
    W = c.width = c.offsetWidth;
    H = c.height = c.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class P {
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - .5) * .36;
      this.vy = (Math.random() - .5) * .36;
      this.r  = Math.random() * 1.4 + .4;
      this.a  = Math.random() * .42 + .08;
      this.col = Math.random() > .5 ? '79,142,255' : '139,92,246';
    }
    constructor() { this.reset(); }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.col},${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) pts.push(new P());

  function drawLines() {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(79,142,255,${.1 * (1 - d / 120)})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
      const d = Math.hypot(pts[i].x - mx, pts[i].y - my);
      if (d < 150) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(mx, my);
        ctx.strokeStyle = `rgba(79,142,255,${.2 * (1 - d / 150)})`;
        ctx.lineWidth = .8;
        ctx.stroke();
      }
    }
  }

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  })();

  window.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
})();


/* ══════════════════════════════════════════
   CURSEUR CUSTOM
══════════════════════════════════════════ */
const dot  = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');
let mx2 = 0, my2 = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx2 = e.clientX; my2 = e.clientY; });

(function cursorLoop() {
  rx += (mx2 - rx) * .13;
  ry += (my2 - ry) * .13;
  dot.style.left  = mx2 + 'px';
  dot.style.top   = my2 + 'px';
  ring.style.left = rx  + 'px';
  ring.style.top  = ry  + 'px';
  requestAnimationFrame(cursorLoop);
})();

document.querySelectorAll('a, button, .sk-card, .proj-card, .ch-card, .info-chip').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hov'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hov'));
});


/* ══════════════════════════════════════════
   NAV — effet au scroll
══════════════════════════════════════════ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 50));


/* ══════════════════════════════════════════
   MENU MOBILE
══════════════════════════════════════════ */
function toggleMenu() {
  const m    = document.getElementById('mob-menu');
  const open = m.classList.toggle('open');
  document.getElementById('hbg-1').style.transform = open ? 'translateY(6.5px) rotate(45deg)'  : '';
  document.getElementById('hbg-2').style.opacity   = open ? '0' : '1';
  document.getElementById('hbg-3').style.transform = open ? 'translateY(-6.5px) rotate(-45deg)' : '';
}

function closeMenu() {
  document.getElementById('mob-menu').classList.remove('open');
  document.getElementById('hbg-1').style.transform = '';
  document.getElementById('hbg-2').style.opacity   = '1';
  document.getElementById('hbg-3').style.transform = '';
}


/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: .08 });

document.querySelectorAll('.sr').forEach(el => observer.observe(el));


/* ══════════════════════════════════════════
   SCROLL HINT FADE
══════════════════════════════════════════ */
const scrollHint = document.getElementById('scroll-hint');
window.addEventListener('scroll', () => {
  if (scrollHint) scrollHint.style.opacity = Math.max(0, 1 - scrollY / 240);
});

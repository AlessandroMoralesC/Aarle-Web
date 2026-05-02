"use strict";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

// Actualiza aqui los enlaces oficiales, telefono, correo y redes sociales cuando cambien.
const config = {
  radioSchedule: "Sabados de 4:00 p.m. a 5:00 p.m.",
  whatsapp: "https://wa.me/51982279793",
  facebook: "https://www.facebook.com/profile.php?id=100084520611612",
  instagram: "https://www.instagram.com/aarle_ves/",
  tiktok: "https://www.tiktok.com/@aarle.ves"
};

// Actualiza aqui las actividades nuevas. Agrega imagen, fecha, lugar, categoria y descripcion.
const activities = [
  {
    title: "Salida comunitaria por San Valentin",
    date: "14/02/2025",
    place: "Villa El Salvador",
    category: "Actividad comunitaria",
    image: "./assets/images/actividad1-3.jpg",
    description: "Compartimos momentos de integracion y reflexion sobre afectos, respeto y convivencia saludable."
  },
  {
    title: "Taller audiovisual",
    date: "08/02/2025",
    place: "Espacio formativo AARLE-VES",
    category: "Taller de liderazgo",
    image: "./assets/images/actividad1-1.jpg",
    description: "Aprendimos a crear proyectos audiovisuales con trabajo en equipo, comunicacion y mirada social."
  },
  {
    title: "Reunion de coordinaciones",
    date: "30/01/2025",
    place: "Villa El Salvador",
    category: "Participacion ciudadana",
    image: "./assets/images/reunion1-1.jpg",
    description: "Coordinamos acciones para participar en espacios comunitarios y fortalecer la agenda juvenil."
  },
  {
    title: "Reunion de inicio de ano",
    date: "20/01/2025",
    place: "Villa El Salvador",
    category: "Organizacion juvenil",
    image: "./assets/images/reunionAÑO.jpg",
    description: "Iniciamos el ano compartiendo dinamicas, metas y una invitacion a nuevas lideresas y lideres escolares."
  }
];

const radioTopics = [
  "Violencia y prevencion",
  "Racismo y discriminacion",
  "Liderazgo juvenil",
  "Participacion ciudadana",
  "Derechos estudiantiles",
  "Convivencia escolar"
];

const socialTopics = [
  ["shield-checkmark-outline", "Prevencion de la violencia", "Promovemos convivencia, cuidado y rutas de apoyo para estudiantes y comunidad."],
  ["earth-outline", "Lucha contra el racismo", "Abrimos dialogos para reconocer, cuestionar y enfrentar la discriminacion."],
  ["megaphone-outline", "Liderazgo estudiantil", "Fortalecemos vocerias, municipios escolares y capacidades de organizacion."],
  ["business-outline", "Participacion ciudadana", "Impulsamos jovenes que proponen, fiscalizan y participan en su distrito."],
  ["accessibility-outline", "Igualdad e inclusion", "Defendemos espacios donde todas las voces tengan lugar y respeto."],
  ["school-outline", "Convivencia escolar", "Trabajamos relaciones sanas, empatia y dialogo dentro de colegios."],
  ["heart-circle-outline", "Derechos NNA", "Difundimos derechos de ninas, ninos y adolescentes con lenguaje claro."],
  ["leaf-outline", "Cultura de paz", "Construimos acciones que reducen conflictos y fortalecen comunidad."]
];

// Actualiza aqui los proyectos o iniciativas actuales/futuras de AARLE-VES.
const projects = [
  ["radio-outline", "Participacion en medios comunitarios", "Produccion de contenidos para #ALOLOKU y conversaciones con especialistas.", "Activo"],
  ["people-circle-outline", "Espacios de dialogo juvenil", "Encuentros para escuchar problemas de estudiantes y convertirlos en propuestas.", "En crecimiento"],
  ["school-outline", "Talleres en colegios", "Sesiones sobre liderazgo, derechos, prevencion de violencia e inclusion.", "Disponible"],
  ["ribbon-outline", "Campanas de sensibilizacion", "Acciones por fechas importantes y temas urgentes para Villa El Salvador.", "Planificado"],
  ["hand-left-outline", "Jornadas de integracion", "Actividades de comunidad, valores y colaboracion entre liderazgos escolares.", "Abierto"]
];

// Actualiza aqui imagenes y categorias de la galeria. Puedes reemplazar por fotos reales nuevas.
const galleryItems = [
  ["./assets/images/galeriainicio1.jpg", "Actividades", "Actividad juvenil"],
  ["./assets/images/galeriainicio2.jpg", "Comunidad", "Participacion comunitaria"],
  ["./assets/images/galeriainicio3.jpg", "Talleres", "Trabajo en equipo"],
  ["./assets/images/galeriainicio4.jpg", "Radio", "#ALOLOKU en accion"],
  ["./assets/images/galeriainicio5.jpg", "Actividades", "Momentos que inspiran"],
  ["./assets/images/quienesomos1.jpg", "Nosotros", "Lideres estudiantiles"],
  ["./assets/images/quienesomos2.jpg", "Nosotros", "Organizacion AARLE-VES"],
  ["./assets/images/radiotema1.jpg", "Radio", "Mitos del amor romantico"]
];

// Actualiza aqui las cifras de impacto cuando tengas datos oficiales.
const impactItems = [
  [50, "+", "actividades realizadas"],
  [20, "+", "colegios visitados"],
  [1000, "+", "jovenes impactados"],
  [10, "+", "campanas sociales"],
  [1, "+", "programa radial comunitario"]
];

const defaultForumPosts = [
  {
    name: "AARLE-VES",
    topic: "Bienvenida",
    message: "Este foro puede usarse para recopilar ideas de estudiantes, docentes, vecinos y aliados sociales.",
    date: "Hoy"
  },
  {
    name: "Equipo #ALOLOKU",
    topic: "Propuesta para #ALOLOKU",
    message: "Sugiere temas para futuros programas: convivencia escolar, racismo, violencia, derechos o liderazgo juvenil.",
    date: "Hoy"
  }
];

function renderActivities() {
  const grid = $("#activitiesGrid");
  if (!grid) return;
  grid.innerHTML = activities.map((activity) => `
    <article class="activity-card reveal">
      <img src="${activity.image}" alt="${activity.title}" loading="lazy">
      <div class="body">
        <span class="category">${activity.category}</span>
        <h3>${activity.title}</h3>
        <div class="meta">
          <span>${activity.date}</span>
          <span>${activity.place}</span>
        </div>
        <p>${activity.description}</p>
      </div>
    </article>
  `).join("");
}

function renderRadioTopics() {
  const strip = $("#radioTopics");
  if (!strip) return;
  strip.innerHTML = radioTopics.map((topic) => `<span>${topic}</span>`).join("");
  const scheduleNode = $(".radio-card strong");
  if (scheduleNode) scheduleNode.parentElement.innerHTML = `<strong>Horario referencial:</strong> ${config.radioSchedule}`;
}

function renderSocialTopics() {
  const grid = $("#socialTopicsGrid");
  if (!grid) return;
  grid.innerHTML = socialTopics.map(([icon, title, description]) => `
    <article class="icon-card reveal">
      <ion-icon name="${icon}" aria-hidden="true"></ion-icon>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join("");
}

function renderProjects() {
  const list = $("#projectsList");
  if (!list) return;
  list.innerHTML = projects.map(([icon, title, description, status]) => `
    <article class="project-item reveal">
      <ion-icon name="${icon}" aria-hidden="true"></ion-icon>
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      <span class="status">${status}</span>
    </article>
  `).join("");
}

function renderGallery(filter = "Todos") {
  const grid = $("#galleryGrid");
  if (!grid) return;
  const filtered = filter === "Todos" ? galleryItems : galleryItems.filter((item) => item[1] === filter);
  grid.innerHTML = filtered.map(([src, category, title]) => `
    <button class="gallery-item" type="button" data-src="${src}" aria-label="Ampliar imagen: ${title}">
      <img src="${src}" alt="${title}" loading="lazy">
      <span>${category}</span>
    </button>
  `).join("");
}

function renderGalleryFilters() {
  const filters = $("#galleryFilters");
  if (!filters) return;
  const categories = ["Todos", ...new Set(galleryItems.map((item) => item[1]))];
  filters.innerHTML = categories.map((category, index) => `
    <button type="button" class="${index === 0 ? "is-active" : ""}" data-filter="${category}">${category}</button>
  `).join("");
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    $$(".gallery-filters button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderGallery(button.dataset.filter);
  });
}

function renderImpact() {
  const grid = $("#impactGrid");
  if (!grid) return;
  grid.innerHTML = impactItems.map(([value, prefix, label]) => `
    <article class="impact-card reveal">
      <strong data-count="${value}" data-prefix="${prefix}">0</strong>
      <span>${label}</span>
    </article>
  `).join("");
}

function getForumPosts() {
  const saved = localStorage.getItem("aarleForumPosts");
  return saved ? JSON.parse(saved) : defaultForumPosts;
}

function saveForumPosts(posts) {
  localStorage.setItem("aarleForumPosts", JSON.stringify(posts));
}

function renderForum() {
  const postsNode = $("#forumPosts");
  if (!postsNode) return;
  const posts = getForumPosts();
  postsNode.innerHTML = posts.map((post) => `
    <article class="forum-post">
      <header>
        <span>${post.name}</span>
        <small>${post.date}</small>
      </header>
      <strong>${post.topic}</strong>
      <p>${post.message}</p>
    </article>
  `).join("");
}

function setupForum() {
  const form = $("#forumForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const post = {
      name: data.get("name").trim(),
      topic: data.get("topic"),
      message: data.get("message").trim(),
      date: new Date().toLocaleDateString("es-PE", { day: "2-digit", month: "short", year: "numeric" })
    };
    const posts = [post, ...getForumPosts()];
    saveForumPosts(posts);
    form.reset();
    renderForum();
  });
}

function setupNavigation() {
  const header = $("[data-header]");
  const nav = $("[data-nav]");
  const toggle = $("[data-menu-toggle]");
  const topButton = $("[data-to-top]");

  const updateHeader = () => {
    const isScrolled = window.scrollY > 24;
    header?.classList.toggle("is-scrolled", isScrolled);
    topButton?.classList.toggle("is-visible", window.scrollY > 500);
  };

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = `<ion-icon name="${isOpen ? "close-outline" : "menu-outline"}" aria-hidden="true"></ion-icon>`;
  });

  nav?.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
    if (toggle) toggle.innerHTML = '<ion-icon name="menu-outline" aria-hidden="true"></ion-icon>';
  });

  topButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}

function setupRevealAnimations() {
  const revealElements = () => $$(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  revealElements().forEach((element) => observer.observe(element));
  return () => revealElements().forEach((element) => {
    if (!element.classList.contains("is-visible")) observer.observe(element);
  });
}

function setupCounters() {
  const counters = $$("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const target = Number(node.dataset.count);
      const prefix = node.dataset.prefix || "";
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = `${prefix}${Math.round(target * eased).toLocaleString("es-PE")}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.unobserve(node);
    });
  }, { threshold: 0.55 });
  counters.forEach((counter) => observer.observe(counter));
}

function setupLightbox() {
  const grid = $("#galleryGrid");
  if (!grid) return;
  grid.addEventListener("click", (event) => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <button type="button" aria-label="Cerrar imagen">&times;</button>
      <img src="${item.dataset.src}" alt="">
    `;
    document.body.appendChild(lightbox);
    const close = () => lightbox.remove();
    lightbox.addEventListener("click", (clickEvent) => {
      if (clickEvent.target === lightbox || clickEvent.target.closest("button")) close();
    });
    document.addEventListener("keydown", function esc(eventKey) {
      if (eventKey.key === "Escape") {
        close();
        document.removeEventListener("keydown", esc);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderActivities();
  renderRadioTopics();
  renderSocialTopics();
  renderProjects();
  renderGalleryFilters();
  renderGallery();
  renderImpact();
  renderForum();
  setupForum();
  setupNavigation();
  const observeNewReveals = setupRevealAnimations();
  observeNewReveals();
  setupCounters();
  setupLightbox();
  $("#year").textContent = new Date().getFullYear();
});

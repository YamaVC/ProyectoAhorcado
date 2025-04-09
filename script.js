/*
Proyecto: El ahorcado
Usar: Contadores, Acumuladores, Promedio, Porcentaje, HTML, CSS, JAVASCRIPT 
*/

const palabrasConPistas = [
    { palabra: "MARIO", pista: "Fontanero italiano que salta sobre hongos." },
    { palabra: "ZELDA", pista: "Princesa de Hyrule en una saga de Nintendo." },
    { palabra: "POKEMON", pista: "¡Atrápalos a todos! Criaturas de bolsillo." },
    { palabra: "SONIC", pista: "Erizo veloz que odia la opresión." },
    { palabra: "KIRBY", pista: "Esfera rosa que absorbe todo." },
    { palabra: "METROID", pista: "Cazadora de recompensas en un traje futurista." },
    { palabra: "DONKEYKONG", pista: "Mono grande que le gustan los barriles." },
    { palabra: "PACMAN", pista: "Círculo amarillo que come puntos y fantasmas." },
    { palabra: "TETRIS", pista: "Juego de bloques rusos que caen." },
    { palabra: "MINECRAFT", pista: "Mundo de cubos donde construyes y sobrevives." },
    { palabra: "HALO", pista: "Saga de disparos con un jefe maestro." },
    { palabra: "GEARS", pista: "Shooter con soldados contra seres subterráneos." },
    { palabra: "FORZA", pista: "Juego de carreras realista." },
    { palabra: "FIFA", pista: "Simulador de fútbol con licencias reales." },
    { palabra: "PES", pista: "Rival histórico de FIFA en fútbol virtual." },
    { palabra: "CALLOFDUTY", pista: "Famoso FPS con modos multijugador(devuelvan a los zombies)." },
    { palabra: "BATTLEFIELD", pista: "Guerras a gran escala con destrucción." },
    { palabra: "OVERWATCH", pista: "Hero shooter de Blizzard con personajes únicos (y con rules unicas)." },
    { palabra: "FORTNITE", pista: "Battle Royale con construcciones y bailes." },
    { palabra: "VALORANT", pista: "Shooter táctico con habilidades (no apto para epilecticos)." },
    { palabra: "LOL", pista: "MOBA donde equipos luchan por ver quien se autodestruye primero." },
    { palabra: "DOTA", pista: "MOBA famoso por sus torneos internacionales (Y orgullo de un país)." },
    { palabra: "STARCRAFT", pista: "Estrategia en tiempo real con razas espaciales." },
    { palabra: "WARCRAFT", pista: "Predecesor del MMORPG más famoso." },
    { palabra: "DIABLO", pista: "RPG de mazmorras y loot demoníaco." },
    { palabra: "SKYRIM", pista: "RPG de mundo abierto con dragones y fus ro dah." },
    { palabra: "FALLOUT", pista: "Postapocalipsis nuclear con VATS." },
    { palabra: "WITCHER", pista: "Cazador de monstruos con espadas y brujería." },
    { palabra: "DARKSOULS", pista: "Juego difícil con fogatas y jefes épicos(morir? no opcional)." },
    { palabra: "BLOODBORNE", pista: "Gótico lovecraftiano con transformaciones." },
    { palabra: "RESIDENTEVIL", pista: "Survival horror con zombies y virus." },
    { palabra: "SILENTHILL", pista: "Terror psicológico con niebla y monstruos (Y aliens)." },
    { palabra: "FINALFANTASY", pista: "RPG con espadas, magia y summons." },
    { palabra: "KINGDOMHEARTS", pista: "Disney y Square Enix en un RPG." },
    { palabra: "PERSONA", pista: "RPG japonés con estudiantes, demonios y humor bizarro." },
    { palabra: "UNCHARTED", pista: "Aventurero que busca tesoros perdidos." },
    { palabra: "TOMBRAIDER", pista: "Arqueóloga aventurera con arco y pistolas." },
    { palabra: "GODOFWAR", pista: "Espartano vengativo con cuchillas en cadenadas." },
    { palabra: "HORIZON", pista: "Cazadora en un mundo lleno de máquinas." },
    { palabra: "ASSASSINSCREED", pista: "Asesinos sigilosos en la historia real." },
    { palabra: "CRASH", pista: "Marsupial que rompe cajas y esquiva tortugas." },
    { palabra: "SPYRO", pista: "Dragón morado que escupe fuego." },
    { palabra: "RAYMAN", pista: "Héroe sin brazos ni piernas en mundos surrealistas (Status: fallecido)." },
    { palabra: "MEGAMAN", pista: "Androide azul que copia habilidades de jefes." },
    { palabra: "CS", pista: "Clásico videojuego de los cybers." },
    { palabra: "STREETFIGHTER", pista: "Hadouken! Shoryuken!" },
    { palabra: "MORTALKOMBAT", pista: "¡Fatality! Raiden Wins." },
    { palabra: "TEKKEN", pista: "Lucha 3D con personajes y jugabilidad profunda (Y famoso en Venezuela)." },
    { palabra: "FNAF", pista: "Almas de niños encerrados en muñecos de restaurante de pizzas" },
    { palabra: "ANIMALCROSSING", pista: "Simulador de vida en una isla tranquila (e impuestos)." },
    { palabra: "CELESTE", pista: "Sube la montaña para combatir la depresión y a ti mismo."},
    { palabra: "HOLLOWKNIGHT", pista: "Escarabajo se enfrenta a dios."},
    { palabra: "INAZUMAELEVEN", pista: "niños con super poderes juegan futbol."}
  ];

  let palabraSecreta, pistaActual, vidas, letrasAdivinadas, canvas, ctx;

  const pistaTexto = document.getElementById('pista-texto');
  const palabraContainer = document.getElementById('palabra-container');
  const mensajeJuego = document.getElementById('mensaje-juego');
  const btnReiniciar = document.getElementById('btn-reiniciar');
  
  function iniciarJuego() {
      const indice = Math.floor(Math.random() * palabrasConPistas.length);
      palabraSecreta = palabrasConPistas[indice].palabra;
      pistaActual = palabrasConPistas[indice].pista; /* el math.random genera un numero decimal,lo multiplica por el largo de vector (53) y el math.floor lo redondea al más cercano */
      vidas = 6;
      letrasAdivinadas = [];
  
      canvas = document.getElementById('ahorcado-canvas');
      ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
  
      pistaTexto.textContent = pistaActual;
      actualizarPalabra();
  
      mensajeJuego.textContent = "";
      btnReiniciar.style.display = "none";
  }

  function actualizarPalabra() {
      const palabraOculta = palabraSecreta
          .split('')
          .map(letra => letrasAdivinadas.includes(letra) ? letra : '_')
          .join(' ');
  
      palabraContainer.textContent = palabraOculta;
  
      if (!palabraOculta.includes('_')) {
          mensajeJuego.textContent = "¡Victoria!";
          mensajeJuego.style.color = "#2ecc71";
          btnReiniciar.style.display = "block";
      }
  }
  
  function dibujarAhorcado() {
      switch (vidas) {
          case 5: // Cabeza
              ctx.beginPath();
              ctx.arc(100, 50, 20, 0, Math.PI * 2);
              ctx.stroke();
              break;
          case 4: // Cuerpo
              ctx.moveTo(100, 70);
              ctx.lineTo(100, 120);
              ctx.stroke();
              break;
          case 3: // Brazo izquierdo
              ctx.moveTo(100, 80);
              ctx.lineTo(70, 100);
              ctx.stroke();
              break;
          case 2: // Brazo derecho
              ctx.moveTo(100, 80);
              ctx.lineTo(130, 100);
              ctx.stroke();
              break;
          case 1: // Pierna izquierda
              ctx.moveTo(100, 120);
              ctx.lineTo(70, 150);
              ctx.stroke();
              break;
          case 0: // Pierna derecha (y cara triste)
              ctx.moveTo(100, 120);
              ctx.lineTo(130, 150);
              ctx.stroke();
              // Ojos y boca
              ctx.beginPath();
              ctx.arc(95, 45, 3, 0, Math.PI * 2);
              ctx.arc(105, 45, 3, 0, Math.PI * 2);
              ctx.stroke();
              ctx.beginPath();
              ctx.arc(100, 55, 10, 0, Math.PI);
              ctx.stroke();
              break;
      }
  }

  function adivinarLetra(letra) {
      letra = letra.toUpperCase(); /* convierte todas las letras en mayusculas */
      
      if (vidas <= 0 || letrasAdivinadas.includes(letra)) return; /* identifica si la letra fue adivinada y si aun quedan vidas*/ 
      if (!/[A-Z]/.test(letra)) return; /* verifica si la letra esta entre A-Z */
  
      letrasAdivinadas.push(letra);
  
      if (palabraSecreta.includes(letra)) {
          actualizarPalabra(); /* si la palabra tiene esa letra, se actualiza */
      } else {
          vidas--;
          dibujarAhorcado(); /* actualiza el dibujo y disminuye la vida */
          if (vidas === 0) {
              mensajeJuego.textContent = `¡Perdiste! La palabra era: ${palabraSecreta}`;
              btnReiniciar.style.display = "block";
          }
      } /* si se acaban las vidas, marca la derrota y muestra el boton de volver a jugar */
  }
  
  document.addEventListener('keydown', (e) => {
      if (/^[a-z]$/i.test(e.key)) {
          adivinarLetra(e.key);
      } /* verifica si la tecla presionada esta entre la a-z y si lo esta, la envia */
  });
  
  btnReiniciar.addEventListener('click', iniciarJuego);
  
  window.addEventListener('load', iniciarJuego);
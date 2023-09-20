
//CODIGO UTILIZADO EN LA PRIMER ENTREGA COMENTADO:



// nombre = prompt("¡Bienvenido al simulador de Modo Carrera - Jugador de Fútbol! Prepárate para tomar decisiones que afectarán tu carrera en el mundo del fútbol. Ingresa el nombre con el que quieras iniciar este recorrido.");

// while (nombre === " " || nombre === null) {
//     nombre = prompt("Vamos! Debes ingresar tu nombre para poder comenzar con tu carrera futbolística.");
// }

// alert("Te doy una cálida bienvenida al Modo Carrera, " + nombre + "!");
// alert("Es hora de que elijas un camino para iniciar tu carrera como futbolista. Tu carrera, tus propias decisiones. Cada una de ellas te llevará al éxito o al fracaso. Confía en tu instinto. Sigamos.");

// function choice() {
//   do{
//     posicionElegida = Number(prompt("Ahora dime en que posicion del campo te gustaria jugar: \n1. Delantero  \n2. Mediocampista  \n3. Defensor  \n4. Arquero "))

//   } while (posicionElegida !== 1 && posicionElegida !==2 && posicionElegida !==3 && posicionElegida !==4) 
//         return posicionElegida
    
// }

// const miPosicion = choice()
// if (miPosicion === 1) {
//     alert("Has seleccionado la opcion de Delantero")
// } else if (miPosicion === 2) {
//     alert("Has seleccionado la opcion de Mediocampista")
// } else if (miPosicion === 3) {
//     alert("Has seleccionado la opcion de Defensor")
// }  else if (miPosicion=== 4) {
//     alert("Has seleccionado la opcion de Arquero")
// }
   


// alert("Llegó el día, " + nombre + ". Tienes dos ofertas sobre la mesa.");

// function decision() {
//     do {
//         tuCamino = Number(prompt("1. Unirte a un club grande en una liga competitiva, donde no tendrás muchos minutos de juego pero un gran salario.\n2. Unirte a un club más pequeño con un entrenador reconocido por desarrollar talento, donde tendrás más minutos de juego pero ganarás menos dinero."));
//     } while (tuCamino !== 1 && tuCamino !== 2)

//     return tuCamino;
// }

// const caminoElegido = decision();
// if (caminoElegido === 1) {
//     alert("Has decidido unirte a un club grande. Prepárate para enfrentar los desafíos y las expectativas.");
// } else if (caminoElegido === 2) {
//     alert("Has decidido unirte a un club más pequeño. ¡Tu talento y dedicación te llevarán lejos!");
// } 




// function clubesProyeccion(){
    
//     if (tuCamino === 2){
//         do {
//             clubProyeccion= Number(prompt("Los clubes con proyeccion que buscan un jugador con tus caracteristicas, " + nombre + "son los siguientes: \n1. Brighton \n2. Atalanta \n3. Talleres de Cordoba"))
//            } while (clubProyeccion !== 1 && clubProyeccion !== 2 && clubProyeccion !== 3)

//        return clubProyeccion
    
//         }
//     }
    

// const clubSeleccionado = clubesProyeccion()
// if (clubSeleccionado === 1){
//     alert("Tomaste la decision de fichar por el Brighton! Felicitaciones, " + nombre)
// } else if (clubSeleccionado === 2){
//     alert("Tomaste la decision de fichar por el Atalanta! Felicitaciones, " + nombre)
// } else if (clubSeleccionado === 3){
//     alert("Tomaste la decision de fichar por Talleres de Cordoba! Felicitaciones, " + nombre)
// }




// function clubesGrandes() {
     
//     if (tuCamino === 1 ){
//         do {
//             clubGrandeElegido= Number(prompt("Los clubes grandes que buscan un jugador con tus caracteristicas, " + nombre + " son los siguientes: \n1. Chelsea \n2. Ajax  \n3. Boca Juniors"))
//            } while (clubGrandeElegido !== 1 && clubGrandeElegido !== 2 && clubGrandeElegido !== 3)

//        return clubGrandeElegido

//        }
//     }
   

// const clubElegido = clubesGrandes()
// if (clubElegido === 1){
//     alert("Tomaste la decision de fichar por el Chelsea! Felicitaciones, " + nombre)
// } else if (clubElegido === 2){
//     alert("Tomaste la decision de fichar por el Ajax! Felicitaciones, " + nombre)
// } else if (clubElegido === 3){
//     alert("Tomaste la decision de fichar por Boca Juniors! Felicitaciones, " + nombre)  
// }



// mensaje = alert("¿Que sucedera con la carrera de tu jugador? Proximamente en la segunda entrega")




//MEJORA DE CODIGO IMPLEMENTADA EN LA SEGUNDA PRE ENTREGA CON COMENTARIOS INCLUDIOS, COMO FUERON ESPECIFICADOS Y DE GRAN AYUDA POR PARTE DEL TUTOR:

//Agregue objetos, arrays, uso de find y filter al codigo.
  

// Declare un objeto para almacenar la información del jugador
const jugador = {
    nombre: "",
    posicion: "",
    caminoElegido: "",
    clubSeleccionado: "",
    mensaje: ""
  };
  
  // Luego tome la opcion de declarar un array para almacenar los clubes con proyección
  const clubesProyeccion = [
    { id: 1, nombre: "Brighton", salario: 500000 },
    { id: 2, nombre: "Atalanta", salario: 400000 },
    { id: 3, nombre: "Talleres de Córdoba", salario: 200000 }
  ];
  
  // Hice lo mismo con  los clubes grandes
  const clubesGrandes = [
    { id: 1, nombre: "Chelsea", salario: 800000 },
    { id: 2, nombre: "Ajax", salario: 600000 },
    { id: 3, nombre: "Boca Juniors", salario: 400000 }
  ];
  
  // Función para obtener la elección de la posición
  function choice() {
    let posicionElegida;
    do {
      posicionElegida = Number(prompt("Ahora dime en qué posición del campo te gustaría jugar: \n1. Delantero  \n2. Mediocampista  \n3. Defensor  \n4. Arquero "));
    } while (posicionElegida !== 1 && posicionElegida !== 2 && posicionElegida !== 3 && posicionElegida !== 4);
  
    // Almacenar la posición en el objeto del jugador
    switch (posicionElegida) {
      case 1:
        jugador.posicion = "Delantero";
        break;
      case 2:
        jugador.posicion = "Mediocampista";
        break;
      case 3:
        jugador.posicion = "Defensor";
        break;
      case 4:
        jugador.posicion = "Arquero";
        break;
    }
  
    return posicionElegida;
  }
  
  nombre = prompt("¡Bienvenido al simulador de Modo Carrera - Jugador de Fútbol! Prepárate para tomar decisiones que afectarán tu carrera en el mundo del fútbol. Ingresa el nombre con el que quieras iniciar este recorrido.");
  
  while (nombre === " " || nombre === null) {
    nombre = prompt("Vamos! Debes ingresar tu nombre para poder comenzar con tu carrera futbolística.");
  }
  
  alert("Te doy una cálida bienvenida al Modo Carrera, " + nombre + "!");
  alert("Es hora de que elijas un camino para iniciar tu carrera como futbolista. Tu carrera, tus propias decisiones. Cada una de ellas te llevará al éxito o al fracaso. Confía en tu instinto. Sigamos.");
  
  const miPosicion = choice();
  if (miPosicion === 1) {
    alert("Has seleccionado la opción de Delantero")
  } else if (miPosicion === 2) {
    alert("Has seleccionado la opción de Mediocampista")
  } else if (miPosicion === 3) {
    alert("Has seleccionado la opción de Defensor")
  } else if (miPosicion === 4) {
    alert("Has seleccionado la opción de Arquero")
  }
  
  alert("Llegó el día, " + nombre + ". Tienes dos ofertas sobre la mesa.");
  
  function decision() {
    let tuCamino;
    do {
      tuCamino = Number(prompt("1. Unirte a un club grande en una liga competitiva, donde no tendrás muchos minutos de juego pero un gran salario.\n2. Unirte a un club más pequeño con un entrenador reconocido por desarrollar talento, donde tendrás más minutos de juego pero ganarás menos dinero."));
    } while (tuCamino !== 1 && tuCamino !== 2)
  
    // Almacenar el camino elegido en el objeto del jugador
    jugador.caminoElegido = tuCamino;
  
    return tuCamino;
  }
  
  const caminoElegido = decision();
  if (caminoElegido === 1) {
    alert("Has decidido unirte a un club grande. Prepárate para enfrentar los desafíos y las expectativas.");
  } else if (caminoElegido === 2) {
    alert("Has decidido unirte a un club más pequeño. ¡Tu talento y dedicación te llevarán lejos!");
  }
  
  // Función para mostrar información detallada de un club
  function mostrarInfoClub(clubId, clubArray) {
    const club = clubArray.find(c => c.id === clubId);
    if (club) {
      alert(`Tomaste la decisión de fichar por ${club.nombre}!\nSalario: $${club.salario}`);
    }
  }
  
  // Mostrar información detallada del club seleccionado según el camino elegido
  if (jugador.caminoElegido === 1) {
    let clubGrandeElegido;
    do {
      clubGrandeElegido = Number(prompt("Los clubes grandes que buscan un jugador con tus características, " + nombre + " son los siguientes: \n1. Chelsea \n2. Ajax  \n3. Boca Juniors"));
    } while (clubGrandeElegido !== 1 && clubGrandeElegido !== 2 && clubGrandeElegido !== 3)
  
    // Almacenar el club elegido en el objeto del jugador
    jugador.clubSeleccionado = clubGrandeElegido;
  
    mostrarInfoClub(jugador.clubSeleccionado, clubesGrandes);
  } else if (jugador.caminoElegido === 2) {
    let clubProyeccion;
    do {
      clubProyeccion = Number(prompt("Los clubes con proyección que buscan un jugador con tus características, " + nombre + " son los siguientes: \n1. Brighton \n2. Atalanta \n3. Talleres de Córdoba"));
    } while (clubProyeccion !== 1 && clubProyeccion !== 2 && clubProyeccion !== 3)
  
    // Almacenar el club elegido en el objeto del jugador
    jugador.clubSeleccionado = clubProyeccion;
  
    mostrarInfoClub(jugador.clubSeleccionado, clubesProyeccion);
  }
  
  // Simular eventos adicionales en la carrera del jugador
  function simularEventos() {
    const eventos = [
      "Has tenido una destacada actuación en tu último partido y has ganado notoriedad en el mundo del fútbol.",
      "Lamentablemente, has sufrido una lesión que te mantendrá fuera de las canchas por varios meses.",
      "Tu rendimiento ha sido inconsistente en los últimos partidos, y tu entrenador está considerando relegarte al banquillo.",
      "Has recibido una oferta de un club extranjero de alto nivel. Debes decidir si te quedas en tu club actual o te mudas al extranjero."
    ];
  
    const eventoAleatorio = eventos[Math.floor(Math.random() * eventos.length)];
  
    alert(eventoAleatorio);
  }
  
  // Ejecutar eventos adicionales en la carrera del jugador para mayor interaccion
  simularEventos();
  
  mensaje = alert("Esto recien empieza. Que sucedera con la carrera de tu jugador?. Continuaremos en la siguiente entrega..");
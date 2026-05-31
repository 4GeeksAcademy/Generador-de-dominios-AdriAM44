  // arrays con las palabras
  let pronoun = ['El', 'nuestro', 'Su'];
  let adj = ['Genial', 'Grande', 'Asombroso' ];
  let noun = ['Zarigüeya', 'Mapache', 'Perro', 'Comerciante', 'Conductor'];
  
  // genera dominios
  for(let i = 0; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
      for(let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k]+'.com'); 
      }
    }
  }
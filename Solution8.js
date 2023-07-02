let drinks = new Map([

    ["lemonade", "sweet"],
  
    ["water", "plain"],
  
    ["tonic", "sour"]
  
  ]);
  for (let drinks of drinks.entries()) {
  
    console.log(`Ключ = ${drinks[0]}, значение = ${drinks[1]}`);
  }
const burguer = [
    { id: 1, burguer: "Criolla", precio: 780 },
    { id: 2, burguer: "Súper Bocado ", precio: 890 },
    { id: 3, burguer: "Campestre", precio: 650 },
    { id: 4, burguer: "Bacon Especial", precio: 990 }];

const drink = [
    { id: 1, drink: "Coca cola 2l", precio: 200 },
    { id: 2, drink: "Sprite 2l", precio: 200 },
    { id: 3, drink: "Coca cola 500ml", precio: 110 },
    { id: 4, drink: "Sprite 500ml", precio: 110 },
    { id: 5, drink: "Cerveza Artesanal de la casa 500ml", precio: 380 }];

const accompaniment = [
    { id: 1, accompaniment: "papas fritas", precio: 250 },
    { id: 2, accompaniment: "aros de cebolla", precio: 250 },
    { id: 3, accompaniment: "papas con cheddar", precio: 350 },
    { id: 4, accompaniment: "nuggets", precio: 400 },
    { id: 5, accompaniment: "papas fritas con bacon", precio: 380 }];


let costoFinal = [];

let comboBurguer =
    parseInt(
        prompt(
            'Elija la Hamburguesa que desee ingresando el número: 1- Criolla $780, 2- Súper Bocado $890, 3- Campestre $650, 4- Bacon Especial $990.'));
           //que el resultado de comboBurguer recorra el array Burguer y busque si hay un id igual, si es asi, será igual al ítem del ID.
         for (let comboBurguer of burguer) {
             if (comboBurguer === burguer.id) {
                 costoFinal.push(comboBurguer);
             }
           
          console.log(comboBurguer);
        }

        // let comboBurguer = burguer.find(element=>element = id);

costoFinal.push(comboBurguer);

let comboDrink =
    parseInt(
        prompt(
            'Elija la Bebida que desee ingresando el número: 1- Coca-cola 2l $200, 2- Sprite 2l $200, 3- Coca-cola 500ml $110, 4- Sprite 500ml $110, 5- Cerveza Artesanal $380.'));

            for (let comboDrink of drink) {
                if (comboDrink === drink.id) {
                    costoFinal.push(comboDrink);
                }
              
             console.log(comboDrink);
           }
   
let comboAccompaniment =
    parseInt(
        prompt(
            'Elija el acompañamiento que desee ingresando el número: 1- Papas fritas $250, 2- Aros de Cebolla $250, 3- Papas con cheddar $350, 4- Papas fritas con bacon $380, 5- Nuggets $400.'));

            for (let comboAccompaniment of accompaniment) {
                if (comboAccompaniment === accompaniment.id) {
                    costoFinal.push(comboAccompaniment);
                }
              
             console.log(comboAccompaniment);
           }
   

console.log(costoFinal.costoFinal);
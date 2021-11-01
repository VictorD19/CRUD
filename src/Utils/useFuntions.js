export const getId = () => {
    const nro = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    const abc = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "k"];
    
    let id='';
    for (let i = 0; i < abc.length; i++) {
      let rando = Math.floor(Math.random()*(9-1)+1);
      i %2 === 0 ? id += abc[rando] :  id += nro[rando]
    }
    return id;
  };


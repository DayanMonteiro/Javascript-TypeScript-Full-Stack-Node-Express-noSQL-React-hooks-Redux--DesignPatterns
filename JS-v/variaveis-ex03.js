(( ) => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    if(true) {
        let test = 'valor  de outro if';
        console.log(`Valor dentro do outro if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}`);
})();


/*
Valor dentro da função "valor função"
Valor dentro do if "valor if"
Valor dentro do outro if "valor  de outro if"
Valor após a execução do if "valor função
*/
const DATA = [
        "bola", 
        "gato", 
        "caneta", 
        "lapis", 
        "espesso", 
        "mesquita", 
        "donzela", 
        "charuto", 
        "sardinha",
        "piso",
        "pratos",
        "coador",
        "toalha", 
        "veredito",
        "vizinhos",
        "mentira",
        "tigela",
        "escritores",
        "catedral",
        "ossos",
        "pêssego",
        "mendigo",
        "filha",
        "fofoca",
        "cabana",
        "amigo",
]
export default function GenerateAnswer(word){
    let answers = [];
    for(let i = 0; i < 3; i++){
        let elementRandom = DATA[Math.floor(Math.random() * DATA.length)];
        if(DATA.indexOf(elementRandom) > -1)
            answers.push(elementRandom);
        else    
            answers.push(DATA[Math.floor(Math.random() * DATA.length)]);
    }
    if(word) answers.push(word);
    else  answers.push("nulo");

    let indice = answers.length;

    while(indice){
        const indiceRandon = Math.floor(Math.random() * indice--);
        [answers[indice], answers[indiceRandon]] = [answers[indiceRandon], answers[indice]]; 
    }
    return answers;
}
const DATA = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]


export default function GenerateAnswer(word){
    let answers = [];
    for(let i = 0; i < 3; i++){
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
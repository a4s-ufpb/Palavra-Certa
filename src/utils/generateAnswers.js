export default function GenerateAnswer(words, wordCorrect){
    let word = wordCorrect;
    let answers = [];
    words.splice(words.indexOf(wordCorrect), 1);
    for(let i = 0; i < 3; i++){
        let elementRandom = words[Math.floor(Math.random() * words.length)];
        while(answers.find(element => element === elementRandom)) elementRandom = words[Math.floor(Math.random() * words.length)];
        answers.push(elementRandom);
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
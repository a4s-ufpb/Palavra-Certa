export default function GenerateAnswer(challenges, challengeAcert){
    let word = challengeAcert;
    let answers = [];
    challenges.splice(challenges.indexOf(challengeAcert), 1);
    for(let i = 0; i < 3; i++){
        let elementRandom = challenges[Math.floor(Math.random() * challenges.length)];
        while(answers.find(element => element === elementRandom)) elementRandom = challenges[Math.floor(Math.random() * challenges.length)];
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
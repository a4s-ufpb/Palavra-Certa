export default function GenerateAnswer(words, wordCorrect){
    let word = wordCorrect; // WORD AS CORRECTANSWER
    let answers = []; // ARRAY EMPTY FOR GENERATE ANSWERS
    words.splice(words.indexOf(wordCorrect), 1); // THIS LINE FIND THE INDEX OF CORRECT ANSWER AND REMOVE AT
    for(let i = 0; i < 3; i++){ // THIS LOOP GENENRATE RANDOM ANSWERS
        let elementRandom = words[Math.floor(Math.random() * words.length)]; // GET A ELEMENT RANDOM
        while(answers.find(element => element === elementRandom)) elementRandom = words[Math.floor(Math.random() * words.length)]; // IF A ELEMENT WAS SORTED REPEAT FOR NO EQUALS ANSWERS
        answers.push(elementRandom); // APPEND IN ANSWES THE ELEMENT GENERATE
    }
    if(word) answers.push(word); // AFTER SORTED THREE ANSWERS APPEND THE ANSWERS CORRECT
    else  answers.push("nulo"); // IF WORD IS NOT FOUND, APPEND 'NULL'
    let indice = answers.length;
    while(indice){ // THIS LOOP SHUFLLE THE ANSWERS
        const indiceRandon = Math.floor(Math.random() * indice--);
        [answers[indice], answers[indiceRandon]] = [answers[indiceRandon], answers[indice]]; 
    }
    return answers;
}
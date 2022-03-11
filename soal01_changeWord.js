/*Challenge 2 soal 1*/

/*Declaring function to change word, fill the argument: selectedText : For the text we seek to change
changedText : For the text we gonna use to replace the selectedText
text : the argument to call the string we want to edit.*/
function changeWord(selectedText, changedText, text) {
    /* using the parameter searchValue (selectedText), and newValue(changedText), we are now able to replace this text using the text.replace.*/
    text = text.replace(selectedText, changedText)
    return text;
};
/* const the string we use*/
const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padanya';

/*console log to call the function and output*/
console.log(changeWord('mencintai', 'membenci', kalimat1))
console.log(changeWord('bromo', 'semeru', kalimat2))
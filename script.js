/** Counter variable outside of the function call; 
this variable will essentially serve as a counter 
for how many websites are left. **/
var counter = 0; 
function openTab() {
    const link = document.createElement('a'); // Create an empty link.
    /** Array of URLs you want. Can be any length. **/
    const arry = ['https://errorsea.com', 'https://google.com', 'https://stackoverflow.com'] 
    if(counter < 3) { //As long as the list is not exhausted, create, go to, and close the links from the array of URLs.
        link.href = arry[counter];
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    counter++; //Go to the next URL and wait for next function call.
}
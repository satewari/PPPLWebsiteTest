/** Counter variable outside of the function call; 
this variable will essentially serve as a counter 
for how many websites are left. **/
var counter = 0;
var myTab;
function openTab() {
    if (myTab) { //Closes the last tab, if that last tab existed (i.e. on first loop)
        myTab.close();
    }
    /** Array of URLs you want. Can be any length. **/
    const arry = ['https://errorsea.com', 'https://google.com', 'https://stackoverflow.com'] 
    if(counter < 3) { //As long as the list is not exhausted, create, go to, and close the links from the array of URLs.
        myTab = window.open(arry[counter], "_blank");
    }
    counter++; //Go to the next URL and wait for next function call.
}
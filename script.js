function alertIfSpeakerSays(theWord){

    window.setInterval(
        () => { 
            string1 = document.getElementsByClassName("CNusmb")[document.getElementsByClassName("CNusmb").length - 1].innerText;
        cleanString="";

        for(let i =0; i<string1.length; i++){
            if (string1[i]!= "," && string1[i]!="."){
                cleanString+=string1[i];
            }
        }
        stringList = cleanString.split(" ");
        for(let i=0;i<stringList.length;i++){
            if(stringList[i].toLowerCase() == theWord){
                alert("The speaker said "+theWord+"!")
            }
        }
    },
    1000
    );
}
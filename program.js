var button = document.getElementById("mybutton");
var word1 = document.getElementById("word1");
var word2 = document.getElementById("word2");

var IDs = new Array();



(async function main() {

    
    var prevDict = await getWordsSwap()
    var len = Object.keys(prevDict).length;
    document.documentElement.style.setProperty('--len', `'${len * 50}'`);

    for(i = 0; i < len; i++) {
        var temp = document.createElement("p"); 
        temp.innerText = "";
        temp.setAttribute("id", Object.keys(prevDict)[i]);
        document.getElementById("sliding").appendChild(temp); 
        temp.innerText = prevDict[Object.keys(prevDict)[i]][0] + " into " + prevDict[Object.keys(prevDict)[i]][1] + "\n";
        IDs.push(temp);
        temp.style.fontFamily = 'Inter, sans-serif';
        temp.style.fontSize = '1em';
        temp.style.fontVariant = 'normal';
    }
    for(i = 0; i < len; i++) {

        
        var button = document.createElement("button"); 
        button.setAttribute("id", Object.keys(prevDict)[i]);
        IDs[IDs.indexOf(document.getElementById(Object.keys(prevDict)[i]))].appendChild(button);
        var temp = document.getElementById(Object.keys(prevDict)[i]);
        button.style.transform = 'translateX(5px)';
        button.style.backgroundColor = 'gainsboro';
        button.style.fontFamily = 'Inter, sans-serif';
        button.style.textAlign = "left";
        button.style.fontSize = '1em';
        button.style.fontVariant = 'normal';
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'rgb(235, 234, 234)';
        });
        button.appendChild(document.createTextNode('Delete'));

        button.onclick = function () {
            button.style.backgroundColor = 'rgb(162, 161, 161)';
            button.style.transform = 'translateY(1px), translateX(5px)';
            var thing = this.id;
            //alert(thing);
            //alert(thing);
            //temp.remove();
            // for(j = 0; j < IDs.length; j++) {
            //     if(IDs[j].ge)
            // }
            
            var tempID = IDs[IDs.indexOf(document.getElementById(thing))];
            IDs.splice(IDs.indexOf(document.getElementById(thing)), 1);
            tempID.remove();
            //alert(IDs.length)
            delete prevDict[thing];
            //alert(Object.keys(prevDict).length)
            chrome.storage.local.set({"swapWords": prevDict});
                
            //});
            //this.remove();
        };
    }
 



})();

document.getElementById('mybutton').onclick = async function() {
    var tempArray = new Array();
    var text1 = word1.value;
    var text2 = word2.value;
    var prevDict = await getWordsSwap();
    var len = Object.keys(prevDict).length;

    //alert(len)
    //alert(prevDict)
    //alert(prevDict[1].value)
    if(text1 != "" && text2 != "") {
        tempArray = [text1, text2]
        prevDict[text1 + text2] = tempArray;
        //alert(prevDict[len + ""][0])
        await chrome.storage.local.set({"swapWords": prevDict});
        update(text1, text2);
    }
    else {
        
    }

    word1.value = null;
    word2.value = null;

}
async function getWordsSwap() {
   
    const result = await chrome.storage.local.get(["swapWords"])
        if(!(result.swapWords === undefined)) {
                //alert(Object.keys(result.swapWords).length)  
                return result.swapWords
        }
    temp_dictionary={ 
        "0":["car","cat"], 
        "1":["force","horse"], 
        "2":["drone", "dog"],
        "3":["poll","psychic reading"], 
        "4":["electric","atomic"], 
        "5":["electricity", "atomicity"],
        "6":["space","spaaace"], 
        "7":["election","eating contest"], 
        "8":["light", "dark"],
        "9":["minute","placeholderaaa"], 
        "10":["year","minute"], 
        "11":["placeholderaaa", "year"],
        "12":["phone","pokedex"]
    };        
    //alert(Object.keys(temp_dictionary).length)    
    
    return temp_dictionary;
}

async function update(t1, t2) {
    var prevDict = await getWordsSwap()
    
    
    var len = Object.keys(prevDict).length;
    //alert(len);

    for(i = len - 1; i < len; i++) {
        var temp = document.createElement("p"); 
        temp.innerText = "";
        temp.setAttribute("id", Object.keys(prevDict)[i]);
        document.getElementById("sliding").appendChild(temp); 
        temp.innerText = t1 + " into " + t2 + "\n";
        IDs.push(temp);
        //alert(IDs.length);
        temp.style.fontFamily = 'Inter, sans-serif';
        temp.style.fontSize = '1em';
        temp.style.fontVariant = 'normal';
    }
    for(i = len - 1; i < len; i++) {

        
        var button = document.createElement("button"); 
        button.setAttribute("id", Object.keys(prevDict)[i]);
        IDs[IDs.length - 1].appendChild(button);
        //alert(IDs.indexOf(document.getElementById(Object.keys(prevDict)[i])));
        var temp = document.getElementById(Object.keys(prevDict)[i]);
        button.style.transform = 'translateX(5px)';
        button.style.backgroundColor = 'gainsboro';
        button.style.textAlign = "left";
        button.style.fontFamily = 'Inter, sans-serif';
        button.style.fontSize = '1em';
        button.style.fontVariant = 'normal';
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'rgb(235, 234, 234)';
        });
        button.appendChild(document.createTextNode('Delete'));

        button.onclick = function () {
            button.style.backgroundColor = 'rgb(162, 161, 161)';
            button.style.transform = 'translateY(1px), translateX(5px)';
            var thing = this.id;
            //alert(thing);
            //alert(thing);
            //temp.remove();
            IDs[IDs.indexOf(document.getElementById(thing))].remove();
            IDs.splice(IDs.indexOf(document.getElementById(thing)), 1);
            delete prevDict[thing];
            //alert(Object.keys(prevDict).length)
            chrome.storage.local.set({"swapWords": prevDict});
                
            //});
            //this.remove();
        };
    }
    
}
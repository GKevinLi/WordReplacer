console.log("Page Loaded")
var text = document.body.innerHTML;
//console.log(text)
//console.log(document.body.innerText);
async function replace() {
    const regex = /is|am|123456/gi;
    const regex2 = new RegExp("^([a-zA-Z.!?\\-,:+]+)$")
    const el = document.querySelector('body');
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    var replaceWords = await getWordsSwap();
    var len = Object.keys(replaceWords).length;
    while (walker.nextNode()) {
      const node = walker.currentNode;
      //console.log(node.nodeValue)
      if(node.nodeValue.match(/[A-Z]/gi) != null) {
        var words = node.nodeValue.split(" ")
        for(i = 0; i < words.length; i++) {
          if(words[i].match(regex2)) {
            console.log(words[i])
            for(j = 0; j < len; j++) {
                words[i] = replaceWord(replaceWords[Object.keys(replaceWords)[j]][0], replaceWords[Object.keys(replaceWords)[j]][1], words[i]);
            }
            // words[i] = replaceWord("car", "cat", words[i]);
            // words[i] = replaceWord("force", "horse", words[i]);
            // words[i] = replaceWord("drone", "dog", words[i]);
            // words[i] = replaceWord("poll", "psychic reading", words[i]);
            // words[i] = replaceWord("electric", "atomic", words[i]);
            // words[i] = replaceWord("electricity", "atomicity", words[i]);
            // words[i] = replaceWord("space", "spaaace", words[i]);
            // words[i] = replaceWord("election", "eating contest", words[i]);
            // words[i] = replaceWord("light", "dark", words[i]);
            // words[i] = replaceWord("minute", "placeholderaaa", words[i]);
            // words[i] = replaceWord("year", "minute", words[i]);
            // words[i] = replaceWord("placeholderaaa", "year", words[i]);
            // words[i] = replaceWord("phone", "pokedex", words[i]);
          }

          
        }
        node.nodeValue = words.join(" ")
      }
      //console.log(node.nodeValue);
      //node.nodeValue = replaceWord("car", "cat", node);
      //node.nodeValue = replaceWord("car", "cat", node);
//       node.nodeValue = node.nodeValue.replace("Witnesses", "These dudes I know")
// node.nodeValue = node.nodeValue.replace("witnesses", "these dudes I know")
// node.nodeValue = node.nodeValue.replace("Allegedly", "Kinda probably")
// node.nodeValue = node.nodeValue.replace("allegedly", "kinda probably")
// node.nodeValue = node.nodeValue.replace("New study", "Tumblr post")
// node.nodeValue = node.nodeValue.replace("new study", "tumblr post")
// node.nodeValue = node.nodeValue.replace("Rebuild", "Avenge")
// node.nodeValue = node.nodeValue.replace("rebuild", "avenge")
// node.nodeValue = node.nodeValue.replace("Phone", "Pokedex")
// node.nodeValue = node.nodeValue.replace("phone", "pokedex")
// node.nodeValue = node.nodeValue.replace("Debate", "Dance-off")
// node.nodeValue = node.nodeValue.replace("debate", "dance-off")
// node.nodeValue = node.nodeValue.replace("Google Glass", "Virtual Boy")
// node.nodeValue = node.nodeValue.replace("google glass", "virtual boy")
// node.nodeValue = node.nodeValue.replace("Senator", "Elf-Lord")
// node.nodeValue = node.nodeValue.replace("senator", "Elf-Lord")
// node.nodeValue = node.nodeValue.replace("Election", "Eating Contest")
// node.nodeValue = node.nodeValue.replace("election", "eating contest")
// node.nodeValue = node.nodeValue.replace("Congressional Leaders", "River Spirits")
// node.nodeValue = node.nodeValue.replace("congressional leaders", "river spirits")
// node.nodeValue = node.nodeValue.replace("Homeland Security", "Homestar Runner")
// node.nodeValue = node.nodeValue.replace("homeland security", "homestar runner")
// node.nodeValue = node.nodeValue.replace("could not be reached for comment", "is guilty and everyone knows it")
// node.nodeValue = node.nodeValue.replace("Self-driving", "Uncontrollably swerving")
// node.nodeValue = node.nodeValue.replace("self-driving", "uncontrollably swerving")
// node.nodeValue = node.nodeValue.replace("Candidate", "Airbender")
// node.nodeValue = node.nodeValue.replace("candidate", "airbender")
// node.nodeValue = node.nodeValue.replace("Vows To", "Probably Won't")
// node.nodeValue = node.nodeValue.replace("vows to", "probably won't")
// node.nodeValue = node.nodeValue.replace("At Large", "Very Large")
// node.nodeValue = node.nodeValue.replace("at large", "very large")
// node.nodeValue = node.nodeValue.replace("Successfully", "Suddenly")
// node.nodeValue = node.nodeValue.replace("successfully", "suddenly")
// node.nodeValue = node.nodeValue.replace("Expands", "Physically Expands")
// node.nodeValue = node.nodeValue.replace("expands", "physically expands")
// node.nodeValue = node.nodeValue.replace("first-degree", "friggin awful")
// node.nodeValue = node.nodeValue.replace("second-degree", "friggin awful")
// node.nodeValue = node.nodeValue.replace("third-degree", "friggin awful")
// node.nodeValue = node.nodeValue.replace("An unknown number", "Like hundreds")
// node.nodeValue = node.nodeValue.replace("an unknown number", "like hundreds")
// node.nodeValue = node.nodeValue.replace("Front-runner", "Blade Runner")
// node.nodeValue = node.nodeValue.replace("front-runner", "blade runner")
// node.nodeValue = node.nodeValue.replace("Global", "Spherical")
// node.nodeValue = node.nodeValue.replace("global", "spherical")
// node.nodeValue = node.nodeValue.replace("Minutes", "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
// node.nodeValue = node.nodeValue.replace("minutes", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
// node.nodeValue = node.nodeValue.replace("Years", "Minutes")
// node.nodeValue = node.nodeValue.replace("years", "minutes")
// node.nodeValue = node.nodeValue.replace("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "Years")
// node.nodeValue = node.nodeValue.replace("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "years")
// node.nodeValue = node.nodeValue.replace("No indication", "Lots of signs")
// node.nodeValue = node.nodeValue.replace("no indication", "lots of signs")
// node.nodeValue = node.nodeValue.replace("urged restraint by", "drunkenly egged on")
// node.nodeValue = node.nodeValue.replace("Urged restraint by", "Drunkenly egged on")
// node.nodeValue = node.nodeValue.replace("Horsepower", "Tons of horsemeat")
// node.nodeValue = node.nodeValue.replace("horsepower", "tons of horsemeat")

// node.nodeValue = node.nodeValue.replace("Ancient", "Haunted")
// node.nodeValue = node.nodeValue.replace("ancient", "haunted")
    }
  }

replace()

function replaceWord(word1, word2, origText) {
  var firstLetter = String(word1).charAt(0)
  var restWord = String(word1).slice(1);
  
  //const regex3 = new RegExp("^(c|C)((ar|AR)((s|S)?)((\.|-|,|!|\?|:|\+)*))$")
  var regexStr = "^(" + firstLetter + "|" + firstLetter.toUpperCase() + ")((" + restWord + "|" + restWord.toUpperCase() + ")((s|S)?)((\\.|-|,|!|\\?|:|\\+)*))$";
  const regex3 = new RegExp(regexStr)
  if(origText.match(regex3)) {
    var val1 = capitalizeFirstLetter(word1);
    var val2 = capitalizeFirstLetter(word2);
    var text =  new String(origText);
    text = text.replace(word1, word2)
    text = text.replace(val1, val2)
    text = text.replace(word1 + "s", word2 + "s")
    text = text.replace(val1 + "s", val2 + "s")
    return text;
  }
  return origText;
}
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
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
// console.log(result)
// //document.body.innerText = result
// document.body.innerHTML = result
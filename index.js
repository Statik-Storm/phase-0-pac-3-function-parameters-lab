function introduction(firstName) {
  return `Hi, my name is ${firstName}.`;
  }

function introductionWithLanguage(firstName, language) {
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`;
  }
  
  function introductionWithLanguageOptional(firstName = "Gracie", JavaScript) {
    return `Hi, my name is ${firstName} and I am learning to program in ${JavaScript}.`;
  }

  function introductionWithLanguageOptional(firstName = "Gracie", undefined = "JavaScript") {
    return `Hi, my name is ${firstName} and I am learning to program in ${undefined}.`;
  }
  
  console.log(introductionWithLanguage("Hi, my name is Aki and I am learning to program in Ember.js"));
  console.log(introductionWithLanguageOptional("Hi, my name is Aki and I am learning to program in JavaScript"));
  console.log(introductionWithLanguageOptional("Hi, my name is Gracie and I am learning to program in JavaScript."));
  console.log(introductionWithLanguageOptional("Hi, my name is Gracie and I am learning to program in Python."));
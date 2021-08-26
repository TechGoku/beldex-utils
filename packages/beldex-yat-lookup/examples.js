
const YatBeldexLookup = require('./index');
let yatBeldexLookup = new YatBeldexLookup({ debugMode: true });
console.log(yatBeldexLookup);
console.log(yatBeldexLookup.getBasePath());
console.log("Valid yat?");
setTimeout(() => {

    //yatBeldexLookup.testEmojisAgainstUnicodePropertyEscape(); 

    // Expect true
    console.log(yatBeldexLookup.isValidYatHandle("😂😂😂"))
    
    // Expect true
    console.log(yatBeldexLookup.isValidYatHandle("🐶"))
    console.log(yatBeldexLookup.isValidYatHandle("🐶🐶"))

    // Expect a false
    console.log(yatBeldexLookup.isValidYatHandle("a😃😃😃"))
    
    // expect true
    // yatBeldexLookup.isValidYatCharacter("🔫").then((response) => {
    //     console.log(response);
    // });
    // // // expect false
    // yatBeldexLookup.isValidYatCharacter("😃").then((response) => {
    //     console.log(response);
    // })
    // // // expect false
    // yatBeldexLookup.isValidYatCharacter("😀").then((response) => {
    //     console.log(response);
    // })
    // // // expect false
    // yatBeldexLookup.isValidYatCharacter("😄").then((response) => {
    //     console.log(response);
    // })
    // // // expect false
    // yatBeldexLookup.isValidYatCharacter("😁").then((response) => {
    //     console.log(response);
    // })
    // // yatBeldexLookup.isValidYatHandle("🔫🔫🔫").then((response) => {
    // //     console.log("Is this handle valid?");
    // //     console.log(response);
    // // })
    yatBeldexLookup.lookupBeldexAddresses("😂😂😂").then((response) => {
        console.log(`Result of beldex address lookup`);
        console.log(response);
    })

}, 1000);
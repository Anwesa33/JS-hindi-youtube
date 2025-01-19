const accountId = 144553
let accountEmail = "anwesaray@google.com"
var accountPassword = "12345"
accountCity = "Chandannagar"
let accountState;
//accountId = 2 // not allowed as one cannot change the value assigned to a const 
accountEmail = "ar@ar.com"
accountPassword = "212121"
accountCity = "Bangaluru"


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
let, const, var are called keywords
do not use var, it is a old timey way, and it created errors when JS didn't know what scope(block / functional) was,
scope is what we write inside {}
we can assign a memory without using const or let keyword, but it is highly advised against

here we learned how to print something in the terminal with log or table.
*/
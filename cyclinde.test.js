let indhu = require("./node_modules/indhu-test/indhu");
let cyclinder = require("./cyclinder");

let result = cyclinder(2, 3);
let expected = 62.8;

indhu.test(result).toBeEqualTo(expected);

/*Fail case*/
result = cyclinder(2, 8);
expected = 125.6;

indhu.test(result).toBeEqualTo(expected);

result = cyclinder(8,3);
expected = 552.64;

indhu.test(result).toBeEqualTo(expected);

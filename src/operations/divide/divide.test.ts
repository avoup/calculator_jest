import divide from "./divide";

describe.each`
    a     | b       | res
    ${10} | ${2}    | ${5}
    ${9}  | ${3}    | ${3}
    ${8}  | ${4}    | ${2}
`('[DIVIDE][SUITE][DATA_DRIVEN] a=$a plus b=$b should be res$res', ({a, b, res}) => {

    it('[DIVIDE][TEST] a plug be should be res', () => {
        expect(divide(a, b)).toBe(res);
    });
});
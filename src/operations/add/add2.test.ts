import add from './add';

test('[ADD2][STANDALONE] adds 2 + 2 to equal 4', () => {
    expect(add(2, 2)).toBe(4);
});

describe('[ADD2][SUITE] should add stuff', () => {
    it('[ADD2][TEST] should add normally', () => {
        expect(add(10, 5)).toBe(15)
    })

    it('[ADD2][SUITE] should fail', () => {
        expect(add(10, 5)).toBe(5)
    })
})
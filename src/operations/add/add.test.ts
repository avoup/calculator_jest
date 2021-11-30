import add from './add';

test('[ADD][STANDALONE] adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

describe('[ADD][SUITE] should add stuff', () => {
    it('[ADD][TEST] 10 plus 5 should be 15', () => {
        expect(add(10, 5)).toBe(15)
    })

    it('[ADD][TEST] should fail', () => {
        expect(add(10, 5)).toBe(150)
    })
})

import {multiply, pow} from "./multiply";

describe('[MULTIPLY][SUITE] should skip some test inside', () => {
    it.skip('[MULTIPLY][TEST] skip with it.skip', () => {
        expect(multiply(10, 5)).toBe(50)
    })
    xit('[MULTIPLY][TEST] skip with xit', () => {})
    it('[MULTIPLY][TEST] should pass', () => {})
    it('[MULTIPLY][TEST] should fail', () => {
        expect(true).toBe(false)
    })
    it('[ADD][TEST] should skip from sl-jest-plugin', () => {})
    // @ts-ignore
})

// describe.skip('[MULTIPLY][SUITE] should skip whole describe', () => {})
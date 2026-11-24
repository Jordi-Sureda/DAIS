import { describe, it, expect } from 'vitest'
import { rollDie } from './dice.js'

describe('rollDie', () => {
  it('devuelve valores entre 1 y el número de caras', () => {
    for (let i = 0; i < 1000; i++) {
      const r = rollDie(20)
      expect(r).toBeGreaterThanOrEqual(1)
      expect(r).toBeLessThanOrEqual(20)
    }
  })

  it('usa el generador inyectado', () => {
    expect(rollDie(6, () => 0)).toBe(1)
    expect(rollDie(6, () => 0.999)).toBe(6)
  })
})
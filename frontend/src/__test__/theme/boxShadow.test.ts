import { boxShadow } from '../../theme'

describe('boxShadow', () => {
  it('should have box shadow values that are strings and containing "rgba"', () => {
    Object.entries(boxShadow).forEach(([_, boxShadowValue]) => {
      expect(boxShadowValue).toBeTypeOf('string')
      expect(boxShadowValue.includes('rgba')).toBe(true)
    })
  })
})

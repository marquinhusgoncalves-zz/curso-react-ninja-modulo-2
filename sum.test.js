'use strict'

import {expect} from 'chai'
import sum from './sum'

it('sum should be a function', () => {
  expect(sum).to.be.a('function')
})

// it('Um é igaul a 1', () => {
  // console.assert(1 === 1, '1 não é igual a 2')
  // Usando funções doJest
  // expect(1).toBe(1)
// })

// Exemple
// describe('# ESCOPO', () => {
//   it('Testando Jest', () => {})
//   it('Testando Jest 2', () => { })
// })

// describe('# ESCOPO 2', () => {
//   it('Testando Jest', () => { })
//   it('Testando Jest 2', () => { })
// })

/*jshint esversion: 6, asi: true */

const test = require('tape')
const l = require('./index.js')

test('joins normally when everything truthy', t => {
  t.equal(l`a, ${true}, ${1}, ${'testing'}`, 'a, true, 1, testing')
  t.end()
})

test('handles missing last section perperly', t => {
  t.equal(l`a${1}b${true}c${null}d`, 'a1btruec')
  t.end()
})

test('handle proper full name with many parts', t => {
  t.equal(l`${'Allain'} ${'Noel'} ${'Joseph'} ${'Lalonde'}`, 'Allain Noel Joseph Lalonde')
  t.end()
})

test('handle proper full name with null parts', t => {
  t.equal(l`${'Allain'} ${null} ${null} ${'Lalonde'}`, 'Allain Lalonde')
  t.end()
})

test('handle name with undefined parts', t => {
  t.equal(l`${'Allain'} ${undefined} ${undefined} ${'Lalonde'}`, 'Allain Lalonde')
  t.end()
})

test('only null and undefined are treated as empty', t => {
  t.equal(l`${0}${false}${' '}${'0'}`, '0false 0')
  t.end()
})

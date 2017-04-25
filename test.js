/*jshint esversion: 6, asi: true */

const test = require('tape')
const l = require('./index.js')

test('joins normally when everything truthy', t => {
  t.equal(l`${true}, ${1}, ${'testing'}`, 'true, 1, testing')
  t.end()
})

test('handles missing last section perperly', t => {
  t.equal(l`${1}b${true}c${null}`, '1btrue')
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

test('handles missing first value', t => {
  t.equal(l`${null}, ${true}`, 'true')
  t.equal(l`a${null}, ${true}`, 'atrue')
  t.equal(l`a${null}b${1}c${2}`, 'a1c2')
  t.end()
})

test('handles missing last value', t => {
  t.equal(l`${true}, ${null}`, 'true')
  t.end()
})

test('handles sequence of missing values from start', t => {
  t.equal(l`${1},${null},${null},${null}`, '1')
  t.end()
})

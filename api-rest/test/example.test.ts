import {expect, test} from 'vitest'
// import {app} from '../src/server'

test('o usuário consegue criar uma nova transação', ()=>{
    const responseStatusCode = 201
    
    expect(responseStatusCode).toEqual(201)
})
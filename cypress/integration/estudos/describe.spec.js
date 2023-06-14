/// <reference types="cypress" />

it.only('An external test...', ()=>{

})

describe('Should group tests...', () => {

    describe('Should first group more specific tests...', () =>{
        it.skip('An specific test...', ()=>{

        })

        it('An internal test(First describe)...', ()=>{

        })
    })

    describe.skip('Should second group more specific tests...', () =>{
        it('An specific test...', ()=>{

        })
    })

    it('An internal test...', ()=>{

    })
    
})
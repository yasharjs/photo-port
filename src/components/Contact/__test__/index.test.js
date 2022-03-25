import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup)

describe('Contact component',()=>{
    // baseline test
    it('renders',()=>{
        render(<Contact></Contact>)
    })

    // snapshot
    it('matches snapshot',()=>{
        const {asFragment} = render(<Contact></Contact>)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('Match the text content',()=>{
    it('matching content',()=>{
        const {getByTestId} = render(<Contact></Contact>)
        expect(getByTestId('contact')).toHaveTextContent('Contact me')
        expect(getByTestId('btnSubmit')).toHaveTextContent('Submit')
    })
})


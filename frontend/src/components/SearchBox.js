import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Header from './Header'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} className='d-flex mb-3  ms-4 ' inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-3  p-2 form-control  mx-3 my-4'  style={{width: "400px"}}
            >
                
            </Form.Control>

            <Button
                type='submit' variant='outline-light bg-light' className='ms-auto my-4  ' style={{width: "40px",height:"50px"}}>
            <i class="fa fa-search text-dark"></i>
             </Button>
        </Form>
    )
}

export default SearchBox

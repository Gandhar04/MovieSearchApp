import React from 'react'
import { Form } from 'react-router-dom'

function SearchForm() {
  
  return (
    <Form>
        <input type="text" name="search" id="search"/>
        <button type='submit'>Search</button>
    </Form>
  )
}

export default SearchForm
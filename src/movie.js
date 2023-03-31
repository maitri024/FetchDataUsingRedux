import React, { useEffect, useState } from 'react'
import { adddata } from './redux/createslice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import "./movie.css"

function Movie() {
  const dataFromState = useSelector(state=>state.datagetting.value);
  const dispatch = useDispatch()
  
  console.log(dataFromState,"dataFromState")

  const dataa=()=>{
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/actors',
      headers: {
        'X-RapidAPI-Key': '20a62c0289mshbc4638861bea9b4p190a75jsndee19b084ef3',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data.results,"results");
      dispatch(adddata(response.data.results))
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    dataa()

  }, [])
  
  return (
    <div>
<table>
  <tr>
    <td>NAME</td>
    <td>BIRTH YEAR</td>
    <td>DEATH YEAR</td>
    <td>PROFESSION</td>
  </tr>
      {dataFromState.map((ele)=>{
        return(
          
            <tr>
              <td>{ele.primaryName}</td>
              <td>{ele.birthYear}</td>
              <td>{ele.deathYear}</td>
              <td>{ele.primaryProfession}</td>
            </tr>
        )
      })}
     
      </table>
    </div>
  )
}

export default Movie

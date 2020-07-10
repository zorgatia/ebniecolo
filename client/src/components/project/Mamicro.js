import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {Radar} from 'react-chartjs-2';

const Mamicro = props => {

    const data = {
        labels: [ '','1', '2', '3', '4', '5', '6', '','1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [ null,0, 0, 0, 0, 0, 0,null, 3, 4, 3, 4, 5, 4]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [ 4, 2, 5, 1, 2, 3,0,0,0, 0, 0, 0, 0, 0]
          }
        ]
      };
    return (
        <Fragment>
            
                <Radar legend={null} data={data} />
                <Radar legend={null} options={{ticks:null}} data={data} />
          
        </Fragment>
    )
}

Mamicro.propTypes = {

}

export default Mamicro

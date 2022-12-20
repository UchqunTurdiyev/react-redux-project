import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

function ValidationError(props) {
    const {error} = useSelector(state => state.auth)
    console.log(error);

    const errorMessage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name].join(', ')
            return `${name} ${msg}`
          })
    }, [error])

    console.log(error !== null && errorMessage());

    return error !== null && (
        <div>
            {errorMessage().map(item => {
               return(
                <p className='text-white-500 text-sm py-1 px-2 my-1 rounded-md bg-red-400'>{item}</p>
               )
            }
            )}
        </div>
    );
}

export default ValidationError;
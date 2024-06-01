import React from 'react'

const ReviewWriteComponent = () => {
  return (
    <div>
         <h3 className='text-center'>Write New Review</h3>
            <form>
                {/* Field for review title */}
                <div className='form-group'>
                    <label className='form-label text-center'>Album Title:</label>
                    <input
                    type='text'
                    name='atitle'
                    className={`form-control ${errors.atitle ? 'is-invalid': ''}`}
                    //Changes userName in useState variable immediately something is typed in form
                    onChange={handleaTitle}
                    ></input>

                </div>
                {/* Field for album title*/}
                <div className='form-group'>
                    <label className='form-label text-center'>Review Title:</label>
                    <input
                    type='text'
                    name='title'
                    className={`form-control ${errors.title ? 'is-invalid': ''}`}
                    onChange={handleTitle}
                    ></input>

                </div>
                {/* Field for review body*/}
                <div className='form-group'>
                    <label className='form-label text-center'>Review:</label>
                    
                    <textarea
                    type='text'
                    name='body'
                    className={`form-control ${errors.body ? 'is-invalid': ''}`}
                    rows={7}
                    onChange={handleBody}
                    ></textarea>

                </div>
                <br/>   
                {/*Submit button*/}
                <div className='text-center'>
                    <button className='btn btn-success' onClick={submitReview}>New Review</button>
                </div>  
                
            </form>
    </div>
  )
}

export default ReviewWriteComponent
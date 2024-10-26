import React from 'react'

const Demo2 = () => {
    return (
        <div className='container'>
            <form method="post" action="" role="form" class="form-inline">
                <div class="form-group">
                    <label for="rg-from">Ab: </label>
                    <input type="text" id="rg-from" name="rg-from" value="" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="rg-to">Bis: </label>
                    <input type="text" id="rg-to" name="rg-to" value="" class="form-control" />
                </div>
                <div class="form-group">
                    <input type="button" value="Clear" class="btn btn-default btn-clear" />
                    <input type="submit" value="Los!" class="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default Demo2
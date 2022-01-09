import React from 'react'
import Selector from './Selector'

export default function D3LineChart({data, active, hideModal, size, month, year}) {
    return (
        <div>
            <Selector
                data={data}
                active={active}
                hideModal={hideModal}
                size={size}
                month={month}
                year={year}
            />
        </div>
    )
}

import ModalGraphic from 'components/composed/ModalGraphic/ModalGraphic'
import React, {useState} from 'react'
import D3LineGraphic from './D3LineGraphic'
import Selector from './Selector'

export default function D3LineChart({data, size, month, year}) {
    const [active, setActive] = useState(false);
    const hideModal = () => setActive(!active);
    return (
        <div>
            <Selector
                data={data}
                active={active}
                hideModal={() => hideModal()}
                size={size}
                month={month}
                year={year}
            />
            <ModalGraphic
                active={active}
                hideModal={hideModal}
                children={
                    <Selector
                        data={data}
                        active={active}
                        size={size}
                        hideModal={() => hideModal()}
                        year={year}
                        month={month}
                    />
                }
            />
        </div>
    )
}

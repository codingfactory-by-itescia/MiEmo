import React from 'react'

import StoreItem from './StoreItem'

import useStoreContext from '../../context/StoreContext'
import ComponentFactory from '../layout/ComponentFactory'

function Store() {
	const { widgetEventManager } = useStoreContext()

	return (
		<>
			<div className="my-2">
				<div>Magasin de widgets</div>
			</div>
			<div className="d-flex overflow-x-auto w-100">
				{Object.keys(ComponentFactory).map(id => {
					return (
						<StoreItem
							key={'stroke_' + id}
							componentInfos={{ ...ComponentFactory[id], id }}
							mode="add"
							event={widgetEventManager}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Store

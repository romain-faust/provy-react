import { Container } from '@romain-faust/provy'
import React, { PropsWithChildren } from 'react'

import { ContainerContext } from './container-context'

interface ContainerProviderProps {
	container: Container
}

export function ContainerProvider({
	children,
	container,
}: PropsWithChildren<ContainerProviderProps>) {
	return (
		<ContainerContext.Provider value={container}>
			{children}
		</ContainerContext.Provider>
	)
}

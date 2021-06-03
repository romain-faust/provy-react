import { Container } from '@romain-faust/provy'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { ContainerProvider } from './container-provider'
import { useContainer } from './use-container'

describe('useContainer()', () => {
	it('should return the container from the closest ContainerContext ancestor', () => {
		const container = new Container()

		const { result } = renderHook(() => useContainer(), {
			wrapper: ({ children }) => (
				<ContainerProvider container={container}>
					{children}
				</ContainerProvider>
			),
		})

		expect(result.current).toBe(container)
	})

	it('should return the default container if there is no ContainerContext ancestor', () => {
		const { result } = renderHook(() => useContainer())

		expect(result.current).toBeInstanceOf(Container)
	})
})

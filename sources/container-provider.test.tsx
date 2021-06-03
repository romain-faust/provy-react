import { Container } from '@romain-faust/provy'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { ContainerProvider } from './container-provider'
import { useContainer } from './use-container'

describe('ContainerProvider', () => {
	it('should use the given container', () => {
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
})

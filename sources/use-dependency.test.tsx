import { Container, Identifier } from '@romain-faust/provy'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { ContainerProvider } from './container-provider'
import { useDependency } from './use-dependency'

describe('useDependency()', () => {
	it('should return the dependency from the closest ContainerContext ancestor', () => {
		const identifier = new Identifier('key')
		const value = 'value'

		const container = new Container()
		container.bindConstant(identifier, value)

		const { result } = renderHook(() => useDependency(identifier), {
			wrapper: ({ children }) => (
				<ContainerProvider container={container}>
					{children}
				</ContainerProvider>
			),
		})

		expect(result.current).toBe(value)
	})

	it('should throw an error if the dependency is not registered in the closest ContainerContext ancestor', () => {
		const identifier = new Identifier('key')

		const { result } = renderHook(() => useDependency(identifier))

		expect(result.error).toBeInstanceOf(Error)
	})
})

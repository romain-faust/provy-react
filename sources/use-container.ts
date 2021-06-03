import { Container } from '@romain-faust/provy'
import { useContext } from 'react'

import { ContainerContext } from './container-context'

export function useContainer(): Container {
	return useContext(ContainerContext)
}

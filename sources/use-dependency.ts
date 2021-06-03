import { Identifier } from '@romain-faust/provy'

import { useContainer } from './use-container'

export function useDependency<T>(identifier: Identifier<T>): T {
	return useContainer().resolve(identifier)
}

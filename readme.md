# @romain-faust/provy-react

React bindings for [Provy](https://www.npmjs.com/package/@romain-faust/provy).

## Installation

_With NPM:_

```bash
npm install @romain-faust/provy-react
```

_With Yarn:_

```bash
yarn add @romain-faust/provy-react
```

## Usage

```tsx
// root.tsx

import { Container } from '@romain-faust/provy'
import { ContainerProvider } from '@romain-faust/provy-react'

const container = new Container()

function Root() {
	return (
		<ContainerProvider container={container}>
			<UsersList />
		</ContainerProvider>
	)
}

// users-list.tsx

import { useContainer, useDependency } from '@romain-faust/provy-react'

function UsersList() {
	const fetchUsers = useDependency(identifiers.fetchUsers)

	// ...
}
```

## API

### `<ContainerProvider />`

Provides a `Container` instance (uses [React Context](https://reactjs.org/docs/context.html) under the hood).

```tsx
import { Container } from '@romain-faust/provy'
import { ContainerProvider } from '@romain-faust/provy-react'

const container = new Container()

function Root() {
	return (
		<ContainerProvider container={container}>
			<UsersList />
		</ContainerProvider>
	)
}
```

#### Props

| Name        | Type        | Description                | Required |
| ----------- | ----------- | -------------------------- | -------- |
| `container` | `Container` | The `Container` to provide | `true`   |

### `useContainer()`

Retrieves the `Container` from the closest `ContainerProvider` ancestor. If no `Container` is found it returns the default `Container`.

#### Example

```tsx
import { useContainer } from '@romain-faust/provy-react'

function UsersList() {
	const container = useContainer()

	// ...
}
```

### `useDependency(identifier)`

Retrieves a dependency from the closest `ContainerProvider` ancestor.

> ⚠️ This hook can throw an error if the requested dependency is not registered.

#### Example

```tsx
import { useDependency } from '@romain-faust/provy-react'

function UsersList() {
	const fetchUsers = useDependency(identifiers.fetchUsers)

	// ...
}
```

#### Parameters

| Name         | Type            | Description                                                 | Required |
| ------------ | --------------- | ----------------------------------------------------------- | -------- |
| `identifier` | `Identifier<T>` | The `Identifier` of the dependency that should be retrieved | `true`   |

## License

[MIT](./license.md)

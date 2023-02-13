import { screen } from '@testing-library/dom'
import { render } from '../app'

test('the application can render', () => {
	const testContainerId = 'app'
	const container = document.createElement('div')
	container.id = testContainerId

	document.body.appendChild(container)
	render(testContainerId)

	expect(screen.getByText(/my application/i)).toBeInTheDocument()
})

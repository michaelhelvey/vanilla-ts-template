import invariant from 'tiny-invariant'

export function render(appElementId: string) {
	const app = document.getElementById(appElementId)
	invariant(app, `#${appElementId} is not defined`)
	app.innerHTML =
		'<div class="bg-blue-800 p-4 text-white font-xl">My Application</div>'
}

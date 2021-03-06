import Experience from '../Experience.js'
import Environment from './Environment.js'
import Greyfield from './Greyfield.js'

export default class World {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		// this.fireFlies = new FireFlies()
		// Wait for resources
		this.resources.on('ready', () => {
			// Setup
			this.environment = new Environment()
			// this.landscape = new Landscape()

			this.greyfield = new Greyfield()
		})
	}

	update() {
		/// we add (if (this.landscape)) because absence will cause update to call this.landscape.update() before the resources have loaded and before instantiation
		if (this.landscape) this.landscape.update()
		if (this.greyfield) this.greyfield.update()

		// this.fireFlies.update()
	}

	resize() {
		// this.fireFlies.resize()
	}
}

import Experience from '../Experience.js'
import Environment from './Environment.js'
import FireFlies from './Fireflies.js'
import Landscape from './Landscape.js'
import BasicTreeM from './Plants/BasicTreeM'
import BasicTreeL from './Plants/BasicTreeL'

export default class World {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.fireFlies = new FireFlies()
		// Wait for resources
		this.resources.on('ready', () => {
			// Setup
			this.environment = new Environment()
			this.landscape = new Landscape()
			this.BasicTreeM = new BasicTreeM()
			this.basicTreeL = new BasicTreeL()
		})
	}

	update() {
		/// we add (if (this.landscape)) because absence will cause update to call this.landscape.update() before the resources have loaded and before instantiation
		if (this.landscape) this.landscape.update()

		this.fireFlies.update()
	}

	resize() {
		this.fireFlies.resize()
	}
}

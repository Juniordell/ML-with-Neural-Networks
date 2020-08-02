const net = new brain.NeuralNetwork()

net.train()

const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)

console.log(net.run())
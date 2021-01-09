import React, { Component } from 'react';
import * as THREE from 'three';

class Animation extends Component{
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    
    this.scene = new THREE.Scene()
    
    this.camera = new THREE.PerspectiveCamera(
      65,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 2
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#ffffff')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 'black' })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
    this.start()
  }
  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {
    this.cube.rotation.x += 0.02
    this.cube.rotation.y += 0.02
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }
  render(){
    return(
      <div
        className="animation"
        style={{ width: '500px', height: '300px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default Animation
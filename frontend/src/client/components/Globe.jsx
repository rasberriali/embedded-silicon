import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Globe() {
  const globeRef = useRef()

  useFrame((state, delta) => {
    globeRef.current.rotation.y += delta * 0.1
  })

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        color="#2D7BFD"
        emissive="#1a4b9f"
        emissiveIntensity={0.2}
        shininess={100}
        specular="#ffffff"
        specularIntensity={0.5}
      />
    </mesh>
  )
} 
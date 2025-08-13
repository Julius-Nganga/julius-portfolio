import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

const ComputerModel = () => {
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf') // You'll need to provide a 3D model

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerModel />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas
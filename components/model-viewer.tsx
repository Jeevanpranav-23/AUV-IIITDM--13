"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

const ModelViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const initializeViewer = async () => {
      try {
        const canvasElement = canvasRef.current
        if (!canvasElement) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
          75,
          canvasElement.clientWidth / canvasElement.clientHeight,
          0.1,
          1000,
        )
        const renderer = new THREE.WebGLRenderer({ canvas: canvasElement, antialias: true })
        renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setClearColor(0x1a1a1a)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
        scene.add(ambientLight)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
        directionalLight.position.set(5, 10, 7.5)
        scene.add(directionalLight)

        camera.position.z = 5

        const loader = new GLTFLoader()
        let model: THREE.Group | null = null

        loader.load(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4c8f5671918341e8a6be688fad959f13_opt-1gjXMa96s2Byq8C56Ude5LhW3sSnt9.glb",
          (gltf) => {
            model = gltf.scene
            scene.add(model)

            // Center and scale the model
            const box = new THREE.Box3().setFromObject(model)
            const center = box.getCenter(new THREE.Vector3())
            const size = box.getSize(new THREE.Vector3())

            model.position.sub(center)
            const maxDim = Math.max(size.x, size.y, size.z)
            const scale = 6 / maxDim
            model.scale.setScalar(scale)

            console.log("[v0] GLB model loaded successfully")
          },
          (progress) => {
            console.log("[v0] Loading progress:", (progress.loaded / progress.total) * 100 + "%")
          },
          (error) => {
            console.error("[v0] Error loading GLB model:", error)
          },
        )

        let isDragging = false
        let previousMousePosition = { x: 0, y: 0 }
        let rotationY = 0
        let rotationX = 0

        canvasElement.addEventListener("mousedown", (e) => {
          isDragging = true
          previousMousePosition = { x: e.clientX, y: e.clientY }
        })

        canvasElement.addEventListener("mousemove", (e) => {
          if (isDragging && model) {
            const deltaMove = {
              x: e.clientX - previousMousePosition.x,
              y: e.clientY - previousMousePosition.y,
            }
            rotationY += deltaMove.x * 0.01
            rotationX += deltaMove.y * 0.01
            previousMousePosition = { x: e.clientX, y: e.clientY }
          }
        })

        canvasElement.addEventListener("mouseup", () => {
          isDragging = false
        })

        // Animation loop
        function animate() {
          requestAnimationFrame(animate)

          if (model) {
            model.rotation.y = rotationY
            model.rotation.x = rotationX
          }

          renderer.render(scene, camera)
        }
        animate()

        const handleResize = () => {
          if (canvasElement) {
            camera.aspect = canvasElement.clientWidth / canvasElement.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight)
          }
        }

        window.addEventListener("resize", handleResize)

        return () => {
          window.removeEventListener("resize", handleResize)
        }
      } catch (error) {
        console.error("[v0] Failed to initialize 3D viewer:", error)
      }
    }

    initializeViewer()
  }, [])

  return (
    <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-xs">
        <div className="mb-2 font-semibold">Controls:</div>
        <div>🖱️ Click & drag: Rotate model</div>
      </div>
    </div>
  )
}

export default ModelViewer
